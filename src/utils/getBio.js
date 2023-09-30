import { biographies } from "../profiles/biographies"

// Faculty member name and retrieve associated bio from biographies
export const getBio = (name) => {
    return biographies[`${name}`]
}