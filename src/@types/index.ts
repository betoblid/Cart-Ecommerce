import { ReactNode } from "react";


export interface childrenProps {
    children: ReactNode
}
export interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export interface CartContextData {
    cart: ProductProps[]
    setCart: React.Dispatch<React.SetStateAction<ProductProps[]>>

}