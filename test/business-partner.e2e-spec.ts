import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { BusinessPartnerModule } from './../src/business-partner/business-partner.module';
import { mockTestDestination } from '@sap-cloud-sdk/test-util';
import assert from 'assert';

describe('BusinessPartnerController (e2e)', () => {
  let app: INestApplication;
  mockTestDestination('MockServer');

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
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [BusinessPartnerModule],
    })
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/business-partner (GET)', () => {
    return request(app.getHttpServer())
      .get('/business-partner')
      .expect(201)
      .expect(mockBusinessPartners);
  });
});
