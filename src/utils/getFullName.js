import { teachers } from "../profiles/teachers";

export const getFullName = (name) => {
    for (const teacher of teachers) {
       if (teacher.imgTitle === name ) {
        return teacher.fullName
       }
    }
    return null
}