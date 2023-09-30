import { staff } from "../profiles/staffList"

export const getFullName = (name, role) => {
  for (const member of staff) {
    if (
      (member.imgTitle === name && member.role === role) ||
      member.imgTitle === name
    ) {
      return member.fullName
    }
  }
  return null
}

export const getDegree = name => {
  for (const member of staff) {
    if (member.imgTitle === name) {
      return member.degree
    }
  }
  return null
}
