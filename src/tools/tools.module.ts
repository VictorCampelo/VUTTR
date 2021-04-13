import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolRepository } from './tool.repository';
import { ToolsService } from './tools.service';
import { ToolsController } from './tools.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ToolRepository])],
  providers: [ToolsService],
  controllers: [ToolsController],
})
export class ToolsModule {}
