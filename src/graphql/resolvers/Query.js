import { db } from "../../../prisma/db";

export const Query = {
  allUsers: (parent, args, { req }) => {
    return db.prisma.user.findMany({});
  },
  findUser: (parent, { input }, { req }) => {
    const { username, email } = input;
    return db.prisma.user.findUnique({
      where: {
        username: username,
        email: email,
      },
    });
  },
  allPosts: (parent, args, { req }) => {
    return db.prisma.post.findMany();
  },
  findPost: (parent, { input }, { req }) => {
    const { title, username } = input;
    return db.prisma.post.findMany({
      where: {
        username: username,
        title: title,
      },
    });
  },
};
