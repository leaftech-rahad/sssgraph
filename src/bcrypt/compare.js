import bcrypt from "bcryptjs";

export default async function matchedPassword(password) {
  return bcrypt.compareSync(password, hash);
}
