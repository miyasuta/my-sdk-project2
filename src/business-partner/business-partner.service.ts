import { Injectable } from '@nestjs/common';
import { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';

@Injectable()
export class BusinessPartnerService {
  getAllBusinessPartners(): Promise<BusinessPartner[]> {
    return BusinessPartner.requestBuilder()
    .getAll()
    .select(
        BusinessPartner.BUSINESS_PARTNER,
        BusinessPartner.FIRST_NAME,
        BusinessPartner.LAST_NAME,
    )
    .filter(
        BusinessPartner.BUSINESS_PARTNER_CATEGORY.equals('1')
    )
    .execute({
      destinationName: 'MockServer',
    });
  }
}
