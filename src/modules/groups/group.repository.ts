import { Injectable } from "@nestjs/common";
import { CreateGroupDto } from "./dto/create-group.dto";
import { Group } from "./group.entity";
import { UpdateGroupDto } from "./dto/update-group.dto";

@Injectable()
export class GroupRepository {
    private Group: Group[];

    constructor() {
        this.initializeGroup();
    }

    private initializeGroup() {
        this.Group = [
            { id: 1, name: 'IT21Z', description: 'ASD' },
            { id: 2, name: 'IT11Z', description: 'ABC' }
        ];
    }

    getAllGroup() {
        return this.Group;
    }

    getGroupById(id: string) {
        return this.Group.find(Group => Group.id === parseInt(id));
    }

    createGroup(
        name: string,
        description: string) {
        const newGroup = {
            id: this.Group.length + 1,
            name, description
        };
        this.Group.push(newGroup);
        return newGroup;
    }
    updateGroup(id: string, updateGroupDto: UpdateGroupDto) {
        const GroupIndex = this.Group.findIndex(Group => Group.id === parseInt(id));
        if (GroupIndex === -1) {
            return null;
        }
        const updatedGroup = { ...this.Group[GroupIndex], ...updateGroupDto };
        this.Group[GroupIndex] = updatedGroup;
        return this.Group[GroupIndex];
    }
    deleteGroup(id: string) {
        const GroupIndex = this.Group.findIndex(Group => Group.id === parseInt(id));
        if (GroupIndex === -1) {
            return null;
        }
        const deletedGroup = this.Group.splice(GroupIndex, 1);
        return deletedGroup[0];
    }
}
