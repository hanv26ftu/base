import { Test, TestingModule } from '@nestjs/testing';
import { MobileAppService } from './mobile-app.service';

describe('MobileAppService', () => {
  let service: MobileAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MobileAppService],
    }).compile();

    service = module.get<MobileAppService>(MobileAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
