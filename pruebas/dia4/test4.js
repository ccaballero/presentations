
var a = 10
var b = new Number(10)
var c = b.valueOf()
var d = 10.0000000005
var e = function(){return 'asdf'}

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof e)

console.log(d.toPrecision(4))

