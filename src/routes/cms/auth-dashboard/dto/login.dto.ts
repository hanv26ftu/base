import { IsEmail, IsNotEmpty, IsString, IsDefined, NotEquals, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginUserDasboardDto {
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
}
