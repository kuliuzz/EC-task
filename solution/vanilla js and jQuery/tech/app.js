
  (()=>{
    $(document).ready(function(){
        $('.parallax').parallax();
      });
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var options = {edge:'left'};
        var instances = M.Sidenav.init(elems, options);
      })


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
        const btnRepeat = `<a class="waves-effect waves-light btn btn-repeat" style="border-radius: 40px;"><span style="text-transform: none;">Repeat this lesson</span></a>`;
        const btnStart = `<a class="waves-effect waves-light btn btn-start" style="border-radius: 40px;"><span style="text-transform: none;">Start now</span></a>`;
        const btnPreview = `<a class="waves-effect waves-light btn btn-Preview" style="border-radius: 40px;"><span style="text-transform: none;">Preview</span></a>`;
        let elementBtn = (element.can_practice == true && element.is_completed == true) ? btnRepeat
                        :(element.can_practice == true && element.is_completed == false) ? btnStart
                        :btnPreview;

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
                    `${elementBtn}`+
                `</div>`+
            `</div>`+
        `</div>`
        ).appendTo(`#day_${div_id}`)
    }
    console.log(lessons)
    
    function formView(event){
        const banner = $('#banner');
        const lessons = $('#lessons_sections');
        const form = $('#form');
console.log(event)
        if(event.target.id == 'contactBtn' || event.target.id == 'contactBtn2'){
            banner.addClass("hide");
            lessons.addClass("hide");
            form.removeClass("hide");
        }else{
            banner.removeClass("hide");
            lessons.removeClass("hide");
            form.addClass("hide");
        }
    }
    
    const submitBtn = $('#submit');
    const su = $('[href="#form"]')
    su.on("click", e => formView(e))
    submitBtn.on("click", e => formView(e))
    function formSubmit(){
        
       
        
    }
     
  })()