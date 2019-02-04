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
        this.displayDate = this.currentDate.toLocaleDateString(this._locale)
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }
}

    //Encapsulamento
    //private(só a propria classe)
    //protected(só acessado por atributos da classe e herança) 
    //public (politico em eleição, todos acessam)