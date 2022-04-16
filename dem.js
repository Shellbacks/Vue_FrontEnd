Vue.component('model', {
  props: ['list', 'isactive'],
  template: `<div class="overlay" v-show="isactive">
                  <div class="con">
                  <h2 class="title">新增 | 修改</h2>
                  <div class="content">
                  <table>
                      <tr>
                          <td>用户名</td>
                          <td><input type="text" v-model="modifylist.username"></td>
                      </tr>
                      <tr>
                          <td>邮箱</td>
                          <td><input type="text" v-model="modifylist.email"></td>
                      </tr>
                      <tr>
                          <td>用户名</td>
                          <td><input type="text" v-model="modifylist.username"></td>
                      </tr>
                      <tr>
                          <td>用户名</td>
                          <td><input type="text" v-model="modifylist.username"></td>
                      </tr>
                      <tr>
                          <td>用户名</td>
                          <td><input type="text" v-model="modifylist.username"></td>
                      </tr>
                  </table>
                  <p>
                  <input type="button" @click="changeActive" value="取消">
                  <input type="button" @click="modify" value="保存">
                  </p>
                  </div>
                  </div>
              </div>`,

  computed: {
    modifylist() {
      return this.list;
    }
  },
  methods: {
    changeActive() {
      this.$emit('change');
    },
    modify() {
      this.$emit('modify', this.modifylist);
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    isActive: false,
    selected: -1,
    selectedlist: {},
    slist: [],
    searchlist: [],
    items: [
      { first_name: 'Dickerson', last_name: 'Macdonald' },
      { first_name: 'Larsen', last_name: 'Shaw' },
      { first_name: 'Geneva', last_name: 'Wilson' },
      { first_name: 'Jami', last_name: 'Carney' }
    ],
    list: [{
      username: '刘柳',
      email: '123@qq.com',
      sex: '男',
      province: '北京市',
      hobby: ['篮球', '读书', '编程']
    },
    {
      username: '贝贝',
      email: 'bbbbbbb@163.com',
      sex: '女',
      province: '河北省',
      hobby: ['弹琴', '读书', '插画']
    },
    {
      username: '刘备',
      email: 'abababab@qq.com',
      sex: '女',
      province: '重庆市',
      hobby: ['篮球']
    },
    {
      username: '曹操',
      email: '123@qq.com',
      sex: '男',
      province: '北京市',
      hobby: ['篮球', '读书', '编程']
    },
    {
      username: '等等',
      email: 'bbbbbbb@163.com',
      sex: '女',
      province: '河北省',
      hobby: ['弹琴', '读书', '插画']
    },
    {
      username: '等1',
      email: 'bbbaaaaa@163.com',
      sex: '女',
      province: '河北省',
      hobby: ['弹琴', '读书', '插画']
    },
    {
      username: '等2',
      email: 'bbbbccc@163.com',
      sex: '女',
      province: '河北省',
      hobby: ['弹琴', '读书', '插画']
    },
    {
      username: '娥娥',
      email: 'abababab@qq.com',
      sex: '女',
      province: '重庆市',
      hobby: ['篮球']
    }
    ]
  },
  created() {
    this.setSlist(this.list);
  },
  methods: {
    
    // 修改数据
    showOverlay(index) {
      this.selected = index;
      this.selectedlist = this.list[index];
      this.changeOverlay();
    },
    // 点击保存按钮
    modify(arr) {
      if (this.selected > -1) {
        Vue.set(this.list, this.selected, arr);
        this.selected = -1;
      } else {
        this.list.push(arr);
      }
      this.setSlist(this.list);
      this.changeOverlay();
    },
    add: function () {
      this.selectedlist = {
        username: '',
        email: '',
        sex: '男',
        province: '北京市',
        hobby: []
      };
      this.isActive = true;
    },
    // delete list in index location
    del(index) {
      this.list.splice(index, 1);
      this.setSlist(this.list);
    },
    changeOverlay() {
      this.selected = -1;
      this.isActive = !this.isActive;
    },
    // 获取需要渲染到页面中的数据
    setSlist(arr) {
      this.slist = JSON.parse(JSON.stringify(arr));
    },
    // 搜索
    search(e) {
      var v = e.target.value,
        self = this;
      self.searchlist = [];
      if (v) {
        var ss = [];
        // 过滤需要的数据
        this.list.forEach(function (item) {
          if (item.username.indexOf(v) > -1) {
            if (self.searchlist.indexOf(item.username) == -1) {
              self.searchlist.push(item.username);
            }
            ss.push(item);
          } else if (item.email.indexOf(v) > -1) {
            if (self.searchlist.indexOf(item.email) == -1) {
              self.searchlist.push(item.email);
            }
            ss.push(item);
          }
        });
        this.setSlist(ss); // 将过滤后的数据给了slist
      } else {
        // 没有搜索内容，则展示全部数据
        this.setSlist(this.list);
      }
    }
  },
  watch: {}
})