import { Module } from "@nestjs/common";
import { StudentController } from "./student.controller";
import { StudentService } from "./student.service";
import { StudentRepository } from "./student.repository";
import { GroupModule } from "../groups/group.module";

@Module({
    imports : [GroupModule],
    controllers: [StudentController],
    providers: [
        StudentService,
        StudentRepository
    ]
})
export class StudentModule {}