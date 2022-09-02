import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';

@Controller('product')
export class ProductController {
  @Post('create')
  createProduct(@Res() res, @Body() ceateProductDTO: CreateProductDTO) {
    return res.status(HttpStatus.OK).json({
      message: 'received',
      ceateProductDTO,
    });
  }
}
