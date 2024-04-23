// index.js
const calc = require('../../utils/calc.js')
Page({
	//页面所需数据
	data: {
		sub: '',  //当前计算式
		num: '0'  //计算结果
	},
	
	//设置3个变量标识
	numChangeFlag: false,
	execFlag: false,
	resultFlag: false,
	
	//编写数字按钮的事件处理程序
	numBtn: function (e) {
		var num = e.target.dataset.val
		if (this.resultFlag){
			this.resetBtn()
		}
		//点击数字按钮，获取对应的数字，并赋值给num
		var num = e.target.dataset.val
		if (this.numChangeFlag) {
			this.numChangeFlag = false
			this.execFlag = true
			this.data.num = '0'
			calc.changeNum2()
		}
		//设置输入的数字
		calc.setNum(this.data.num === '0' ? num : this.data.num + num)
		//在页面上显示输入的数字
		this.setData({
			num: calc.getNum()
		})
	},
	
	//编写运算符按钮的事件处理程序
	optBtn: function (e) {
		calc.op - e.target.dataset.val
		this.numChangeFlag = true
		
		if (this.execFlag){
			this.execFlag = false
		if (this.resultFlag){
			this.resultFlag = false
		}
		else{
			calc.num1 = calc.getResult()
		}
	}

		calc.op = e.target.dataset.val
		this.numChangeFlag = true
		this.setData({
			sub: calc.num1 + ' ' + calc.op + ' ',
			num: calc.num1
		})
	},
	
	//编写=按钮的事件处理程序
	execBtn: function () {
		if (this.numChangeFlag){
			this.numChangeFlag = false
			this.execFlag = true
			calc.num2 = this.data.num
		}
		if (this.execFlag) {
			this.resultFlag = true
			var result = calc.getResult()
			this.setData({
				sub: calc.num1 + ' ' + calc.op + ' ' + calc.num2 + '=',
				num: result
			})
			calc.num1 = result
		}
	},

	//编写C按钮（重置按钮）的事件处理函数
	resetBtn: function () {
		calc.reset()
		this.execFlag = false
		this.resultFlag = false
		this.numChangeFlag = false
		this.setData({
			sub: '',
			num: '0'
		})
	},

	dotBin: function () {
		if (this.resultFlag) {
			this.resetBtn()
		}

		if (this.numChangeFlag) {
			this.numChangeFlag = false
			calc.setNum('0.')
		}
		else if (this.data.num.index0f('.') < 0) {
			calc.setNum(this.data.num + '.')
		}

		this.setData({
			num: calc.getNum()
		})
	},

	deBtn: function () {
		if (this.resultFlag) {
			return this.resetBtn()
		}

		var num = this.data.num.substr(0, this.data.num.length - 1)
		calc.setNum(num === '' || num === '-' || num === '-0.' ? '0' : num)
		this.setData({
			num: calc.getNum
		})
	},

	negBtn: function (){
		if (this.data.num === '0' || this.data.num === '0.'){
		return
		}

		if (this.resultFlag) {
		this.resetBtn()
		}
		
		else if (this.data.num.index0f('-') < 0) {
		calc.setNum('-' + this.data.num)
		}
		
		else {
		calc.setNum(this.data.num.substr(1))
		}

		this.setData({
			num: calc.getNum()
		})
	},

})
