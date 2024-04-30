import { load } from '../../../js/db/db'

export async function getAvatar() {
  const avatar = await load(`me/img/img`)
  return avatar
}
