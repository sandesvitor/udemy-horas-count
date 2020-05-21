console.log('HoursWatched 1.0.1 - status: active') 

if (window.location.hostname == "www.udemy.com") {
    
    
    const interval = setInterval(() => {
        const header = document.querySelector('.header--course-dashboard-header--A4x0v')    
        
        if(header){
            
            clearInterval(interval)
            
            window.location.hash = '#content'
        
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
            
            

            document.querySelector('.progress--progress-container--RxDGm.popper--click-target--caIsH').addEventListener("click", () => {
   
                if (!document.querySelector('.popover--popover--click--3nXVQ')){
                     window.location.hash = "#content"
                }
            
                const box_interval = setTimeout( ()=> {
                    
                    let box = document.querySelector('.popover--popover--click--3nXVQ')
            
                    if (box) {
                        
                        clearInterval(box_interval)

                        let horasAssistidas = (getWatchFactor() * getTempoTotal()).toFixed(2)
                        let hrs = parseInt(horasAssistidas)
                        let min = parseInt((horasAssistidas - hrs) * 60)
            

                        let div_header = document.createElement('div')                        
                        let indicative_header = document.createElement('h3')
                        indicative_header.innerHTML = "Horas Assistidas:"
                        let hrs_header = document.createElement('h4')
                        hrs_header.innerHTML = hrs + ' hrs' + ' ' + min + ' min'
                        div_header.appendChild(indicative_header)
                        div_header.appendChild(hrs_header)            
                        div_header.classList.add('extension-div-seu-progresso-insert-hours-watched')
                        
                        box.appendChild(div_header)
                    }      
                }, 5)  
            })


        }
    }, 1000)


} else {
    console.log('Extension only works at host udemy.com')
}
