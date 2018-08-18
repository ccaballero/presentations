
a=new Object()

b=a.toString()
console.log(b)

Object.prototype.carlos=function(){
    return 'carlos'
}

c=a.carlos()
console.log(c)

