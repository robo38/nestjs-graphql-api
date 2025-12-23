import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {

    createUser(createUser : createUserDto) {
        return { message: 'User created successfully', data : createUser };
    }
}
