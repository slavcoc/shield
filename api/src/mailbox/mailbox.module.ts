import { Module } from '@nestjs/common';
import { MailboxController } from './mailbox.controller';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [MailboxController],
  providers: [JwtAuthGuard, RolesGuard]
})
export class MailboxModule {}
