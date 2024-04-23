// index.js
const calc = require('../../utils/calc.js')
Page({
    data: {
        sub: '', //当前计算式
        num: '0' //计算结果
    },

    // 设置3个变量标识
    numChangeFlag: false,
    execFlag: false,
    resultFlag: false,



    numBtn:function(e){
        // 点击数字按钮，获取对应的数字，彬赋值给num
        var num=e.target.dataset.val
        if(this.numChangeFlag){
            this.numChangeFlag=false
            this.execFlag=true
            this.data.num='0'
            calc.changeNum2()
        }
        // 设置输入的数字
        calc.setNum(this.data.num==='0'?num:this.data.num+num)
        // 在页面上显示输入的数字
        this.setData({
            num:calc.getNum()
        })
    },

    // 运算符按钮的事件处理程序
    optBtn:function(e){
        calc.op=e.target.dataset.val
        this.numChangeFlag=true
        this.setData({
            sub:calc.num1+' '+calc.op+' ',
            num:calc.num1
        })
    },

    // =按钮的事件处理程序
    execBtn:function(){
        if(this.execFlag){
            this.resultFlag=true
            var result=calc.getResult()
            this.setData({
                sub:calc.num1+' '+calc.op+' '+calc.num2+'=',
                num:result
            })
        }
    }
})
