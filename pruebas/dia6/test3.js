
function A(){
    this.f=function(x){
        return x+1
    }
}

function B(){
    this.b=100
}

b=new B()
console.log(b.b)
b=Object.create(new A())
console.log(b.b)

