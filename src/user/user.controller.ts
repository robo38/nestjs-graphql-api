import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly commentService: CommentService
    ) {}

    @Post()
    createUser(@Body() createUser: createUserDto) {
        return this.userService.createUser(createUser);
    }

    @Get(':id/comments')
    getUserComments(@Param('id') id: number) {
        return this.commentService.findUserComments(id);
    }
}
