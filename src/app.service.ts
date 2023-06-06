import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Movies } from './interfaces/movie.interface';
import { INJECT_MODEL, errorResponse, successResponse } from './shared';

@Injectable()
export class AppService {
  constructor(@InjectModel(INJECT_MODEL.MOVIE) private readonly movieModel: Model<Movies>) { }
  /**
   * @description Get data from omdb api where title contains space and release year is 2001
   * @returns Success in case data is inserted successfuly
   */
  async dumpData() {
    try {
      const response = await axios.get(`${process.env.OMDB_API_BASE_URL}?apikey=${process.env.OMDB_API_KEY}&s=space&y=2001`)
      response.data.Search.forEach(async element => {
        const movieDetails = await axios.get(`${process.env.OMDB_API_BASE_URL}?apikey=${process.env.OMDB_API_KEY}&i=${element.imdbID}`)
        const dataToInsert = movieDetails.data
        await this.movieModel.updateOne({ imdbID: element.imdbID }, { ...dataToInsert }, { upsert: true })
      });
      return successResponse({}, "Data Dumped Successfully", 200)
    } catch (err) {
      return errorResponse(err)
    }
  }

  /**
   * @description Search in Title, Plot & Director using text search (indexing)
   * @returns Array of Movies 
   */
  async searchMovies(query: any) {
    const { search } = query
    let moviesData
    if (search) {
      moviesData = await this.movieModel.aggregate([
        {
          $match: {
            $text: {
              $search: search,
            },
          },
        },
      ])
    }
    else { 
      moviesData = await this.movieModel.find()
    }
    return successResponse(moviesData, "Success", 200)
  }
}
