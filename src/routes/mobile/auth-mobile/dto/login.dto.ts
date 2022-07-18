import { IsEmail, IsNotEmpty, IsString, IsDefined, NotEquals, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Optional } from '@nestjs/common';

export class LoginUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    phone: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    passWord: string;

    @Optional()
    firebaseId: string;
}
