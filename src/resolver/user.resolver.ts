import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { User } from "src/datebase/users.entity";
import { CreateUserInput } from "src/dto/create-user.input";
import { UserService } from "src/service/user.service";

@Resolver(of => User) // Decorador de GraphQL que indica que esta clase es un resolver para el tipo User
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => [User]) // Definición de una consulta que devuelve una lista de usuarios
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(returns => User) // Definición de una mutación que devuelve un usuario
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    return this.userService.create(createUserInput);
  }
}




