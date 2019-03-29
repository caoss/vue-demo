  <template>
  <div>
    <span>{{name}}</span>
    <el-table :data="lists" style="width: 100%">
      <el-table-column prop="sortNo" label="排序"></el-table-column>
      <el-table-column prop="pname" label="pname" width="180"></el-table-column>
      <el-table-column prop="pcode" label="pcode" width="180"></el-table-column>
    </el-table>
  </div>
</template>

  <script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "test",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {
    this.getData();
  },


    // computed: mapState({
    //     products: state => state.products.all
    // }),
    // methods: mapActions('cart', [
    //     'addProductToCart'
    // ]),
    //      computed: {
        //     ...mapState({
        //     checkoutStatus: state => state.cart.checkoutStatus
    //     }),
            //  ...mapGetters('cart', {
            //     products: 'cartProducts',
            //     total: 'cartTotalPrice'
            //     })
    // },
    // methods: {
    //     checkout (products) {
    //     this.$store.dispatch('cart/checkout', products)
    //     }
    // }

  computed: {
    ...mapGetters(//带有命名空间的写法
        'list',{
            'lists':'list'//
        },
    ),
     ...mapGetters(["name"])
  },
  mounted() {
    console.log("list----", this.list);
  },
  methods: {
    //在组件中分发 Action
    // ...mapActions([
    //   "getList" //将this.login映射为 this.$store.dispatch('login')，触发store中actions-login方法
    // ]),
    ...mapActions(//带有命名空间的写法、namespace:true
        'list',{
            'getList':'getList'
        }
    ),
    // 登录操作
    getData() {
      this.getList({ pageNo: 1, pageSize: 10 });
    }
  }
};
</script>
