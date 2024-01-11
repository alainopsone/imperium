import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { NinjasModule } from './ninjas/ninjas.module';

@Module({
  imports: [AdminModule, NinjasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
