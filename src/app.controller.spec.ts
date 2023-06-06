import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('DumpData', () => {
    it('it should Dump Data into DB', () => {
      expect(appController.dumpData()).toBe({
        "statusCode": 200,
        "message": "Data Dumped Successfully",
        "data": {},
        "error": null
      });
    });
  });

  describe('Search', () => {
    it('it should seacrh movies', async () => {
      const response = await appController.searchMovies({search: 'space'})
      expect(response.statusCode).toBe(200);
    });
  });
});
