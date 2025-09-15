import { Injectable } from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Student } from "./student.entity";
import { UpdateStudentDto } from "./dto/update-student.dto";

@Injectable()
export class StudentRepository {
    private Student: Student[];

    constructor() {
        this.initializeStudent();
    }

    private initializeStudent() {
        this.Student = [
            { id: 1, name: 'Ion', surname: 'Griu', age: 21, phone: '1010101010', email: 'IG@gmail.com', address: 'cosbuc 1', },
            { id: 2, name: 'Ion', surname: 'Cioban', age: 20, phone: '1111111111', email: 'IC@gmail.com', address: 'cosbuc 2', }
        ];
    }

    getAllStudent() {
        return this.Student;
    }

    getStudentById(id: string) {
        return this.Student.find(Student => Student.id === parseInt(id));
    }

    createStudent(
        name: string,
        surname: string,
        age: number,
        phone: string,
        email: string,
        address: string) {
        const newStudent = {
            id: this.Student.length + 1,
            name, surname, age, phone, email, address
        };
        this.Student.push(newStudent);
        return newStudent;
    }
    updateStudent(id: string, updateStudentDto: UpdateStudentDto) {
        const StudentIndex = this.Student.findIndex(Student => Student.id === parseInt(id));
        if (StudentIndex === -1) {
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
