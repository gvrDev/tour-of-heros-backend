import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validate } from './env.validation';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    ConfigModule.forRoot({ validate: validate, expandVariables:true }),
    MongooseModule.forRoot(process.env.DB_CONN),
    HeroModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
