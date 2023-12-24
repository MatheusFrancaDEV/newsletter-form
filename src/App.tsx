import Form from "./components/Form"

function App() {

  return (
    <div className="bg-slate-300 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-slate-950 font-bold text-[2rem]">Inscreva-se</h1>
      <p className="text-slate-800">Assine a newsletter e se mantenha-se sempre informado</p>
      <div className="w-96 mt-4 bg-slate-200 px-4 py-5 rounded-lg ">
        <Form />
      </div>
      <p className="text-slate-400 text-xs w-96 mt-2 text-center">Ao se inscrever, você passará a receber as melhores noticias em primeira mão!</p>
    </div>
  )
}

export default App
