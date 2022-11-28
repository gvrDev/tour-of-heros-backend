import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Hero } from './schema/hero.schema';

@Injectable()
export class HeroService {
  constructor(@InjectModel("HeroModel") private heroModel: Model<Hero>){}

  async create(createHeroDto: CreateHeroDto): Promise<Hero> {
    const createdHero = new this.heroModel(createHeroDto);
    return createdHero.save();
  }

  async findById(id: string): Promise<Hero> {
    return this.heroModel.findById(id).exec();
  }

  async findAll(): Promise<Hero[]> {
    return this.heroModel.find().exec();
  }
}
