import { InputType, Field, Int } from '@nestjs/graphql';

@InputType() // Decorador de GraphQL que indica que esta clase es un tipo de entrada
export class UpdateUserInput {
  @Field() // Campo para el nombre del usuario
  name: string;

  @Field() // Campo para la profesión del usuario
  professional: string;

  @Field(() => Int) // Campo para la edad del usuario
  age: number;
}
