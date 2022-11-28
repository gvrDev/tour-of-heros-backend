import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { HeroService } from './hero.service';
import { Hero } from './schema/hero.schema';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService){}

  @Get()
  async findAll(): Promise<Hero[]> {
    return await this.heroService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Hero> {
    return await this.heroService.findById(id);
  }

  @Post()
  async create(@Body() createHeroDto: CreateHeroDto): Promise<Hero> {
    return await this.heroService.create(createHeroDto);
  }
}

