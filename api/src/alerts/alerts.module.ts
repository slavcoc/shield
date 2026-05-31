import { Module } from '@nestjs/common';
import { AlertsController } from './alerts.controller';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AlertsController],
  providers: [JwtAuthGuard, RolesGuard]
})
export class AlertsModule {}
