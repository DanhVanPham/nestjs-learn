import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';

@Injectable()
export class FlashCardsService {
    getAll() {
        return 'Xin Chao';
    }
    findOne(id: ObjectId) {
        return 'Finded Flask Card';
    }
}
