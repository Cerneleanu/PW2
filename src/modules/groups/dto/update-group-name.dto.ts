import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateGroupNameDto {
    
    @ApiProperty({example: 'IT11Z'})
    @IsString()
    name: string;
}