export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.VERCEL_URL}/api/graphql`
    : "http://localhost:3000/api/graphql";
