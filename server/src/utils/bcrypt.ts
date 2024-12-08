import * as bcrypt from 'bcrypt';

export async function encodePassword(password: string) {
  const SALT = bcrypt.genSaltSync(10);
  return await bcrypt.hash(password, SALT);
}

export async function comparePassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
