import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPartnerService } from './business-partner.service';
import { BusinessPartnerController } from './business-partner.controller';

describe('BusinessPartnerController', () => {
  let controller: BusinessPartnerController;
  const mockBusinessPartners = [{
    businessPartner: "1003764",
    firstName: "John",
    lastName: "Doe"
  },
  {
    businessPartner: "1003765",
    firstName: "Jane",
    lastName: "Roe"
  }];
  const mockBusinessPartnerService = {
    getAllBusinessPartners: jest.fn().mockResolvedValue(mockBusinessPartners)
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessPartnerController],
      providers: [BusinessPartnerService],
    })
      .overrideProvider(BusinessPartnerService)
      .useValue(mockBusinessPartnerService)
      .compile();

    controller = module.get<BusinessPartnerController>(
      BusinessPartnerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get business partners', async () => {
    const result = await controller.getAllBusinessPartners();
    //expect(JSON.stringify(result)).toEqual(JSON.stringify(mockBusinessPartners));
    expect(result).toEqual(mockBusinessPartners);
    expect(mockBusinessPartnerService.getAllBusinessPartners).toHaveBeenCalled();
  })
});
