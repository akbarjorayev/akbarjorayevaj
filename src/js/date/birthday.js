export function getAge() {
  const bornDate = new Date()
  const nowDate = new Date()
  bornDate.setFullYear(2007, 1, 23)

  const ageDate = new Date(nowDate - bornDate)

  const year = ageDate.getUTCFullYear() - 1970
  const month = ageDate.getUTCMonth()
  const day = ageDate.getUTCDate() - 1

  const res = `${year} years ${month} months ${day} days`
  return res
}
