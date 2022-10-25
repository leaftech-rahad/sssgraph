export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.VERCEL_URL}/api/graphql2`
    : "http://localhost:3000/api/graphql";
