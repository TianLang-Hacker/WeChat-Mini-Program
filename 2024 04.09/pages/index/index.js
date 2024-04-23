// index.js
Page({
    data:{
        result:''
    },
    num1:0,
    num2:0,
    
    num1Input:function(e){
        this.num1=Number(e.detail.value)
        // console.log(this.num1)
    },

    num2Input:function(e){
        this.num2=Number(e.detail.value)
        // console.log(this.num2)
    },

    compare:function(){
        var str=''
        if(this.num1>this.num2){
            str='第一个大'
        }
        else if(this.num1<this.num2){
            str='第二个大'
        }
        else{
            str='差不多'
        }

        this.setData({
            result:str
        })
    }
})
