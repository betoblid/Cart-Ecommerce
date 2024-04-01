import { useContext } from "react"
import { CartContext } from "../contexts/CreateCartContext"


export const UseContxt = () => {
    return useContext(CartContext)
}