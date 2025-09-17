import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
import { StudentRepository } from "./student.repository";
import { GroupRepository } from "../groups/group.repository";
import e from "express";

@Injectable()
export class StudentService {
    constructor(private StudentRepository: StudentRepository
        , private groupRepository: GroupRepository
    ) { }

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
        if (!this.groupRepository.getGroupById(createStudentDto.groupid.toString())) {
            throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
        }
        return this.StudentRepository.createStudent(createStudentDto.name, 
            createStudentDto.surname, 
            createStudentDto.age, 
            createStudentDto.phone, 
            createStudentDto.email, 
            createStudentDto.address, 
            createStudentDto.groupid, 
            createStudentDto.marks,);
    }

    updateStudent(id: string, updateStudentDto: CreateStudentDto) {
        const Student = this.getStudentById(id);
        if (!Student) {
            throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
        } else if (!this.groupRepository.getGroupById(updateStudentDto.groupid.toString())) {
            throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
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