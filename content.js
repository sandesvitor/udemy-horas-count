console.log('Extensão Rodando') 


const interval = setInterval(() => {
    const header = document.querySelector('.header--course-dashboard-header--A4x0v')
    if(header){
        console.log(header)
        clearInterval(interval)
        
        const getWatchFactor = () => {
            let a = document.querySelectorAll('.mr-space-xxs')
            let numerador = 0
            let denominador = 0
            let arrayFator = []
            let len = 0
        
            for (i=0; i < a.length; i++) {
                arrayFator = a[i].innerText.split('/')
                len = arrayFator.length
        
                numerador += parseFloat(arrayFator[0])
                denominador += parseFloat(arrayFator[len-1])
        
            }
        
            let factor = numerador/denominador
        
            return factor
        }        


        const getTempoTotal = () => {
            let minutos = 0
            let horas = 0
            let a = document.querySelectorAll('.ml-space-xxs');
        
            for (let i = 0; i < a.length - 1; i++) {
        
                let dom = a[i].innerText.split('')
        
                if (dom.includes('h')) {
                    horas += parseFloat(dom.slice(0,1))
                    minutos += parseFloat(dom.slice(3, dom.length - 1).join(''))
                } else {
                    minutos = minutos + parseFloat(dom.join(''))
                }
            }
        
            let horasTotais = (horas*60 + minutos)/60 
            return horasTotais
        }
        

        let horasAssistidas = (getWatchFactor() * getTempoTotal()).toFixed(2) 

        let a = document.createElement('h3')
        a.innerHTML = 
        "Horas assistidas:"
        header.appendChild(a)
        
        let b = document.createElement('h4')
        b.innerHTML = horasAssistidas


        header.appendChild(b)
    }

}, 1000)
