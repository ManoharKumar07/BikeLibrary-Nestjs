import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // Injecting AppService into the controller so we can use its methods
  constructor(private readonly appService: AppService) {}

  // This route responds to HTTP GET requests at the root URL ('/')
  @Get()
  getHello(): string {
    // Calls the getHello() method from the AppService to return a "Hello World!" message
    return this.appService.getHello();
  }
}
