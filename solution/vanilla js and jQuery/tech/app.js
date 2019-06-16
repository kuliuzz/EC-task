
  (()=>{
    $(document).ready(function(){
        $('.parallax').parallax();
      });

    $.get("tech/data.json", data => createElements(data['lessons']))
    const lessonsContainer = $('#lessons')
    
    function createElements(elements){
        const lessonsDiv = $('#lessons')
        console.log(elements)
        let daysArray = []
        let counter = 1;
        elements.forEach(element => {
            console.log(element)
            const day = element.day;
            if(!daysArray.includes(day)){
                lessonsDiv.append(`<div class="center days" id="day_${day}"><h5 class="left-align">Day ${day}</h5></div>`)
                newDay(element,day,counter)
                counter++;
                daysArray.push(day)
            }else{
                newDay(element,day,counter);
                counter++;
            }
        })
    }
    function newDay(element,div_id,counter){
        $(                
        `<div class="row white z-depth-5">`+ // style="height:50vh;"
            `<div class="col s4 ">`+           
                `<img class="responsive-img" src="${element.image}"/>`+
            `</div>`+
            `<div class="col s4 left-align txt">`+           
                `<h6>Lesson ${counter}</h6>`+
                `<br>`+
                `<h6>${element.title}</h6>`+
            `</div>`+
            `<div class="col s4 txt valign-wrapper" style="height:100%;">`+ 
                `<div class="valign">`+ 
                    `<a class="waves-effect waves-light btn btn-dogs" style="border-radius: 40px;"><span style="text-transform: none;">Repeat this lesson</span></a>`+
                `</div>`+
            `</div>`+
        `</div>`
        ).appendTo(`#day_${div_id}`)
    }
    console.log(lessons)
    
     
  })()