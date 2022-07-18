import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as mime from 'mime-types';
import { IFile } from 'src/common/interfaces/IFile';


import { ConfigService } from './config.service';
import { GeneratorService } from './generator.service';

@Injectable()
export class AwsS3Service {
    private readonly _s3: AWS.S3 = new AWS.S3({
        accessKeyId:  this.configService.awsS3Config.accessKeyId,
        secretAccessKey: this.configService.awsS3Config.secretAccessKey,
        region: 'ap-southeast-1',
        signatureVersion: 'v4',
      });

    constructor(public configService: ConfigService, public generatorService: GeneratorService) {
        // const options: AWS.S3.Types.ClientConfiguration = {
        //     region: 'ap-southeast-1',
        //     // apiVersion: '2012-10-17',
        //     signatureVersion: 'v4'
        // };

        // const awsS3Config = configService.awsS3Config;
        // if (awsS3Config.accessKeyId && awsS3Config.secretAccessKey) {
        //     options.credentials = awsS3Config;
        // }
        // console.log(options)
        // this._s3 = new AWS.S3(options);
    }

    async uploadVideo(file: IFile): Promise<any> {
        const fileName = this.generatorService.fileName(<string>mime.extension(file.mimetype));
        return this._s3
            .upload({
                Bucket: this.configService.awsS3Config.bucket,
                Body: file.buffer,
                ACL: 'public-read',
                Key: fileName,
            })
            .promise();
    }

    async getSignedUrl(mimetype: string): Promise<any> {
        const fileName = this.generatorService.fileName(<string>mime.extension(mimetype));
        const signedRequest = await this._s3.getSignedUrlPromise('putObject', {
            Bucket: this.configService.awsS3Config.bucket,
            Key: fileName,
            Expires: 60 * 60,
            ACL: 'public-read',
            ContentType: mimetype,
        });

        return {
            signedRequest,
            url: `https://${this.configService.awsS3Config.bucket}.s3.amazonaws.com/${fileName}`,
        };
    }

    async deleteVideo(s3Key: string): Promise<any> {
        return this._s3
            .deleteObject({
                Bucket: this.configService.awsS3Config.bucket,
                Key: s3Key,
            })
            .promise();
    }

    sizeOf(key: string): any {
        return this._s3
            .headObject({ Key: key, Bucket: this.configService.awsS3Config.bucket })
            .promise()
            .then((res) => res.ContentLength);
    }
}
