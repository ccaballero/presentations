
function draw(x,y){
    for(i=0;i<y;i++){
        line=''
        for(j=0;j<x;j++){
            if(j%2==0){
                if(j%4==0&&i%2==0){
                    line+='x'
                }else if((j+2)%4==0&&i%2==1){
                    line+='x'
                }else{
                    line+='o'
                }
            }else{
                line+='o'
            }
        }
        console.log(line)
    }
}

draw(10,10)
