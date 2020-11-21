//esta unida con interface documento
$(document).ready(function(){
    //draggable es para mover las cajas adonde quieras
   $('.elemento').draggable();

   //redimencionar
    $(".elemento").resizable();

   //Seleccionar y ordenar elementos
   //$(".lista-seleccionable").selectable();
   //ordenar
   $(".lista-seleccionable").sortable({
       //guardar la lista 
    update: function(event, ui){
        console.log("ha cambiado la lista");
    }
   });

   //drop que haga una accion cuando pones un cradro dentro de otro
   $("#elemento-movido").draggable();
   //cuando se pone o sueltas 
   $("#area").droppable({
       drop: function(){
        console.log("Has soltado algo dentro de el area");
       }
   });

   //efectos
   $("#mostrar").click(function(){
    //$(".caja-efectos").toggle("fade"); o tanbien toggle o effect 
    //otros efectos blind slide drop fold puff scale shake 
    $(".caja-efectos").toggle("explode"/*con json tamalo mas opciones con ,{},*/,
    /*opciones tama;os velocidad con plabras slow o con numeros*/4000 );
   });

   //Tooltip es mostrar con te nido al pasar con el cursor
   $(document).tooltip();

   //Dialogo o popup o sin funcion para que salga automatico
   $("#lanzar-popup").click(function(){
    $("#popup").dialog();
   });

   //Datepicker --calendario
   $("#calendario").datepicker();

   //tabs hacer varias pestañas en una pagina
   $("#pestanas").tabs();
});