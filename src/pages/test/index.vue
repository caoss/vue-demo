  <template>
  <div>
    <span>{{name}}</span>
    <el-table :data="list" style="width: 100%">
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
  computed: {
    ...mapGetters(["list", "name"])
  },
  mounted() {
    console.log("list", this.list);
  },
  methods: {
    //在组件中分发 Action
    ...mapActions([
      "getList" //将this.login映射为 this.$store.dispatch('login')，触发store中actions-login方法
    ]),
    // 登录操作
    getData() {
      this.getList({ pageNo: 1, pageSize: 10 });
    }
  }
};
</script>
