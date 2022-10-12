import bcrypt from "bcryptjs";

export default async function encrypt(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}
