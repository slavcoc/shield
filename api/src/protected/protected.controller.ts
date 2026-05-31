import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { Roles } from 'src/common/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';

@Controller('protected')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProtectedController {
  @Get('tenant-context')
  @Roles('ADMIN', 'ACCOUNTANT', 'FINANCE_MANAGER')
  getTenantContext(@Req() request: Request) {
    return {
      ok: true,
      message: 'Authenticated tenant context loaded',
      user: request.user
    };
  }
}
