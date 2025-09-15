import { Module, Post } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { StudentModule } from './modules/student/student.module';
import { GroupModule } from './modules/groups/group.module';


@Module({
  imports: [PostsModule, StudentModule, GroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
