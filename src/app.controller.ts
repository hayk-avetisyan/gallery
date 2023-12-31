import {Controller, Get, Res} from '@nestjs/common';
import * as sharp from 'sharp';
import axios from 'axios';

@Controller()
export class AppController {
  
  private static readonly side: number = 400;
  private static readonly url: string = 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=100000';

  @Get("/contain")
  contain(@Res() response): void {
    axios({url: AppController.url, responseType: 'stream'})
        .then(response => response.data.pipe(sharp()))
        .then(source => source.resize(AppController.side, AppController.side, {fit: sharp.fit.contain}))
        .then(file => file.pipe(response))
  }

  @Get("/fill")
  fill(@Res() response): void {
    axios({url: AppController.url, responseType: 'stream'})
        .then(response => response.data.pipe(sharp()))
        .then(source => source.resize(AppController.side, AppController.side, {fit: sharp.fit.fill}))
        .then(file => file.pipe(response))
  }


  @Get("/cover")
  cover(@Res() response): void {
    axios({url: AppController.url, responseType: 'stream'})
        .then(response => response.data.pipe(sharp()))
        .then(source => source.resize(AppController.side, AppController.side, {fit: sharp.fit.cover}))
        .then(file => file.pipe(response))
  }

  @Get("/inside")
  inside(@Res() response): void {
    axios({url: AppController.url, responseType: 'stream'})
        .then(response => response.data.pipe(sharp()))
        .then(source => source.resize(AppController.side, AppController.side, {fit: sharp.fit.inside}))
        .then(file => file.pipe(response))
  }

  @Get("/outside")
  outside(@Res() response): void {
    axios({url: AppController.url, responseType: 'stream'})
        .then(response => response.data.pipe(sharp()))
        .then(source => source.resize(AppController.side, AppController.side, {fit: sharp.fit.outside}))
        .then(file => file.pipe(response))
  }

  @Get("/contain/cubic")
  containCubic(@Res() response): void {
    axios({url: AppController.url, responseType: 'stream'})
        .then(response => response.data.pipe(sharp()))
        .then(source => source.resize(AppController.side, AppController.side, {
          fit: sharp.fit.contain,
          kernel: sharp.kernel.cubic
        }))
        .then(file => file.pipe(response))
  }

  @Get("/contain/nearest")
  containNearest(@Res() response): void {
    axios({url: AppController.url, responseType: 'stream'})
        .then(response => response.data.pipe(sharp()))
        .then(source => source.resize(AppController.side, AppController.side, {
          fit: sharp.fit.contain,
          kernel: sharp.kernel.nearest
        }))
        .then(file => file.pipe(response))
  }

  @Get("/contain/mitchell")
  containMitchell(@Res() response): void {
    axios({url: AppController.url, responseType: 'stream'})
        .then(response => response.data.pipe(sharp()))
        .then(source => source.resize(AppController.side, AppController.side, {
          fit: sharp.fit.contain,
          kernel: sharp.kernel.mitchell
        }))
        .then(file => file.pipe(response))
  }

  @Get("/contain/lanczos2")
  containLanczos2(@Res() response): void {
    axios({url: AppController.url, responseType: 'stream'})
        .then(response => response.data.pipe(sharp()))
        .then(source => source.resize(AppController.side, AppController.side, {
          fit: sharp.fit.contain,
          kernel: sharp.kernel.lanczos2
        }))
        .then(file => file.pipe(response))
  }
}
