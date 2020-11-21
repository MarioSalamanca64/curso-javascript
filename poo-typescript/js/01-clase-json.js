/*istalacion de cygwin
guradar en disco local c: 
los paquetes estan en carpeta c: //cywin_pakges
estalacion de git control de verciones 
ssh que es protocolo para que se comuniquen 
este en Net/the Open SSH server and clients programs
nano editor de codigo esta en /editors/nano
wget descargar archivos de la web
esta en /wget/net/wget/utility to files via HTTP and FTP

istalar typescript debes de tener node.js primero 
despues con los comandos en el cdn
intall -g typescript 
ver vercion 
tsv -v
*/


//objeto json
var bicicleta = {
    color:'rojo',
    modelo: 'bmx',
    frenos: 'de disco',
    velocidadMaxima: '60km',

    cambiarColor: function(nuevo_color){
        /*accede normal poniendo bicicleta o tanbien con --
        bicicleta.color = nuevo_color*/
        //this es llamas bicicleta por que estamos dentro del objeto
        this.color  = nuevo_color;
        console.log(this);
    }
};

bicicleta.cambiarColor("azul");


