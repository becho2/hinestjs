import { Controller, Get, Post, Patch, Delete, Param, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
    constructor(private readonly MoviesService: MoviesService) {

    }
    @Get()
    getAll(): Movie[] {
        return this.MoviesService.getAll();
    }

    @Get('/:id')
    getOne(@Param('id') id: string): Movie {
        return this.MoviesService.getOne(id);
    }
    
    // @Get("search")
    // search(@Query('year') searchingYear: string){
    //     return `We are searching for a movie made after: ${searchingYear} `;
    // }

    @Post()
    create(@Body() movieData) {
        return this.MoviesService.create(movieData);
    }

    @Patch('/:id')
    update(@Param('id') id: string, @Body() updateData){
        return this.MoviesService.update(id, updateData);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.MoviesService.deleteOne(id);
    }

}
