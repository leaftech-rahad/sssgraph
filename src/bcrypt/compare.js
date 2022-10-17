import bcrypt from "bcryptjs";

export const comparePassword = async (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
