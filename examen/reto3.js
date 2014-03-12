var Model=new(function(){
    this.bombs=80
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
                matrix[i][j]=0
            }
        }
        // Insercion de bombas
        for(k=0;k<this.bombs;k++){
            do{
                _i=this.random(this.rows)
                _j=this.random(this.columns)
            }while(matrix[_i][_j]===-1)
            matrix[_i][_j]=-1
        }
        // Insercion de contadores de bombas
        for(i=0;i<this.rows;i++){
            for(j=0;j<this.columns;j++){
                if(matrix[i][j]===0){
                    matrix[i][j]=1
                }
            }
        }
    }
    this.getMatrix=function(){return matrix}
    this.random=function(max){return Math.floor(Math.random()*max)}
    this.countBombs=function(i,j,m){
        // TODO
    }
})()

var Render=new(function(){
    this.renderTable=function(matrix){
        
    }
    this.finishGame=function(matrix){
        tbody=document.querySelector('#field table tbody')
        for(i=0;i<Model.rows;i++){
            tr=tbody.children[i]
            for(j=0;j<Model.columns;j++){
                td=tr.children[j]
                if(matrix[i][j]<0){
                    td.setAttribute('class','bomb')
                }else{
                    td.setAttribute('class','n'+matrix[i][j])
                    td.textContent=matrix[i][j]
                }
            }
        }
    }
})()

window.onload=function(){
    Model.generateMatrix()
}

