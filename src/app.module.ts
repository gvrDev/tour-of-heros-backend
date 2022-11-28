import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { validate } from './env.validation';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    ConfigModule.forRoot({ validate: validate, expandVariables:true }),
    MongooseModule.forRoot(process.env.DB_CONN),
    HeroModule
  ],
})
export class AppModule {}
