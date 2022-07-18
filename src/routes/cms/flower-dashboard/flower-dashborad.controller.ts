import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/jwt/jwt-auth.guard';
import {  FlowerDashboardService } from './flower-dashborad.service';
import {  CreateFlowerDto } from './dto/create-flower.dto';
import {  UpdateFlowerDto } from './dto/update-flower.dto';
import { GetListFlowerDto } from './dto/get-list-flower.dto';
import { AwsS3Service } from 'src/shared/services/aws-s3.service';
import { GetSignedUrlDto } from './dto/get-signedUrl.dto';


@ApiHeader({
  name: 'Authorization',
  description: 'Access token',
})

//Add resource tag for Swagger
@ApiTags('flower')
@UseGuards(JwtAuthGuard)
@Controller('flower')
export class FlowerDashboardController {
  constructor(private readonly flowerService: FlowerDashboardService,private _s3Service: AwsS3Service,) {}
  
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Successfully create' })
  @Post()
  create(@Req() request: any, @Body() createDto: CreateFlowerDto) {
    return this.flowerService.create(createDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Successfully getlist' })
  @Post('getlist')
  findAll(@Req() request: any, @Body() getListFlowerDto: GetListFlowerDto) {
    return this.flowerService.findAll(getListFlowerDto);
  }

 
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ description: 'Successfully sign' })
    @Post('signedUrl')
    getSignedUrl(@Req() request: any, @Body() getSignedUrlDto: GetSignedUrlDto) {
        let mimetype = getSignedUrlDto.mimetype;
        return this._s3Service.getSignedUrl(mimetype);
    }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Successfully getdetail' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flowerService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Successfully update' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateFlowerDto) {
    return this.flowerService.update(id, updateDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Successfully delete' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flowerService.remove(id);
  }
}
