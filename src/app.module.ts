import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';

const ORMConfig = TypeOrmModule.forRoot(config);

@Module({
  imports: [UserModule, CommentModule, ORMConfig],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
