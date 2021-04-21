import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateToolDto {
  @IsNotEmpty()
  title: string;

  @MaxLength(200)
  description: string;

  @MaxLength(200, {
    each: true,
    message:
      'Title is too long. Maximal length is $constraint1 characters, but actual is $value',
  })
  tags: string[];
}
