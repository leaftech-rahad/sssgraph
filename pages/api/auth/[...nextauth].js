import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import { comparePassword } from "../../../src/bcrypt/compare";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./lib/prismadb";
import { db } from "../../../prisma/db";
export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60, // 2 day
    updateAge: 2 * 60 * 60, // 2 hours
  },
  //adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@domain.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = await db.prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        const matchPassword = comparePassword(
          credentials.password,
          user.password
        );

        if (matchPassword) {
          // Any object returned will be saved in `user` property of the JWT
          return {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
          };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    //   // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    // }),
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        (token.id = user.id),
          (token.username = user.username),
          (token.email = user.email),
          (token.role = user.role);
      }
      return token;
    },

    session: ({ session, token, user }) => {
      if (token) {
        (session.id = token.id),
          (session.username = token.username),
          (session.email = token.email),
          (session.role = token.role);
      }
      return session;
    },
  },

  jwt: {
    encryption: true,
  },
  // events: {
  //   async signIn(message) {
  //     /* on successful sign in */
  //   },
  //   async signOut(message) {
  //     /* on signout */
  //   },
  //   async createUser(message) {
  //     /* user created */
  //   },
  //   async updateUser(message) {
  //     /* user updated - e.g. their email was verified */
  //   },
  //   async linkAccount(message) {
  //     /* account (e.g. Twitter) linked to a user */
  //   },
  //   async session(message) {
  //     /* session is active */
  //   },
  // },
});
