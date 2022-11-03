import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

// o que precisamos validar nesta classe são partes do validado em createcoursesdto
export class UpdateCourseDto extends PartialType(CreateCourseDto) {}

// export class UpdateCourseDto {
//   readonly name?: string;
//   readonly description?: string;
//   readonly tags?: string[];
// }

// // ? means optional
