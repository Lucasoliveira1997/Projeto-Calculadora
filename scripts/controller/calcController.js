// Classe é um conjunto de atributos e metodos

// Atributo semelhante a  varialvel, só que tem mais funções (caracteristica)
// Metodo == Função (comportamento)

class CalcController {
    //Metodo construtor
    constructor() {
        this._locale = 'pt-br'
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate
        this.initialize()
    }

    //metodo main
    initialize(){
        //this._displayCalcEl = 0 
        this.setDisplayDateTime()
        console.log("Chamou a classe")        

        setInterval(() => {
            this.setDisplayDateTime()
        }, 1000)

        this.initButtonEvents()
    }

    addEventListenerAll(element, event, fnc){

    }

    //evento clique nos botaoes da calculadora
    initButtonEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g")

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, "click drag", e => {
                
            })
        })
    }

    //get e set    

    //pegar valor
    get displayCalc(){
        return this._displayCalcEl.innerHTML
    }

    //setar valor
    set displayCalc(valor){
        return this._displayCalcEl.innerHTML = valor
    }

    get displayTime(){
        return this._timeEl.innerHTML
    }

    set displayTime(valor){
        return this._timeEl.innerHTML = valor
    }

    get displayDate(){
        return this._dateEl.innerHTML
    }

    set displayDate(valor){
        return this._dateEl.innerHTML = valor
    }

    get currentDate() {
        return new Date()
    }

    set currentDate(valor){
        this._currentDate = valor
    }

    setDisplayDateTime(){
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }
}

    //Encapsulamento
    //private(só a propria classe)
    //protected(só acessado por atributos da classe e herança) 
    //public (politico em eleição, todos acessam)