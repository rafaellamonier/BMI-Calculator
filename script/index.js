const buttonCalc = document.getElementById('btn-calc')
const buttonLimpar = document.getElementById('btn-limpar')
buttonCalc.addEventListener('click', (e) =>{
    e.preventDefault()
    var inputAltura = document.querySelector('#input-altura').value
    var inputPeso = document.querySelector('#input-peso').value
    if(inputAltura === '' || inputPeso === ''){
        window.alert("Digite sua altura e seu peso")
    }else{
        inputAltura = parseFloat(document.querySelector('#input-altura').value)
        inputPeso = parseInt(document.querySelector('#input-peso').value)
        const IMC = (inputPeso / (inputAltura * inputAltura)).toFixed(2)
        
        if(IMC < 18.5){
            const trMagreza = document.querySelector('.Magreza')
            trMagreza.style.background = '#C0C0C0'
            console.log(IMC)
        }else if(IMC >= 18.5 && IMC <= 24.9){
            const trNormal = document.querySelector('.Normal')
            trNormal.style.background = '#C0C0C0'
            console.log(IMC)
        }else if(IMC >= 25.00 && IMC <= 29.9){
            const trSobrepeso = document.querySelector('.Sobrepeso')
            trSobrepeso.style.background = '#C0C0C0'
            console.log(IMC)
        }else if(IMC >= 30.0 && IMC <= 39.9){
            const trObesidade = document.querySelector('.Obesidade')
            trObesidade.style.background = '#C0C0C0'
            console.log(IMC)
        }else{
            const trObesidadeGrave = document.querySelector('.ObesidadeGrave')
            trObesidadeGrave.style.background = '#C0C0C0'
            console.log(IMC)
        }
    }

})
buttonLimpar.addEventListener('click', (e) => {
    e.preventDefault()
    const inputMetros = document.querySelector('#input-altura')
    const inputAltura = document.querySelector('#input-peso')
    const trs = document.querySelectorAll('tr')
    inputMetros.value = ''
    inputAltura.value = ''
    trs.forEach((element) =>{
        element.style.background = '#fff'
    })
    
})