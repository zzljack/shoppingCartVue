var list = {
	"shopcartdatas":[
		{
			"checked":false,
			"src":"img/service1.jpg",
			"name":"GZL-中控离心机净化机",
			"supplier":"美国",
			"ConPlace":"中国大陆",
			"price":100,
			"num":1,
			"saveandremove":true,
			"type":"商品"
		},
		{
			"checked":false,
			"src":"img/service2.jpg",
			"name":"GZL-中控离心机净化机",
			"supplier":"美国",
			"ConPlace":"中国大陆",
			"price":100,
			"num":2,
			"saveandremove":true,
			"type":"商品"
		},
		{
			"checked":false,
			"src":"img/service4.jpg",
			"name":"GZL-中控离心机净化机",
			"supplier":"美国",
			"ConPlace":"中国大陆",
			"price":100,
			"num":3,
			"saveandremove":true,
			"type":"服务"
		},
		{
			"checked":true,
			"src":"img/service3.jpg",
			"name":"GZL-中控离心机净化机",
			"supplier":"美国",
			"ConPlace":"中国大陆",
			"price":100,
			"num":4,
			"saveandremove":true,
			"type":"商品"
		},
		{
			"checked":true,
			"src":"img/service5.jpg",
			"name":"GZL-中控离心机净化机",
			"supplier":"美国",
			"ConPlace":"中国大陆",
			"price":600,
			"num":5,
			"saveandremove":true,
			"type":"服务"
		}
	]
}

new Vue({
  el: '#app',
  data:{
    "title" : "购物车",
    "totalMoney" : 0,
    "checkAll": false,
    "commodityNum":0,
    "cartdatas" : list.shopcartdatas
  },
  mounted(){
    this.$nextTick(function(){
      this.cartView();

   })
  },
  methods:{
    cartView(){
      if(this.checkAll){
        this.cartdatas.map(item => {
          item.checked = true;
        })
      }
      this.checkMoney();
    },
    checkMoney(){
      let total = this.cartdatas.filter(res => {return res.checked});
      let totalNum = 0;
      total.map(item => {
        totalNum += item.num*item.price;
      })
      this.commodityNum = total.length;
      this.totalMoney = totalNum;
    },
    checkedAllBtn(){
      if(this.checkAll){
        this.cartdatas.map(item => {
          item.checked = true;
        })
      }else{
        this.cartdatas.map(item => {
          item.checked = false;
        })
      }
      this.checkMoney();
    },
    changeBox(){
      this.checkMoney();
    },
    addNum(res){
      res.num++;
			this.checkMoney();
    },
    reduceNum(res){
      if(res.num>1){
        res.num--;
      }else{
        res.num = 1;
      }
			this.checkMoney();
    },
    alertRadio(index){
      console.log(index);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示').then(() =>{
        this.$message({
          type: 'success',
          message: '删除成功',
          callback: this.deleteData(index)
        })
      }).catch(() => {
        this.$message({
          type: 'error',
          message: '已取消删除'
        })
      })
    },
    deleteData(index){
      this.cartdatas.splice(index, 1);
    }
  },
  filters:{
    priceFiler(value){
      return '￥'+value.toFixed(2);
    }
  }
})
