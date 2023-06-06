import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {movieSchema} from './schemas/movies.schema'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sultan:sultan@cluster0.zqb5ez7.mongodb.net/mydb?retryWrites=true'),
    MongooseModule.forFeature([{
      name: 'Movie',
      schema: movieSchema
    }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
