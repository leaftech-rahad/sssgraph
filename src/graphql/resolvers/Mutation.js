import { db } from "../../../prisma/db";
import encrypt from "../../bcrypt/encrypt";
//-------------------------------

export const Mutation = {
  //------------------------------------------------------------------------------------------

  // me: (parent, args, { req }) => {
  //   //geiing saved userId from session
  //   const { userId } = req.session;

  //   //quering DB against userID
  //   return db.prisma.user.findUnique({
  //     where: { ID: userId },
  //   });
  // },

  //------------------------------------------------------------------------------------------

  // signIn: async (parent, { input }, { req, res }) => {
  //   //validating the input with Joi
  //   const { value, error, warning } = signIn.validate(input, {
  //     abortEarly: false,
  //   });
  //   if (error) return error;

  //   //destructuring input
  //   const { email, password } = input;

  //   //user authentication
  //   const user = await attemptSignIn(email, password);

  //   //saving user to sesion as userId
  //   if (user) req.session.userId = user.ID;
  //   res.setHeader(
  //     "Content-Security-Policy",
  //     "script-src http://localhost:4000/"
  //   );
  //   console.log(res.setHeader);
  //   //returning the signedIn user instance
  //   return user;
  // },

  // //---------------------------------------------------------------------------------------------

  // signOut: async (parent, args, { req, res }) => {
  //   //signing out user, removing cookie and userId from session
  //   await signOut(req, res);

  //   return true;
  // },

  //---------------------------------------------------------------------------------------------

  createUser: async (parent, { input }, { req }) => {
    //destructure from input
    const { name, email, username, phone, address, password } = input;

    //creating new user
    const createAndSignIn = await db.prisma.user.create({
      data: {
        name: name,
        email: email,
        username: username,
        phone: phone,
        address: address,

        //hashing the password value using encrypt function in bcrypt.js
        password: (await encrypt(password)).toString(),
      },
    });

    //finding the newly created user to get the ID
    // const createdUser = await db.prisma.user.findUnique({
    //   where: {
    //     email: email,
    //   },
    // });

    //returning the new user
    return createAndSignIn;
  },

  //------------------------------------------------------------------------------------------------

  createPost: async (parent, { input }, { req }) => {
    //destructure from input
    const { title, content } = input;

    //quering the user for their username
    const queriedUser = await db.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    //creating a post
    return db.prisma.post.create({
      data: {
        title: title,
        content: content,
        username: queriedUser.username,
      },
    });
  },

  //------------------------------------------------------------------------------------------------

  deleteUser: async (parent, { input }, { req, res }) => {
    //setting the user relationship with post to null
    await db.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        post: {
          set: [],
        },
      },
      include: {
        post: true,
      },
    });

    //deleting user
    await db.prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return true;
  },

  //-----------------------------------------------------------------------------------------------

  deletePost: async (parent, { input }, { req }) => {
    const { id } = input;
    // deleting specific post of user
    await db.prisma.post.delete({
      where: {
        id: id,
      },
    });

    return true;
  },
};
