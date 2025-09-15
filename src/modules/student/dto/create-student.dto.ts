import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateStudentDto {
    
    @ApiProperty({example: 'Ion', description: 'The title of the Student'})
    @IsString()
    name: string;

    @ApiProperty({example: 'Gri', description: 'The title of the Student'})
    @IsString()
    surname: string;

    @ApiProperty({example: '52', description: 'The title of the Student'})
    @IsString()
    age: number;

    @ApiProperty({example: '000000000', description: 'The title of the Student'})
    @IsString()
    phone: string;

    @ApiProperty({example: 'name@gmail.com', description: 'The title of the Student'})
    @IsString()
    email: string;

    @ApiProperty({example: 'Grosu 1', description: 'The title of the Student'})
    @IsString()
    address: string;

}