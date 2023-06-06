import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { API_REQUEST } from './shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(API_REQUEST.SEARCH_MOVIES)
  async searchMovies(
    @Query() query,
  ) {
    const response = await this.appService.searchMovies(query);
    return response
  }

  @Post(API_REQUEST.DUMP_DATA)
  async dumpData() {
    const response = await this.appService.dumpData()
    return response
  }
}
