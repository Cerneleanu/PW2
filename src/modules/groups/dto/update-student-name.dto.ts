import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateStudentNameDto {
    
    @ApiProperty({example: 'Ina', description: 'The title of the Student'})
    @IsString()
    name: string;
}