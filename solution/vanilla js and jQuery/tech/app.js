  (()=>{
    $(document).ready(function(){
        $('.parallax').parallax();
      });

      $(document).ready(function(){
        $('.sidenav').sidenav();
      });
    $('.sidenav').sidenav({
        closeOnClick:true
    })

    $.get("tech/data.json", data => createElements(data['lessons']))
    
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
        const btnRepeat = `<a class="waves-effect waves-light btn btn-repeat">Repeat this lesson</a>`;
        const btnStart = `<a class="waves-effect waves-light btn btn-start">Start now</a>`;
        const btnPreview = `<a class="waves-effect waves-light btn btn-Preview">Preview</a>`;
        let elementBtn = (element.can_practice == true && element.is_completed == true) ? btnRepeat
                        :(element.can_practice == true && element.is_completed == false) ? btnStart
                        :btnPreview;

        $(                
        `<div class="row white z-depth-5">`+ 
            `<div class="col s4" style="position: relative;">`+           
                `<img class="pic" src="${element.image}"/>`+
                `<div class="overlay">`+
                    `<div class="completed"><i class="material-icons">check</i><span> Completed</span></div>`+
                `</div>`+
            `</div>`+
            `<div class="col l4 s8 left-align">`+           
                `<h6 class="ls">Lesson ${counter}</h6>`+
                `<h6 class="ttl">${element.title}</h6>`+
            `</div>`+
            `<div class="col l4 s8 valign-wrapper" style="height:100%;">`+ 
                `<div class="valign">`+ 
                    `${elementBtn}`+
                `</div>`+
            `</div>`+
        `</div>`
        ).appendTo(`#day_${div_id}`)
    }
    
    function formView(event){
        if(event.target.classList.contains('contactBtn')){
            console.log('wooooooo')

        }
        //console.log(event.target.classList)
        const banner = $('#banner');
        const lessons = $('#lessons_sections');
        const form = $('#form');

        if(event.target.classList.contains('contactBtn')){
            banner.addClass("hide");
            lessons.addClass("hide");
            form.removeClass("hide");

        }else if(event.target.classList.contains('lessonsBtn')){
            banner.removeClass("hide");
            lessons.removeClass("hide");
            form.addClass("hide");
            
            //$('html,body').scrollTop(0)
        }
    }
    document.addEventListener("click",e => formView(e))
    
    $('#submit').on("click", ()=>{
        const msg = $('#message').val();
        const names = $('#names').val();
        const mail = $("#email_inline").val()
        if(msg == '' || names == ''){
            $('#falseForm').removeClass("hide");
            return false;
        }else{
            if(!validateEmail(mail)){
                $('#falseForm').removeClass("hide");
                $('#falseForm').text("Please submit a valid email aress!")
                return false;
            }else{
                console.log(           {
                    names: names,
                    message: msg,
                    email: mail
                  })
                // and we post the info to the server
                // $.post("send_to_server.php",
                // {
                //   names: names,
                //   message: msg,
                //   email: mail
                // })
            }
            
        } 
    }); 

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
  })()