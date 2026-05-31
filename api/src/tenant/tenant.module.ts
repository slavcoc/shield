import { Module } from '@nestjs/common';
import { TenantController } from './tenant.controller';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [TenantController],
  providers: [JwtAuthGuard, RolesGuard]
})
export class TenantModule {}
