import { BsCartPlus } from "react-icons/bs"



export const Home = () => {

    return(
        <main className="w-full max-w-7xl mx-auto px-4">
        <h1 className="font-bold mt-10 mb-4 text-center text-2xl ">
            Produtos em alta
        </h1>
        {/* lista de produtos */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 ">
            <section>
                <img 
                className="w-full rounded-lg max-h-70 mb-2 "
                src="https://m.media-amazon.com/images/I/61CVih3UpdL.__AC_SY445_SX342_QL70_ML2_.jpg" 
                alt="logo de um fone de ouvido" 
                />

                <p className="font-medium mt-1 mb-2">
                    apple AirPode (3a geração )
                </p>

                <div className="flex gap-3 items-center">
                    <strong className="text-zinc-700/70">R$ 1.200</strong>
                    <button className="bg-zinc-900 p-1 rounded">
                        <BsCartPlus size={20} color="#fff"/>
                    </button>
                </div>
            </section>
        </div>
        </main>
    )
}