import { CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

export class JwtAuthorizationGuard implements CanActivate {
    logger = new Logger(JwtAuthorizationGuard.name);
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        this.logger.log('===TRIGGER CONTROLLER GUARD===');
        // JWT Auth Logic Here
        return true;
    }
}
