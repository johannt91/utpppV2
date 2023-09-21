import { biographies } from "../profiles/biographies"

export const getBio = (name) => {
    return biographies[`${name}`]
}