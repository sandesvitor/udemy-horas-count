// Extensão para somar horas assistidas em cursos Udemy!




const interval = setInterval(() => {
    const header = document.querySelectorAll('.nav-slide.dashboard--dashboard-tabs--3ovIi.nav.nav-tabs')
    if(header){
        console.log(header)
        clearInterval(interval)


        const button = document.createElement("button")
        button.innerHTML = "Contabilizar Horas"
        button.classList.add("horas-btn")

        const headerList = document.createElement("li")
        headerList[0].appendChild(button)
        
        
        button.addEventListener("click", (secoes) => {
            
               
                let minutos = 0;
                let horas = 0;
            
                for (let i=0; i < secoes; i++) {
                    
                    let dom = document.querySelectorAll('.ml-space-xxs')[i].innerText.split('');
            
                    if (dom.includes('h')) {
                        horas = horas + parseFloat(dom.slice(0,1));
                        minutos = minutos + parseFloat(dom.slice(3, dom.length).join(''));
                    } else {
                        minutos = minutos + parseFloat(dom.join(''))
                    }
                }
            
                return horas*60 + minutos
            


        })
        
        header.appendChild(headerList)

    }
}, 1000)