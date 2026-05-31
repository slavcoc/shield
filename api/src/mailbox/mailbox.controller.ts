import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';

@Controller('mailbox')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MailboxController {
  @Get('health')
  @Roles('ADMIN', 'ACCOUNTANT', 'FINANCE_MANAGER')
  getHealth() {
    return { ok: true, module: 'mailbox' };
  }
}
