var message='Demostración para el curso de javascript básico'

function typing(count){
    count=count||0      // si count es undefined, se asigna cero
    node=document.getElementById('typing')
    node.innerHTML=message.substr(0,count)
    if(count<message.length){
        setTimeout(typing,250,++count)
    }
}

window.onload=function(){
    setInterval(function(){
        var cursor=document.getElementById('cursor')
        var inner=cursor.innerHTML
        switch(inner){
            case ' ':
                cursor.innerHTML='_'
                break
            case '_':
                cursor.innerHTML=' '
                break
        }
    },700)
    setTimeout(typing,4000,0)
}

