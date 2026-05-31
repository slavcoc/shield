import { Body, Controller, Post } from '@nestjs/common';
import { z } from 'zod';
import { AuthService } from './auth.service';
import { LoginResult } from './auth.types';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

type LoginBody = z.infer<typeof loginSchema>;

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginBody): Promise<LoginResult> {
    const parsed = loginSchema.parse(body);
    return this.authService.login(parsed.email, parsed.password);
  }
}
