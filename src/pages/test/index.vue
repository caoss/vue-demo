  <template>
  <div>
    <div style="padding:20px 0">
      <el-button type="primary" icon="el-icon-plus" @click="dialogVisible=true;isEdit=false" size="mini">添加</el-button>
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
          <el-button
            @click.native.prevent="editRow(scope.row)"
            type="text"
            size="small"
          >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="text-align:center;margin-top:20px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="getPageNo"
        :page-sizes="[10,20,40,50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>

    <!-- 添加 -->
    <el-dialog :before-close="handleClose" :title="isEdit?'编辑':'增加'"  :visible.sync="dialogVisible" width="30%">
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="序号" prop="sortNo">
          <el-input v-model.number="ruleForm2.sortNo"></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="paramName">
          <el-input v-model="ruleForm2.paramName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="编码" prop="paramCode">
          <el-input v-model="ruleForm2.paramCode" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
        <el-button @click="_cancle()">取 消</el-button>

        <el-button  v-if="!isEdit" type="primary" @click="submitForm('ruleForm2');">确 定</el-button>
        <el-button  v-else type="primary" @click="submitEidtForm('ruleForm2');">修 改</el-button>

      </span>
    </el-dialog>
  </div>
</template>

  <script>
import { mapActions, mapGetters } from "vuex";
import { setTimeout } from 'timers';
export default {
  name: "test",
  data() {
    var checkSortNo = (rule, value, callback) => {
      if (value - 0) {
        callback();
      } else if (value == "0") {
        return callback(new Error("序号必须大于0"));
      } else {
        return callback(new Error("序号只能为数字"));
      }
    };
    return {
      pageNo: 1,
      pageSize: 10,
      dialogVisible: false,
      isEdit:false,
      targetId:'',
      ruleForm2: {
        paramCode: "",
        paramName: "",
        sortNo: ""
      },
      rules2: {
        sortNo: [{ validator: checkSortNo, trigger: "blur" }],
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
        getList: "getList",
        addOneList:'addOneList',
        editOneList:'editOneList'
      }
    ),
    // 登录操作
    getData() {
      this.getList({ pageNo: this.pageNo, pageSize: this.pageSize });
    },
    handleClose(done){
       this.resetForm('ruleForm2');
        done();
    },
    _cancle(){
        this.resetForm('ruleForm2');
        this.dialogVisible = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            console.log(this[formName]);
            this.addOneList( this[formName] ).then(res=>{
                this.$message(res);
                this.dialogVisible = false;
                this.pageNo = 1;
                this.getData();
                this.$refs['ruleForm2'].resetFields();
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitEidtForm(formName){
        this.$refs[formName].validate(valid => {
            if (valid) {
                console.log('-----------------------',this[formName]);
                this[formName].id = this.targetId;
                this.editOneList( this[formName]  ).then(res=>{
                    this.$message(res);
                    this.dialogVisible = false;
                    this.$refs['ruleForm2'].resetFields();
                });
            } else {
            console.log("error submit!!");
            return false;
            }
        });
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
        // this.resetForm();
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
    },
    resetForm(){
        this.ruleForm2.paramCode = '';
        this.ruleForm2.paramName = '';
        this.ruleForm2.sortNo = '';
    },
    editRow(row){
        this.dialogVisible = true;
        this.ruleForm2.paramCode = row.pcode;
        this.ruleForm2.paramName = row.pname;
        this.ruleForm2.sortNo = row.sortNo;
        this.targetId = row.id;
        this.isEdit = true;
    }
  }
};
</script>
