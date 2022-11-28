import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Hero, HeroDocument } from './schema/hero.schema';

@Injectable()
export class HeroService {
  constructor(@InjectModel('Hero') private heroModel: Model<HeroDocument>){}

  async create(createHeroDto: CreateHeroDto): Promise<Hero> {
    console.log(`Inside service: ${createHeroDto.name}`);
    const hero = new this.heroModel({
      name: createHeroDto.name
    });
    console.log(`Inside service: ${hero.id}`);
    return hero.save();
  }

  async findById(id: string): Promise<Hero> {
    return this.heroModel.findById(id).exec();
  }

  async findAll(): Promise<Hero[]> {
    return this.heroModel.find().exec();
  }
}
