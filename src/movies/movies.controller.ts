import { Controller, Get, Post, Patch, Param, Body, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return "This will return all movies";
    }

    
    @Get("search")
    search(@Query('year') searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear} `;
    }

    @Get('/:id')
    getOne(@Param('id') id: string){
        return `this will return movie id: ${id}`;
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }

    @Patch('/:id')
    update(@Param('id') id: string, @Body() updateData){
        return {
            updatedMovie: id,
            ...updateData,
        };
    }

}
