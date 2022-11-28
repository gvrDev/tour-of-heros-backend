import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { HeroSchema } from './schema/hero.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "HeroModel", schema: HeroSchema }])],
  controllers: [HeroController],
  providers: [HeroService]
})
export class HeroModule {}
