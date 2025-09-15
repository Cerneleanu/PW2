import { Controller, Get, Post, Param, Put, Delete, Patch, Body } from "@nestjs/common";
import { GroupService } from "./group.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupNameDto } from "./dto/update-group-name.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";

@Controller('Group')
export class GroupController {

    constructor(private GroupService: GroupService) { }

    @Get()
    getAllGroup() {
        return this.GroupService.getAllGroup();
    }

    @Get(':id')
    getGroupById(@Param('id') id: string) {
        return this.GroupService.getGroupById(id)
    }

    @Post('')
    createGroup(@Body() createGroupDto: CreateGroupDto) {
        return this.GroupService.createGroup(createGroupDto);
    }

    @Put(':id')
    updateGroup(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
        return this.GroupService.updateGroup(id, updateGroupDto);
    }

    @Patch(':id')
    partiallyUpdateGroup(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
        return this.GroupService.partiallyUpdateGroup(id, updateGroupDto);
    }

    @Patch(':id/update-name')
    updateGroupName(@Param('id') id: string, @Body() updateGroupNameDto: UpdateGroupNameDto) {
        return this.GroupService.updateGroupName(id, updateGroupNameDto.name);
    }

    @Delete(':id')
    deleteGroup(@Param('id') id: string) {
        return this.GroupService.deleteGroup(id);
    }
}