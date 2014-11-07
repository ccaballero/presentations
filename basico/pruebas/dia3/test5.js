// Practica del curso de Javascript Básico
// La que gano entre los alumnos.

function matriz(x,y){
    for(i=0;i<x;i++){
        cadena = ''
        cont = i%2 == 0 ?1:2
        ind = 0
        for(j=0;j<y;j++){
            car = cont==1?'x':'o'
            cadena+=car
            ind++
            if(ind==cont){
               cont = cont==1?3:1
               ind = 0
            }
         }
        console.log(cadena)
    }
}

matriz(6,9)

