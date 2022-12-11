import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {
    this.AuthService.test();
  }
  @Get('user')
  user() {
    return this.AuthService.user();
  }
  @Post('signup')
  signup() {
    return this.AuthService.signup();
  }
  @Post('signin')
  signin() {
    return this.AuthService.signin();
  }
}
