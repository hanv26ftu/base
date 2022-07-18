import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAddressDto {
    @Optional()
    id: string;

    @Optional()
    userId: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    provinceId: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    fullName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    phone: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    address: string;
}
