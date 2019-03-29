  <template>
  <div>
    <div style="padding:20px 0">
      <el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true" size="mini">添加</el-button>
    </div>

    <el-table :data="lists" style="width: 100%">
      <el-table-column prop="sortNo" label="排序"></el-table-column>
      <el-table-column prop="pname" label="pname" width="180"></el-table-column>
      <el-table-column prop="pcode" label="pcode" width="180"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.row.id, lists)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="text-align:center;margin-top:20px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="getPageNo"
        :page-sizes="[2,3,10, 400]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>

    <!-- 添加 -->
    <el-dialog title="添加" :visible.sync="dialogVisible" width="30%">
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm2.age"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm2');dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

  <script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "test",
  data() {
    var checkAge = (rule, value, callback) => {
      if (value - 0) {
        callback();
      } else if (value == "0") {
        return callback(new Error("年龄必须大于0"));
      } else {
        return callback(new Error("年龄只能为数字"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      pageNo: 1,
      pageSize: 2,
      dialogVisible: false,
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  created() {
    this.getData();
  },

  computed: {
    ...mapGetters(
      //带有命名空间的写法
      "list",
      {
        lists: "list",
        total: "total"
      }
    )
    // ...mapGetters(["name"])
  },

  mounted() {
    console.log("list----", this.total);
  },

  methods: {
    //在组件中分发 Action
    // ...mapActions([
    //   "getList" //将this.login映射为 this.$store.dispatch('login')，触发store中actions-login方法
    // ]),
    ...mapActions(
      //带有命名空间的写法、namespace:true
      "list",
      {
        getList: "getList"
      }
    ),
    // 登录操作
    getData() {
      this.getList({ pageNo: this.pageNo, pageSize: this.pageSize });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getPageNo(pageNo) {
      this.pageNo = pageNo;
      this.getData();
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.getData();
    },
    deleteRow(index, rows) {
        console.log(index);
        // rows.splice(index, 1);
    }
  }
};
</script>
