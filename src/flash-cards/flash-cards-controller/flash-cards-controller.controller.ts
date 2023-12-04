import {
    Controller,
    UseGuards,
    UseInterceptors,
    Get,
    Logger,
    Query,
    Param,
} from '@nestjs/common';
import { JwtAuthorizationGuard } from 'src/guards/jwt-auth.guard';
import { FlashCardsService } from '../flash-cards-service/flash-cards-service';
import { OwnerShipGuard } from '../guards/ownership.guard';
import { TimeoutInterceptor } from 'src/interceptors/timeout.interceptor';
import { ExcludeNullInterceptor } from 'src/interceptors/exclude-null.interceptor';
import { ParseMongoIdPipe } from 'src/pipes/parse-mongo-id.pipe';
import { ObjectId } from 'mongoose';

@UseInterceptors(TimeoutInterceptor)
@UseGuards(JwtAuthorizationGuard)
@Controller('flash-cards')
export class FlashCardsControllerController {
    private logger: Logger;
    constructor(private readonly service: FlashCardsService) {
        this.logger = new Logger(FlashCardsControllerController.name);
    }

    @Get()
    @UseGuards(OwnerShipGuard)
    @UseInterceptors(ExcludeNullInterceptor)
    getFlashCards(@Query('limit') limit) {
        this.logger.log(`Method name: ${this.getFlashCards.name}`);
        return this.service.getAll();
    }

    @Get(':id')
    @UseInterceptors(ExcludeNullInterceptor)
    findOne(@Param('id', ParseMongoIdPipe) id: ObjectId) {
        return this.service.findOne(id);
    }
}
