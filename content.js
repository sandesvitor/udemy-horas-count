console.log('HoursWatched 1.1.0 - status: active') 

if (window.location.hostname == "www.udemy.com") {
    
    
    const interval = setInterval(() => {
        const header = document.querySelector('.header--course-dashboard-header--A4x0v')    
        
        if(header){
            
            clearInterval(interval)
            
            window.location.hash = '#content'          


            const openSections = () => {        
                const contentsDiv = document.querySelectorAll('.section--section-heading--2k6aW')      
                const lessonsFraction = document.querySelectorAll('.mr-space-xxs')
                const selectionArrowUp = document.querySelectorAll('.section--section-chevron--tJ4mD.udi.udi-angle-up')
                let numerador = 0
                let arrayFraction = []
            
            
                for (i=0; i < lessonsFraction.length; i++) {
            
                    arrayFraction = lessonsFraction[i].innerText.split('/')
                    numerador = parseFloat(arrayFraction[0])                        
            
            
                    if (!selectionArrowUp[i] && numerador !== 0){
                       contentsDiv[i].click()                                                                 
                    }
                }
            } 

            const getWatchedTime = () => {
                let totalTime = 0
              
                let lessons = document.querySelectorAll('.mr-space-xxs')
                let time = document.querySelectorAll('.ml-space-xxs')         
                const innerSectionDiv = document.querySelectorAll('.curriculum-item-link--lecture-type-resource-container--2l5ZE')
                const sectionCheckbox = document.querySelectorAll('.curriculum-item-link--progress-toggle--1CMcg.checkbox-inline input') 
        
                let arrayLessons = []
                let lessonsWatched = 0
                let lessonsWatchedInit = 0
                let lessonsTotal = 0
                let lessonsTotalSum = 0
                let arrayTime = []
        
                let horas = 0
                let minutos = 0
                let sectionMinutes = 0
        
        
                for (i=0; i < lessons.length; i++) {
                    horas = 0
                    minutos = 0
                    sectionMinutes = 0
                    arrayLessons = []
                    lessonsWatched = 0
                    lessonsTotal = 0
                    arrayTime = []
        
                    arrayLessons = lessons[i].innerText.split('/')
                    lessonsWatched = parseFloat(arrayLessons[0])
                    lessonsTotal = parseFloat(arrayLessons[1])
        
                    arrayTime = time[i].innerText.split('')
                    if (arrayTime.includes('h')) {
                        horas = parseFloat(arrayTime.slice(0,1))
                        minutos = parseFloat(arrayTime.slice(3, arrayTime.length - 1).join(''))
                    } else {
                        minutos = minutos + parseFloat(arrayTime.join(''))
                    }
                    
        
                    lessonsTotalSum += lessonsTotal
                     
                    if (lessonsWatched === lessonsTotal){
                        sectionMinutes = horas*60 + minutos      
                    } else if (lessonsWatched == 0) {
                        sectionMinutes = 0
                    } else {
                       for (let j = lessonsWatchedInit; j < lessonsTotalSum; j++){                   
                           if (sectionCheckbox[j].checked){
                           sectionMinutes += parseFloat(innerSectionDiv[j].innerText)
                           }
                       }
                    }
                     
                    lessonsWatchedInit += lessonsTotal 
                    
                    totalTime += sectionMinutes                                                                     
                }                    
        
              
        
                return totalTime
            }
        
        
           
            

            document.querySelector('.progress--progress-container--RxDGm.popper--click-target--caIsH').addEventListener("click", () => {
   
                if (!document.querySelector('.popover--popover--click--3nXVQ')){
                    window.location.hash = "#content"
                }
            
                setTimeout( ()=> {
                    
                    let box = document.querySelector('.popover--popover--click--3nXVQ')
            
                    if (box) {
                        
                        openSections()

                        let minutosAssistidos = getWatchedTime()
                        let hrs = parseInt(minutosAssistidos / 60)
                        let min = parseInt(minutosAssistidos % 60)
            

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
