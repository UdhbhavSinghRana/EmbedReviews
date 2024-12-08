import * as bcrypt from 'bcrypt';

export async function encodePassword(password: string) {
  const SALT = bcrypt.genSaltSync(10);
  return await bcrypt.hash(password, SALT);
}
