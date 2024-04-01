import { useEffect, useState } from "react"
import { BsCartPlus } from "react-icons/bs"
import { api } from "../../services"
import { ProductProps } from "../../@types"



export const Home = () => {

    const [listProduct, setListProduct] = useState<ProductProps[]>([])

    useEffect(() => {

        async function GetProduct() {

            await api.get("/products")
                .then((response) => {
                    setListProduct(response.data)
                })
        }
        GetProduct()
    }, [])

    return (
        <main className="w-full max-w-7xl mx-auto px-4">
            <h1 className="font-bold mt-10 mb-4 text-center text-2xl ">
                Produtos em alta
            </h1>
            {/* lista de produtos */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 ">

                {
                    listProduct.map((product) => {
                        return (
                            <section key={product.id}>
                                <img
                                    className="w-full rounded-lg max-h-70 mb-2 "
                                    src={product.cover}
                                    alt={product.title}
                                />

                                <p className="font-medium mt-1 mb-2">
                                    {product.title}
                                </p>

                                <div className="flex gap-3 items-center">
                                    <strong className="text-zinc-700/70">
                                        {
                                        product.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
                                        }
                                        </strong>
                                    <button className="bg-zinc-900 p-1 rounded">
                                        <BsCartPlus size={20} color="#fff" />
                                    </button>
                                </div>
                            </section>
                        )
                    })
                }

            </div>
        </main>
    )
}