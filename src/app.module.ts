import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { ToolsModule } from './tools/tools.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ToolsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
