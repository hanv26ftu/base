"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsS3Service = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const mime = require("mime-types");
const IFile_1 = require("../../common/interfaces/IFile");
const config_service_1 = require("./config.service");
const generator_service_1 = require("./generator.service");
let AwsS3Service = class AwsS3Service {
    constructor(configService, generatorService) {
        this.configService = configService;
        this.generatorService = generatorService;
        this._s3 = new AWS.S3({
            accessKeyId: this.configService.awsS3Config.accessKeyId,
            secretAccessKey: this.configService.awsS3Config.secretAccessKey,
            region: 'ap-southeast-1',
            signatureVersion: 'v4',
        });
    }
    async uploadVideo(file) {
        const fileName = this.generatorService.fileName(mime.extension(file.mimetype));
        return this._s3
            .upload({
            Bucket: this.configService.awsS3Config.bucket,
            Body: file.buffer,
            ACL: 'public-read',
            Key: fileName,
        })
            .promise();
    }
    async getSignedUrl(mimetype) {
        const fileName = this.generatorService.fileName(mime.extension(mimetype));
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
    async deleteVideo(s3Key) {
        return this._s3
            .deleteObject({
            Bucket: this.configService.awsS3Config.bucket,
            Key: s3Key,
        })
            .promise();
    }
    sizeOf(key) {
        return this._s3
            .headObject({ Key: key, Bucket: this.configService.awsS3Config.bucket })
            .promise()
            .then((res) => res.ContentLength);
    }
};
AwsS3Service = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_service_1.ConfigService, generator_service_1.GeneratorService])
], AwsS3Service);
exports.AwsS3Service = AwsS3Service;
//# sourceMappingURL=aws-s3.service.js.map