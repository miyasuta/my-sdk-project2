import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPartnerService } from './business-partner.service';
import { mockTestDestination } from '@sap-cloud-sdk/test-util';

describe('BusinessPartnerService', () => {
  mockTestDestination('MockServer');

  let service: BusinessPartnerService;

  const mockBusinessPartners = [
    {
      businessPartner: "1003764",
      firstName: "John",
      lastName: "Doe"
    },
    {
      businessPartner: "1003765",
      firstName: "Jane",
      lastName: "Roe"
    },
    {
      businessPartner: "1003766",
      firstName: "John",
      lastName: "Smith"
    },
    {
      businessPartner: "1003767",
      firstName: "Carla",
      lastName: "Coe"
    }
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessPartnerService],
    }).compile();

    service = module.get<BusinessPartnerService>(BusinessPartnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get business partners', async () => {
    return expect(service.getAllBusinessPartners()).resolves.toEqual(mockBusinessPartners);
  });
});
