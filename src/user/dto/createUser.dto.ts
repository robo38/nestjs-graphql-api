import { IsNumber, IsString } from "class-validator";

export class createUserDto {
    @IsString()
    name : string

    @IsNumber()
    age : number
}