
import { IsEmail, IsNotEmpty, IsString, IsDefined, NotEquals, IsInt, IsOptional, IsDateString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Optional } from '@nestjs/common';
export class RegisterUserDto {
    @Optional()
    id: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    fullName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    passWord: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    phone: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    provinceId: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    address: string;

    @Optional()
    firebaseId: string;

}
