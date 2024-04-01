import { useState } from "react"
import { CartContext } from "./CreateCartContext"
import { ProductProps, childrenProps } from "../@types"


export const CartProvaider = ({ children }: childrenProps) => {

    const [cart, setCart] = useState<ProductProps[]>([])

    return (
       <CartContext.Provider value={{cart, setCart}}>
        { children }
       </CartContext.Provider>
    )
}