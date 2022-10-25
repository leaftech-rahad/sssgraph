// import absoluteUrl from "next-absolute-url";

// const { origin } = absoluteUrl(req);
const server = process.env.VERCEL_URL;
export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? `https://${server}/api/graphql`
    : `http://localhost:3000/api/graphql`;
