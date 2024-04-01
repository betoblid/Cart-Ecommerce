import { ReactNode } from "react"
import { Context } from "./CreateContext"

interface useProvaiderProps {
    children: ReactNode
}
export const useProvaider = ({ children }: useProvaiderProps) => {

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}