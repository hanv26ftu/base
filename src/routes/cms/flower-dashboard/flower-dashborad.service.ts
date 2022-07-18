import { Inject, Injectable } from '@nestjs/common';
import { Constants } from 'src/common/constants';
import { DeleteResult, getManager, Repository } from 'typeorm';
import { CreateFlowerDto } from './dto/create-flower.dto';
import {  UpdateFlowerDto } from './dto/update-flower.dto';
import { Flower } from './entities/flower.entity';
import { v4 as uuidv4 } from 'uuid';
import { GetListFlowerDto } from './dto/get-list-flower.dto';
import { Order } from '../order-dashboard/entities/order.entity';

@Injectable()
export class FlowerDashboardService {
  constructor(@Inject(Constants.flowerDashboardReposistory)
  private flowerRepository: Repository<Flower>) {

  }

  async create(createDto: CreateFlowerDto): Promise<Flower> {
    createDto.id=uuidv4();
    createDto.status=createDto.status?createDto.status:"ACTIVE";
    createDto.createdDate = new Date();
    createDto.updatedDate = new Date();
    createDto.createdBy = "ADMIN";
    createDto.updatedBy = "ADMIN";
    return await this.flowerRepository.save(createDto);
  }

  async findAll(getListFlowerDto: GetListFlowerDto): Promise<any> {
    let category = getListFlowerDto.category;
    const manager = getManager();
    const totalDetails = await manager.createQueryBuilder(Flower, "flower")
      .select("count(flower.id) as total")
      .where("flower.category=:category", { category: category })
      .getRawOne();
    const list = await manager.createQueryBuilder(Flower, "flower")
      .select("flower.id", "id")
      .addSelect("flower.title", "title")
      .addSelect("flower.avaUrl", "avaUrl")
      .addSelect("flower.imageList", "imageList")
      .addSelect("flower.currentPrice", "currentPrice")
      .addSelect("flower.oldPrice", "oldPrice")
      .addSelect("flower.category", "category")
      .addSelect("flower.description", "description")
      .addSelect("flower.status", "status")
      .addSelect("SUM(order.quantity)", "totalOrder")
      .leftJoin(Order, "order", "flower.id=order.flowerId")
      .where("flower.category=:category", { category: category })
      .groupBy("flower.id")
      .addGroupBy("flower.title")
      .addGroupBy("flower.avaUrl")
      .getRawMany();
    return { total: parseInt(totalDetails.total), list: list };
  }

  async findOne(id: string): Promise<Flower> {
    return await this.flowerRepository.findOne(id);
  }

  async update(id: string, updateDto: UpdateFlowerDto): Promise<Flower> {
    await this.flowerRepository.update(id, updateDto);
    return await this.flowerRepository.findOne(id);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.flowerRepository.delete(id);
  }
}
