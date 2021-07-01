import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";
const mensagens = [
    {
        title: "Hora do Post!",
        body: "crie algum conteudo",
    
    }, 
    {
        title: "Hora da Agua!",
        body: "Tome um pouco de agua",
    
    }, 
    {
        title: "Hora do Lanche!",
        body: "Coma algo saudavel",
    
    }, 
    {
        title: "Hora do exercicio!",
        body: "que tal alguns polichinelos?",
    
    }, 
    {
        title: "Hora do cafe!",
        body: "Vai tomar uma golada!",
    
    }, 
]
const notify = Notifyer.notify(mensagens[Math.floor(Math.random() * 5)])


const App = {
    async start() {
        try {
            await Notifyer.init()

            Emitter.on('countdow-start', notify)


            Emitter.on('countdown-end',Timer.init)
            Timer.init()


        } catch (err) {
            console.log(err.message)
        }
    }
}
export { App }