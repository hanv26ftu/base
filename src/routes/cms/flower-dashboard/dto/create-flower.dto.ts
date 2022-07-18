import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateFlowerDto {
    @Optional()
    id: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    avaUrl: string;

    @Optional()
    imageList: string;

    @Optional()
    currentPrice: number;

    @Optional()
    oldPrice: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    category: string;

    @Optional()
    typeId: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string;

    @Optional()
    status: string;

    @Optional()
    createdDate: Date;

    @Optional()
    createdBy: string;


    @Optional()
    updatedDate: Date;

    @Optional()
    updatedBy: string;

}
