$(document).ready(function(){
    //if es solo para que carge en la pagina index cargamos una cosa o otra
    //es para comprobar si existe index en casi de que no no lo cargara
    if(window.location.href.indexOf('index') > -1){
          //Slider
    $('#ajSlider').ajSlider(4000,{    
        "slideshow":"enable", //disable or enable the slideshow 
        "width":"70%", //width of slider    
        "height":"100%", //height of slider  
        "activeBullet":"#00474d", //color of the active bullet   
        "inactiveBullet":"black", //color of inactive bullet    
        "textPosition":"30%", //position of text from top    
        "textSize":"0px" //font size of the text    
       }); 

    }
  
    //Posts

    if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title:'Pruebas de titulo 1',
            /*mes MMMM dia Do a;o YYYY dia dddd .date dia numero-- tienes que poner el momen en html con la libreria*/
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue'
        },
        {
            title:'Pruebas de titulo 2',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue'
        },
        {
            title:'Pruebas de titulo 3',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue'
        },
        {
            title:'Pruebas de titulo 4',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue'
        },
        {
            title:'Pruebas de titulo 5',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue'
        },
    ];
    //forEach tiene un item cada iteracion que hace con el objeto 
    //se ara una variable llamada post 
    //accedo al objeto y tomo la propiedad title
    posts.forEach((item,index) => {
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
        ${item.content}
        </p>
        <a href="#" class="button-more">Leer mas</a>
    </article>
        `;
      $("#post").append(post);
    });

 }
   
    //Selector de tema 
    var theme = $("#theme");
    $("#to-green").click(function(){
        /*attr cambiar atributo*/ 
        theme.attr("href","css/green.css")
    });
    console.log(theme);
    $("#to-black").click(function(){
        /*attr cambiar atributo*/ 
        theme.attr("href","css/black.css")
    });
    $("#to-blue").click(function(){
        /*attr cambiar atributo */ 
        theme.attr("href","css/blue.css")
    });

    //Scroll ir arriba de la web
    // e espara que no nosdirija a otra pagina y se quede en la que estamos
    $('.subir').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //Login falso
    $("#login form").submit(function(){
      var form_name = $("#form_name").val();
      //insertar informacion setItem---
    //variable a guardar en form_name la segunda se guarda en el navegador 
        localStorage.setItem("form_name",form_name);
    });
    //este recoje el valor de localStorage
    var form_name = localStorage.getItem("form_name");
    //compravar que no es null
    if(form_name != null && form_name != "undefined" && form_name != false){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        //append puede meter html tanbien
        about_parrafo.append("<br><a href='#' id='logout'>Cerrar</a> ");
        //ocultar login
        $("#login").hide();

        //borra el login o lo que hay en sesion en el localStorage
        $("#logout").click(function(){
            localStorage.clear();
            //recarga la pagina para que se vea otra vez el formulario
            location.reload();
        });
    }
   //si existe la palabra about en la html 
   //acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();

    }
    if(window.location.href.indexOf('reloj') > -1){
        //nos permite hacer un bucle para cada segundo cada cierto tiempo que se indique
        //un troso de instrucciones
        setInterval(function(){
            var reloj = moment().format('MMMM Do YYYY, h:mm:ss a');
            $('#reloj').html(reloj);
        },1000);
       
    }    
  
    //validacion
    if(window.location.href.indexOf('contact') > -1){
        //campos de formularios fecha cambiar el formato de pedir fecha
        $("form input[name='date']").datepicker({
            dateFormat:'dd-mm-yy'
        });

        //activar el validador de formulario
        $.validate({
            lang: 'es',
            //,mostrar todos los errores en la parte de ariba
            errorMessagePosition: 'top',
            scrollTopOnError:true
        });
    }
   

});