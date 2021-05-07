import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { CreateToolDto } from './dto/create-tool.dto';
import { Tool } from './tool.entity';
import { ToolRepository } from './tool.repository';

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(ToolRepository)
    private toolRepository: ToolRepository,
  ) {}

  async createTools(createToolDto: CreateToolDto, user: User): Promise<Tool> {
    return this.toolRepository.createTool(createToolDto, user);
  }
}
