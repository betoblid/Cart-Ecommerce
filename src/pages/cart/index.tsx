


export const Cart = () => {

    return (
        <main className="w-full max-w-7xl mx-auto">

            <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho</h1>

            <section className="flex items-center justify-between border-b-2 border-gray-200">

                <img
                    className="w-28"
                    src="https://m.media-amazon.com/images/I/61CVih3UpdL.__AC_SY445_SX342_QL70_ML2_.jpg"
                    alt="logo de um fone de ouvido"
                />

                <strong>
                    R$ 1000,00
                </strong>

                <div className="flex items-center justify-center gap-3">
                    <button className="bg-slate-600 px-2 text-white rounded font-medium flex items-center justify-center">
                        -
                    </button>
                    2
                    <button className="bg-slate-600 px-2 text-white rounded font-medium flex items-center justify-center">
                        +
                    </button>
                </div>

                <strong className="float-right">
                    SubTotal: R$ 1000,00
                </strong>

            </section>

            <p className="font-bold mt-4">Total R$ 1002,00</p>
        </main>
    )
}