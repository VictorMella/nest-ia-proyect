import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SamAsistantService } from './sam-asistant.service';
import { QuestionDto } from './dto/question.dto';

@Controller('sam-asistant')
export class SamAsistantController {
  constructor(private readonly samAsistantService: SamAsistantService) {}

  @Post('create-thread')
  @HttpCode(200)
  async createThread() {
    return this.samAsistantService.createThread();
  }
  @Post('user-question')
  @HttpCode(200)
  async userQuestion(@Body() questionDto: QuestionDto) {
    return this.samAsistantService.userQuestion(questionDto);
  }
}
