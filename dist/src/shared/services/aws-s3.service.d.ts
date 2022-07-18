import { IFile } from 'src/common/interfaces/IFile';
import { ConfigService } from './config.service';
import { GeneratorService } from './generator.service';
export declare class AwsS3Service {
    configService: ConfigService;
    generatorService: GeneratorService;
    private readonly _s3;
    constructor(configService: ConfigService, generatorService: GeneratorService);
    uploadVideo(file: IFile): Promise<any>;
    getSignedUrl(mimetype: string): Promise<any>;
    deleteVideo(s3Key: string): Promise<any>;
    sizeOf(key: string): any;
}
