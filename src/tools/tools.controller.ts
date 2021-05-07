import { Controller, Post, Body, ValidationPipe, UseGuards } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { ToolsService } from './tools.service';
import { ReturnToolDto } from './dto/return-tool.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/users/user.entity';

@Controller('tools')
@UseGuards(AuthGuard(), RolesGuard)
export class ToolsController {
  constructor(private toolsService: ToolsService) {}

  @Post()
  async createAdminTool(
    @Body(ValidationPipe) createToolDto: CreateToolDto,
    @GetUser() user: User,
  ): Promise<ReturnToolDto> {
    const tool = await this.toolsService.createTools(createToolDto, user);
    return {
      tool,
      message: 'Ferramenta cadastrado com sucesso',
    };
  }
}
