function Animal(){
    this.tipo
    this.rugir=function(){
        return 'ggggrrr'
    }
}

function Gato(){
    this.nombre
}

var a=new Animal()
Gato.prototype=a
var b=new Gato()


b.tipo='mamifero'
console.log(b.rugir())

