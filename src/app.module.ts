import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validate } from './env.validation';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    ConfigModule.forRoot({ validate: validate, expandVariables:true }),
    HeroModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
