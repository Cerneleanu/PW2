import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class UpdateStudentDto {

    @ApiProperty({example: 'Ion'})
    @IsString()
    name: string;

    @ApiProperty({example: 'Gri'})
    @IsString()
    surname: string;

    @ApiProperty({example: '52'})
    @IsString()
    age: number;

    @ApiProperty({example: '000000000'})
    @IsString()
    phone: string;

    @ApiProperty({example: 'name@gmail.com'})
    @IsString()
    email: string;

    @ApiProperty({example: 'Grosu 1'})
    @IsString()
    address: string;

    @ApiProperty({example: '1'})
    @IsString()
    groupid: number;

    @ApiProperty({example: '1 , 2'})
    @IsNumber()
    marks: number[];

    @ApiProperty({example: '0'})
    @IsNumber()
    averagemark: number;
}