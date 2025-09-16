import { Module } from "@nestjs/common";
import { GroupController } from "./group.controller";
import { GroupService } from "./group.service";
import { GroupRepository } from "./group.repository";
import { StudentModule } from "../student/student.module";

@Module({
    controllers: [GroupController],
    providers: [
        GroupService,
        GroupRepository
    ],
    exports : [
        GroupService,
        GroupRepository
    ]
})
export class GroupModule {}