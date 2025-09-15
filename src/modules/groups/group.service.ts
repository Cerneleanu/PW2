import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateGroupDto } from "./dto/create-group.dto";
import { GroupRepository } from "./group.repository";

@Injectable()
export class GroupService {
    constructor(private GroupRepository: GroupRepository) {}

    getAllGroup() {
        return this.GroupRepository.getAllGroup();
    }

    getGroupById(id: string) {
        const Group = this.GroupRepository.getGroupById(id);
        if (!Group) {
            throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
        }
        return Group;
    }

    createGroup(createGroupDto: CreateGroupDto) {
        return this.GroupRepository.createGroup(createGroupDto.name, createGroupDto.description);
    }

    updateGroup(id: string, updateGroupDto: CreateGroupDto) {
        const Group = this.getGroupById(id);
        if (!Group) {
            throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
        }
        return this.GroupRepository.updateGroup(id, updateGroupDto);
    }

    partiallyUpdateGroup(id: string, updateGroupDto: CreateGroupDto) {
        const Group = this.getGroupById(id);
        if (!Group) {
            throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
        }
        return this.GroupRepository.updateGroup(id, updateGroupDto);
    }

    deleteGroup(id: string) {
        this.getGroupById(id);
        return this.GroupRepository.deleteGroup(id);
    }

    updateGroupName(id: string, name: string) {
        const Group = this.getGroupById(id);
        if (!Group) {
            throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
        }
        Group.name = name;
        return this.GroupRepository.updateGroup(id, Group);
    }
}