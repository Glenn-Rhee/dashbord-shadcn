import bcrypt from "bcrypt";
const saltround = 10;
export async function hashedPassword(password: string) {
  const hashed = await bcrypt.hash(password, saltround);
  return hashed;
}

export async function comparePassword(
  password: string,
  hash: string
) {
  const isCompared = await bcrypt.compare(password, hash);
  return isCompared;
}
