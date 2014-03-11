var Model=new(function(){
    this.bombs=10
    this.rows=20
    this.columns=20

    var matrix
    this.generateMatrix=function(){
        matrix=new Array(this.rows)
        remaining=this.bombs
        count=this.rows*this.columns
        for(i=0;i<this.rows;i++){
            matrix[i]=new Array(this.columns)
            for(j=0;j<this.columns;j++){
                _bomb=this.random()
                if(_bomb){
                    remaining--
                }
                matrix[i][j]=_bomb
                count++
            }
        }
    }
    this.random=function(){
        return ((Math.floor(Math.random()*2))==0)
    }
})()

var Render=new(function(){
    this.renderTable=function(matrix){

    }
})()

var Tpl=new(function(){

})()

window.onload=function(){
    Model.generateMatrix()
}

