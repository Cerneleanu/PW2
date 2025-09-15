import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
import { StudentRepository } from "./student.repository";

@Injectable()
export class StudentService {
    constructor(private StudentRepository: StudentRepository) {}

    getAllStudent() {
        return this.StudentRepository.getAllStudent();
    }

    getStudentById(id: string) {
        const Student = this.StudentRepository.getStudentById(id);
        if (!Student) {
            throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
        }
        return Student;
    }

    createStudent(createStudentDto: CreateStudentDto) {
        return this.StudentRepository.createStudent(createStudentDto.name, createStudentDto.surname, createStudentDto.age, createStudentDto.phone, createStudentDto.email, createStudentDto.address);
    }

    updateStudent(id: string, updateStudentDto: CreateStudentDto) {
        const Student = this.getStudentById(id);
        if (!Student) {
            throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
        }
        return this.StudentRepository.updateStudent(id, updateStudentDto);
    }

    partiallyUpdateStudent(id: string, updateStudentDto: CreateStudentDto) {
        const Student = this.getStudentById(id);
        if (!Student) {
            throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
        }
        return this.StudentRepository.updateStudent(id, updateStudentDto);
    }

    deleteStudent(id: string) {
        this.getStudentById(id);
        return this.StudentRepository.deleteStudent(id);
    }

    updateStudentName(id: string, name: string) {
        const Student = this.getStudentById(id);
        if (!Student) {
            throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
        }
        Student.name = name;
        return this.StudentRepository.updateStudent(id, Student);
    }
}