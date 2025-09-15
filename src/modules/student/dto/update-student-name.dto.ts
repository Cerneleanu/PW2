import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateStudentNameDto {
    
    @ApiProperty({example: 'Ina'})
    @IsString()
    name: string;
}