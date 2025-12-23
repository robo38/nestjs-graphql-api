import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
    findUserComments(id: number) {
        return { message: `Comments for user with id ${id}` };
    }
}
