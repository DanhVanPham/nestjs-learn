import { Logger, ExecutionContext, Injectable } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

@Injectable()
export class CustomThrottlerGuard extends ThrottlerGuard {
    logger = new Logger(CustomThrottlerGuard.name);

    canActivate(context: ExecutionContext) {
        this.logger.debug('===GLOBAL GUARD===');
        return super.canActivate(context);
    }
}
