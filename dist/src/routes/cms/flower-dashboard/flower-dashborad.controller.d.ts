import { FlowerDashboardService } from './flower-dashborad.service';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
import { GetListFlowerDto } from './dto/get-list-flower.dto';
import { AwsS3Service } from 'src/shared/services/aws-s3.service';
import { GetSignedUrlDto } from './dto/get-signedUrl.dto';
export declare class FlowerDashboardController {
    private readonly flowerService;
    private _s3Service;
    constructor(flowerService: FlowerDashboardService, _s3Service: AwsS3Service);
    create(request: any, createDto: CreateFlowerDto): Promise<import("./entities/flower.entity").Flower>;
    findAll(request: any, getListFlowerDto: GetListFlowerDto): Promise<any>;
    getSignedUrl(request: any, getSignedUrlDto: GetSignedUrlDto): Promise<any>;
    findOne(id: string): Promise<import("./entities/flower.entity").Flower>;
    update(id: string, updateDto: UpdateFlowerDto): Promise<import("./entities/flower.entity").Flower>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
