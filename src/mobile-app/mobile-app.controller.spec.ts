import { Test, TestingModule } from '@nestjs/testing';
import { MobileAppController } from './mobile-app.controller';
import { MobileAppService } from './mobile-app.service';

describe('MobileAppController', () => {
  let controller: MobileAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MobileAppController],
      providers: [MobileAppService],
    }).compile();

    controller = module.get<MobileAppController>(MobileAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
