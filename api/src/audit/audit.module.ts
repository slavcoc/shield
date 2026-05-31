import { Module } from '@nestjs/common';
import { AuditController } from './audit.controller';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AuditController],
  providers: [JwtAuthGuard, RolesGuard]
})
export class AuditModule {}
