import { Injectable, Inject } from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Student } from "./student.entity";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { GroupRepository } from "../groups/group.repository";
import { Group } from "../groups/group.entity";

@Injectable()
export class StudentRepository {
    private Student: Student[];
    private Groups: { [key: number]: string } = {};

    constructor(@Inject(GroupRepository) private groupRepository: GroupRepository) {
        this.initializeStudent();
    }

    private averageMark(marks: number[]): number {
        if (!Array.isArray(marks) || marks.length === 0) return 0;
        if (marks.some(mark => typeof mark !== 'number' || isNaN(mark))) {
            throw new Error('Marks must be an array of valid numbers');
        }
        const sum = marks.reduce((acc, mark) => acc + mark, 0);
        return parseFloat((sum / marks.length).toFixed(2));
    }

    private initializeStudent() {
        this.Student = [
            { id: 1, name: 'Ion', surname: 'Griu', age: 21, phone: '1010101010', email: 'IG@gmail.com', address: 'cosbuc 1', groupid: 1, marks: [9, 7], averagemark: 0  },
            { id: 2, name: 'Ion', surname: 'Cioban', age: 20, phone: '1111111111', email: 'IC@gmail.com', address: 'cosbuc 2', groupid: 2, marks: [8, 5], averagemark: 0  },
        ];
        this.Student = this.Student.map(student => ({
            ...student,
            averagemark: this.averageMark(student.marks)
        }));
        this.loadGroups();
    }

    private loadGroups() {
        try {
            const groups: Group[] = this.groupRepository.getAllGroup();
            this.Groups = groups.reduce<{ [key: number]: string }>((objectgroup, group) => {
                objectgroup[group.id] = group.name;
                return objectgroup;
            }, {});
        } catch (error) {
            this.Groups = {};
        }
    }

    getAllStudent() {
        this.loadGroups();
        return this.Student.map(student => ({
            ...student,
            groupName: this.Groups[student.groupid] || null
        }));
    }

    getStudentById(id: string) {
        this.loadGroups();
        return this.Student.map(student => ({
            ...student,
            groupName: this.Groups[student.groupid] || null
        })).find(student => student.id === parseInt(id));
    }

    createStudent(
        name: string,
        surname: string,
        age: number,
        phone: string,
        email: string,
        address: string,
        groupid: number,
        marks: number[],
    ) {
        this.loadGroups();
        const averagemark = this.averageMark(marks);
        const newStudent = {
            id: this.Student.length + 1,
            name, surname, age, phone, email, address, groupid, marks, averagemark
        };
        const groupExists = this.Groups[newStudent.groupid] !== undefined;
        if (!groupExists) {
            return null;
        }
        this.Student.push(newStudent);
        return newStudent;
    }

    updateStudent(id: string, updateStudentDto: UpdateStudentDto) {
        this.loadGroups();
        const StudentIndex = this.Student.findIndex(Student => Student.id === parseInt(id));
        if (StudentIndex === -1) {
            return null;
        }
        const groupExists = this.Groups[parseInt(updateStudentDto.groupid.toString())] !== undefined;
        if (!groupExists) {
            return null;
        }
        const updatedStudent = { ...this.Student[StudentIndex], ...updateStudentDto };
        this.Student[StudentIndex] = updatedStudent;
        return this.Student[StudentIndex];
    }

    deleteStudent(id: string) {
        const StudentIndex = this.Student.findIndex(Student => Student.id === parseInt(id));
        if (StudentIndex === -1) {
            return null;
        }
        const deletedStudent = this.Student.splice(StudentIndex, 1);
        return deletedStudent[0];
    }
}
