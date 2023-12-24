function Form() {
    return(
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="nome" id="name" placeholder="Digite seu nome" />
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Digite seu email" />
            </div>
            <div>
                <a href="#">Leia os termos</a>
                <div>    
                    <input type="checkbox" name="checkbox" id="checkbox"  />
                    <label htmlFor="chekbox">Concordo com os termos</label>
                </div>
            </div>
            <button>Inscreva-se</button>
        </form>
    )
}

export default Form