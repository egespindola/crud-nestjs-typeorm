import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('test')
  find() {
    return 'API Courses OK!';
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param() params) {
  //   return `Course #${params.id} :D`;
  // }
  //   // destructuring ID  ↓↓ and usind decorator RES to send status and response
  //   // @Get(':id')
  //   // findOne(@Param('id') id: string, @Res() res) {
  //   //   return res.status(200).send(`Course #${id}`);
  //   // }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    this.coursesService.create(createCourseDto);
  }
  //   // destructuring body to name ↓↓
  //   // you can manipulate http status code with decorator HttpCode(HttpStatus.<code>)
  // @Post()
  // create(@Body('name') body): any {
  //   return body;
  // }

  @Patch(':id')
  update(@Param('id') id, @Body() updateCourseDto: UpdateCourseDto) {
    // return `Course #${id} updated successfully | ${body} `;
    return this.coursesService.update(id, updateCourseDto);
  }

  //   @Delete(':id')
  //   delete(@Param('id') id) {
  //     return `Course #${id} deleted successfully'`;
  //   }
}
