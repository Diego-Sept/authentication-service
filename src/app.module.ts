import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { LogoutModule } from './logout/logout.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [RegisterModule, LoginModule, LogoutModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
