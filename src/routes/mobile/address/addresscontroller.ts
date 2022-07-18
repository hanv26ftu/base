import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/jwt/jwt-auth.guard';
import {  AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';


@ApiHeader({
  name: 'Authorization',
  description: 'Access token',
})

//Add resource tag for Swagger
@ApiTags('address')
@UseGuards(JwtAuthGuard)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  create(@Req() request: any, @Body() createAddressDto: CreateAddressDto) {
    console.log(request.user);
    createAddressDto.userId=request.user.userId;
    console.log(createAddressDto)
    return this.addressService.create(createAddressDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Req() request: any) {
    console.log(request.user);
    return this.addressService.findAll(request.user.userId);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(id, updateAddressDto);
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressService.remove(id);
  }
}
