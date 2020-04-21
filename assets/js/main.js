const input = {
    cpf: document.querySelector('input#cpf')
}
const resultado = {
    cpf: document.querySelector('tr.cpf td.res')
}
function validarCPF() {
    let pesoD1 = 10
    let pesoD2 = 11
    const cpfLimpo = input.cpf.value.replace(/\D+/g, '')
    if (cpfLimpo.length != 11) {
        alert('CPF digitado incorretamente')
        input.cpf.value = ''
        input.cpf.focus()
    } else {
        const cpfArray = Array.from(cpfLimpo)
        const digitoVerificadorInformado = cpfArray[9] + cpfArray[10]
        const cpfSemDigito = cpfArray.slice(0, 9)
        const somatoria = cpfSemDigito.reduce((ac, val) => ac + Number(val) * pesoD1--, 0)
        const primeiroDigito = somatoria%11<2 ? '0' : String(11-(somatoria%11))
        const cpfComPrimeiroDigito = [...cpfSemDigito, primeiroDigito]
        const somatoria2 = cpfComPrimeiroDigito.reduce((ac, val) => ac + Number(val) * pesoD2--, 0)
        const segundoDigito = somatoria2%11<2 ? '0' : String(11-(somatoria2%11))
        const digitoVerificadorValidado = primeiroDigito+segundoDigito
        //const cpfCompleto = [...cpfComPrimeiroDigito, segundoDigito]
        if (digitoVerificadorInformado == digitoVerificadorValidado) {
            resultado.cpf.innerHTML = 'Válido'
            resultado.cpf.style.color = 'green'
        } else {
            resultado.cpf.innerHTML = 'Inválido'
            resultado.cpf.style.color = 'red'
        }
    }
    
}

