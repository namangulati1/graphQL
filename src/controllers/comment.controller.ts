import { Comment } from "../models/comment.model.js";

export const getAllComments = async () => {
    const comments = await Comment.find();
    return comments;
}

export const getCommentById =  async (parent: any, args: { id: string }) => {
    const comment = await Comment.findById(args.id);
    return comment;
}