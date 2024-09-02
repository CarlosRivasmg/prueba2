import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/datebase/users.entity';// Asegúrate de la ruta correcta
import { UserResolver } from 'src/resolver/user.resolver'; // Asegúrate de la ruta correcta
import { UserService } from 'src/service/user.service'; // Asegúrate de la ruta correcta

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService],
})
export class UserModule {}
