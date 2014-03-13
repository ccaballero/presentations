var Model=new(function(){
    this.bombs=64
    this.rows=16
    this.columns=16

    var matrix
    this.generateMatrix=function(){
        // Verificador de numero de bombas
        if(this.bombs>(this.rows*this.columns)){
            this.bombs=this.rows*this.columns
        }
        // Seteo de matriz
        matrix=new Array(this.rows)
        for(i=0;i<this.rows;i++){
            matrix[i]=new Array(this.columns)
            for(j=0;j<this.columns;j++){
                matrix[i][j]={'type':0,'hide':1}
            }
        }
        // Insercion de bombas
        for(k=0;k<this.bombs;k++){
            do{
                _i=this.random(this.rows)
                _j=this.random(this.columns)
            }while(matrix[_i][_j]['type']===-1)
            matrix[_i][_j]['type']=-1
        }
        // Insercion de contadores de bombas
        h=this.columns
        w=this.rows
        for(i=0;i<this.rows;i++){
            for(j=0;j<this.columns;j++){
                if(matrix[i][j]['type']===-1){  // es bomba
/* sup izq */       (i!=0&&j!=0&&matrix[i-1][j-1]['type']>=0)
                        &&(matrix[i-1][j-1]['type']++);
/* sup cen */       (i!=0&&matrix[i-1][j]['type']>=0)
                        &&(matrix[i-1][j]['type']++);
/* sup der */       (i!=0&&j!=h-1&&matrix[i-1][j+1]['type']>=0)
                        &&(matrix[i-1][j+1]['type']++);
/* mid izq */       (j!=0&&matrix[i][j-1]['type']>=0)&&(matrix[i][j-1]['type']++);
/* mid der */       (j!=h-1&&matrix[i][j+1]['type']>=0)
                        &&(matrix[i][j+1]['type']++);
/* inf izq */       (i!=w-1&&j!=0&&matrix[i+1][j-1]['type']>=0)
                        &&(matrix[i+1][j-1]['type']++);
/* inf cen */       (i!=w-1&&matrix[i+1][j]['type']>=0)
                        &&(matrix[i+1][j]['type']++);
/* inf der */       (i!=w-1&&j!=h-1&&matrix[i+1][j+1]['type']>=0)
                        &&(matrix[i+1][j+1]['type']++);
                }
            }
        }
    }
    this.getMatrix=function(){return matrix}
    this.random=function(max){return Math.floor(Math.random()*max)}
})()

var Render=new(function(){
    this.render=function(matrix){
        tbody=document.querySelector('#field table tbody')
        for(i=0;i<Model.rows;i++){
            tr=tbody.children[i]
            for(j=0;j<Model.columns;j++){
                td=tr.children[j]
                if(matrix[i][j]['hide']){
                    td.setAttribute('class','hide')
                }else{
                    if(matrix[i][j]['type']<0){
                        td.setAttribute('class','bomb')
                    }else{
                        if(matrix[i][j]['type']!=0){
                            td.setAttribute('class','n'+matrix[i][j]['type'])
                            td.textContent=matrix[i][j]['type']
                        }
                    }
                }
            }
        }
    }
    this.listener=function(){
        tbody=document.querySelector('#field table tbody')
        for(i=0;i<Model.rows;i++){
            tr=tbody.children[i]
            for(j=0;j<Model.columns;j++){
                td=tr.children[j]
                td.addEventListener('click',Listener.action.bind(Listener))
            }
        }
        return this
    }
})()

var Listener=new(function(){
    this.test='qwer'
    this.action=function(e){
        console.log(this)
        console.log(this.test)
    }
})()

window.onload=function(){
    Model.generateMatrix()
    Render.listener().render(Model.getMatrix())
}

