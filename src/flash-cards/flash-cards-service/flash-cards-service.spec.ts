import { Test, TestingModule } from '@nestjs/testing';
import { FlashCardsService } from './flash-cards-service';

describe('FlashCardsService', () => {
  let provider: FlashCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlashCardsService],
    }).compile();

    provider = module.get<FlashCardsService>(FlashCardsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
