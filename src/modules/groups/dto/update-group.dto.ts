import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateGroupDto {

    @ApiProperty({example: 'IT11Z'})
    @IsString()
    name: string;

    @ApiProperty({example: 'ASdfasdagasdaffdsaf'})
    @IsString()
    description: string;
}