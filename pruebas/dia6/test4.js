
a={}
a.x=100
a.y='asd+áf'
a.z=true
a.u=function(){
    return 10
}

json=JSON.stringify(a)
console.log(json)

o=JSON.parse(json)
console.log(typeof o)
console.log(o)

