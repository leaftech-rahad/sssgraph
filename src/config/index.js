const server = process.env.HOST_URL;
export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? `https://sssgraph.vercel.app/api/graphql`
    : `http://localhost:3000/api/graphql`;
