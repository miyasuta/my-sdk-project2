import { Controller, Get } from '@nestjs/common';
import { BusinessPartnerService } from './business-partner.service';
import { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';

@Controller('business-partner')
export class BusinessPartnerController {
  constructor(
    private readonly businessPartnerService: BusinessPartnerService,
  ) {}

  @Get()
  getAllBusinessPartners(): Promise<BusinessPartner[]> {
    return this.businessPartnerService.getAllBusinessPartners();
  }
}
