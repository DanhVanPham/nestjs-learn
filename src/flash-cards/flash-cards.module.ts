import { Module } from '@nestjs/common';
import { FlashCardsService } from './flash-cards-service/flash-cards-service';
import { FlashCardsControllerController } from './flash-cards-controller/flash-cards-controller.controller';

@Module({
    providers: [FlashCardsService],
    controllers: [FlashCardsControllerController],
})
export class FlashCardsModule { }
