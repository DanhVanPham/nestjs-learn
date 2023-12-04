import { CanActivate, Logger, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class OwnerShipGuard implements CanActivate {
    logger = new Logger(OwnerShipGuard.name);
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        this.logger.log('===TRIIGER ROUTE GUARD===');
        return true;
    }
}
