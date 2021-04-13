import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { ToolsService } from './tools.service';
import { ReturnToolDto } from './dto/return-tool.dto';

@Controller('tools')
export class ToolsController {
  constructor(private toolsService: ToolsService) {}

  @Post()
  async createAdminTool(
    @Body(ValidationPipe) createToolDto: CreateToolDto,
  ): Promise<ReturnToolDto> {
    const tool = await this.toolsService.createTools(createToolDto);
    return {
      tool,
      message: 'Ferramenta cadastrado com sucesso',
    };
  }
}
