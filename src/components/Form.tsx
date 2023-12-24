function Form() {
    return(
        <form className="flex flex-col gap-3 ">
            <label className="text-sm" htmlFor="name">Nome</label>
            <input type="text" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400 outline-none border-solid border border-slate-400 focus:border-slate-600" name="nome" id="name" placeholder="Digite seu nome" />
            <label className="text-sm" htmlFor="email">E-mail</label>
            <input type="email" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400 outline-none border-solid border border-slate-400 focus:border-slate-600" name="email" id="email" placeholder="Digite seu email" />
            <div className="flex flex-col">
                <a href="#" className="text-xs underline mb-2">Leia os termos</a>
                <div className="flex gap-2 items-center">    
                    <input type="checkbox" name="checkbox" id="checkbox" className="cursor-pointer"  />
                    <label htmlFor="checkbox" className="cursor-pointer">Concordo com os termos</label>
                </div>
            </div>
            <button className="bg-slate-900 hover:bg-slate-700 font-medium text-sm py-3 px-4 rounded-lg text-white transition ease-in-out">Inscreva-se</button>
        </form>
    )
}

export default Form