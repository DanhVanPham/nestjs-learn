import { Test, TestingModule } from '@nestjs/testing';
import { FlashCardsControllerController } from './flash-cards-controller.controller';

describe('FlashCardsControllerController', () => {
  let controller: FlashCardsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlashCardsControllerController],
    }).compile();

    controller = module.get<FlashCardsControllerController>(FlashCardsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
