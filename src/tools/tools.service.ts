import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateToolDto } from './dtos/create-tool.dto';
import { Tool } from './tool.entity';
import { ToolRepository } from './tool.repository';

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(ToolRepository)
    private toolRepository: ToolRepository,
  ) {}

  async createTools(createToolDto: CreateToolDto): Promise<Tool> {
    return this.toolRepository.createTool(createToolDto);
  }
}
