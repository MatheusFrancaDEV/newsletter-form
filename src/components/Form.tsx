import { useState, FormEvent } from "react"
import { User } from "../types/User"
import { validate } from "../utils/validate"

function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    const [errors, setErrors] = useState<User | null>(null)

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault()

        setErrors(null)

        const data: User = {
            name,
            email,
            checkbox
        }

        const validateErrors = validate(data)

        if(Object.keys(validateErrors).length > 0){
            setErrors(validateErrors)
            return
        }

        setName('')
        setEmail('')
        setCheckbox(false)

        alert("Obrigado por se inscrever")

    }

    return(
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <label className="text-sm" htmlFor="name">Nome</label>
            <input type="text" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400 outline-none border-solid border border-slate-400 focus:border-slate-600" name="nome" id="name" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)}/>
            {errors?.name && (
                <small className="text-xs text-red-500">{errors?.name}</small>
            )}
            <label className="text-sm" htmlFor="email">E-mail</label>
            <input type="email" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400 outline-none border-solid border border-slate-400 focus:border-slate-600" name="email" id="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            {errors?.email && (
                <small className="text-xs text-red-500 transition">{errors?.email}</small>
            )}
            <div className="flex flex-col">
                <a href="#" className="text-xs underline mb-2">Leia os termos</a>
                <div className="flex gap-2 items-center">    
                    <input type="checkbox" name="checkbox" id="checkbox" className="cursor-pointer" checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)}  />
                    <label htmlFor="checkbox" className="cursor-pointer">Concordo com os termos</label>
                    {errors?.checkbox && (
                        <small className="text-xs text-red-500">{errors?.checkbox}</small>
                    )}
                </div>
            </div>
            <button className="bg-slate-900 hover:bg-slate-700 font-medium text-sm py-3 px-4 rounded-lg text-white transition ease-in-out">Inscreva-se</button>
        </form>
    )
}

export default Form