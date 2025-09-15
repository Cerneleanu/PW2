import { Controller, Get, Post, Param, Put, Delete, Patch, Body } from "@nestjs/common";
import { StudentService } from "./student.service";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentNameDto } from "./dto/update-student-name.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";

@Controller('Student')
export class StudentController {

    constructor(private StudentService: StudentService) { }

    @Get()
    getAllStudent() {
        return this.StudentService.getAllStudent();
    }

    @Get(':id')
    getStudentById(@Param('id') id: string) {
        return this.StudentService.getStudentById(id)
    }

    @Post('')
    createStudent(@Body() createStudentDto: CreateStudentDto) {
        return this.StudentService.createStudent(createStudentDto);
    }

    @Put(':id')
    updateStudent(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
        return this.StudentService.updateStudent(id, updateStudentDto);
    }

    @Patch(':id')
    partiallyUpdateStudent(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
        return this.StudentService.partiallyUpdateStudent(id, updateStudentDto);
    }

    @Patch(':id/update-name')
    updateStudentName(@Param('id') id: string, @Body() updateStudentNameDto: UpdateStudentNameDto) {
        return this.StudentService.updateStudentName(id, updateStudentNameDto.name);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string) {
        return this.StudentService.deleteStudent(id);
    }
}