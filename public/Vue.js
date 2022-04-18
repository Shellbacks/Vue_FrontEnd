Vue.component('model', {
  props: ['list', 'isactive'],
  template: `<div class="overlay" v-show="isactive">
                  <div class="con">
                  <h2 class="title">新增 | 修改</h2>
                  <div class="content">
                  <table>
                      <tr>
                          <td>aid</td>
                          <td><input type="text" v-model="modifylist.aid"></td>
                      </tr>
                      <tr>
                      <td>aname</td>
                      <td><input type="text" v-model="modifylist.aname"></td>
                      </tr>
                      <tr>
                      <td>password</td>
                      <td><input type="text" v-model="modifylist.password"></td>
                      </tr>
                      <tr>
                      <td>addtime</td>
                      <td><input type="text" v-model="modifylist.addtime"></td>
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

    baseurl: 'http://127.0.0.1:8000',

    // ------------------------------------------------------
    // Admin
    Admin_isActive: false,
    Admin_isActive2: false,
    Admin_selected: -1,
    Admin_selectedlist: {},
    Admin_slist: [],
    Admin_searchlist: [],
    Admin_list: [
      {
        aid: '刘柳',
        aname: '123@qq.com',
        password: '男',
        addtime: '北京市',
      },
      {
        aid: 'Li',
        aname: '1232132131@qq.com',
        password: '男',
        addtime: '北京市',
      },
      {
        aid: 'LLL',
        aname: '13213123@qq.com',
        password: '男',
        addtime: '北京市',
      },
      {
        aid: 'oooo',
        aname: '123123123@qq.com',
        password: '男',
        addtime: '北京市',
      },
      {
        aid: '213123',
        aname: '123123123@qq.com',
        password: '男',
        addtime: '北京市',
      },
      {
        aid: 'nnnnnnn',
        aname: '123123123@qq.com',
        password: '男',
        addtime: '北京市',
      }
    ],
    // ------------------------------------------------------
    // Customer
    Customer_isActive: false,
    Customer_isActive2: false,
    Customer_selected: -1,
    Customer_selectedlist: {},
    Customer_slist: [],
    Customer_searchlist: [],
    Customer_list: [],
    // ------------------------------------------------------
    // Goods
    Goods_isActive: false,
    Goods_isActive2: false,
    Goods_selected: -1,
    Goods_selectedlist: {},
    Goods_slist: [],
    Goods_searchlist: [],
    Goods_list: [],
    // ------------------------------------------------------
    // Logisitcs
    Logisitcs_isActive: false,
    Logisitcs_isActive2: false,
    Logisitcs_selected: -1,
    Logisitcs_selectedlist: {},
    Logisitcs_slist: [],
    Logisitcs_searchlist: [],
    Logisitcs_list: [],
    // ------------------------------------------------------
    // Order
    Order_isActive: false,
    Order_isActive2: false,
    Order_selected: -1,
    Order_selectedlist: {},
    Order_slist: [],
    Order_searchlist: [],
    Order_list: [],
    // ------------------------------------------------------
    // Shopuser
    Shopuser_isActive: false,
    Shopuser_isActive2: false,
    Shopuser_selected: -1,
    Shopuser_selectedlist: {},
    Shopuser_slist: [],
    Shopuser_searchlist: [],
    Shopuser_list: [],
    // ------------------------------------------------------
    // Shop
    Shop_isActive: false,
    Shop_isActive2: false,
    Shop_selected: -1,
    Shop_selectedlist: {},
    Shop_slist: [],
    Shop_searchlist: [],
    Shop_list: [],
  },

  created: function () {
    this.loadData();  //调用加载数据函数
  },

  methods: {
    // 表格加载函数
    loadData: function () {
      // var that = this;
      // axios.get(this.baseurl + "/api/**************/").then(function (res) {   // Admin表
      //   // that.Admin_list= response.data;
      //   that.Admin_list = res.data;
      //   that.Admin_setSlist(that.Admin_list);
      // }, function (err) {
      //   console.log(err);
      // });
      // axios.get(this.baseurl + "/api/**************/").then(function (res) {   // Customer表
      //   that.Customer_list = res.data;
      //   that.Customer_setSlist(that.Customer_list);
      // }, function (err) {
      //   console.log(err);
      // });
      // axios.get(this.baseurl + "/api/**************/").then(function (res) {   // Goods表
      //   that.Goods_list = res.data;
      //   that.Goods_setSlist(that.Goods_list);
      // }, function (err) {
      //   console.log(err);
      // });
      // axios.get(this.baseurl + "/api/**************/").then(function (res) {   // Logisitcs表
      //   that.Logisitcs_list = res.data;
      //   that.Logisitcs_setSlist(that.Logisitcs_list);
      // }, function (err) {
      //   console.log(err);
      // });
      // axios.get(this.baseurl + "/api/**************/").then(function (res) {   // Order表
      //   that.Order_list = res.data;
      //   that.Order_setSlist(that.Order_list);
      // }, function (err) {
      //   console.log(err);
      // });
      // axios.get(this.baseurl + "/api/**************/").then(function (res) {   // Shopuser表
      //   that.Shopuser_list = res.data;
      //   that.Shopuser_setSlist(that.Shopuser_list);
      // }, function (err) {
      //   console.log(err);
      // });
      // axios.get(this.baseurl + "/api/**************/").then(function (res) {   // Shop表
      //   that.Shop_list = res.data;
      //   that.Shop_setSlist(that.Shop_list);
      // }, function (err) {
      //   console.log(err);
      // });


      this.Admin_setSlist(this.Admin_list) //用作自己设定数据的测试，到时候接后端要删掉

    },

    // Admin function ---------------------------------------------------
    // 修改数据
    Admin_showOverlay(index) {
      this.Admin_selected = index;
      this.Admin_selectedlist = this.Admin_list[index];
      this.Admin_changeOverlay();
    },
    // 点击修改的保存按钮
    Admin_modify(arr) {
      var that = this;
      if (this.Admin_selected > -1) {
        Vue.set(this.Admin_list, this.Admin_selected, arr);
        this.Admin_selected = -1;
      } else {
        this.Admin_list.push(arr);  //新增的数据存储在Admin_list里面
      };
      console.log("Admin_modify:")
      console.log(arr)
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Admin_setSlist(this.Admin_list);
      this.Admin_changeOverlay();
    },
    // 点击新增的保存按钮
    Admin_modify2(arr) {
      var that = this;
      if (this.Admin_selected > -1) {
        Vue.set(this.Admin_list, this.Admin_selected, arr);
        this.Admin_selected = -1;
      } else {
        this.Admin_list.push(arr);  //新增的数据存储在Admin_list里面
        // this.Admin_add_list.push(arr);
      };
      console.log("Admin_modify:")
      console.log(arr)
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Admin_setSlist(this.Admin_list);
      this.Admin_changeOverlay2();
    },
    // 增加函数
    Admin_add: function () {
      this.Admin_selectedlist = {
        aid: '',
        aname: '',
        password: '',
        addtime: '',
      };
      this.Admin_changeOverlay2();
    },
    // 删除函数
    Admin_del(index) {
      var that = this;
      this.Admin_list.splice(index, 1);
      this.Admin_setSlist(this.Admin_list);
      console.log("Admin_del:")
      console.log(this.Admin_list.splice(index, 1))
      // axios.post(this.baseurl + "/api/**************/", this.Admin_list.splice(index, 1)).then(function (res) {
      //   console.log(res);
      //   that.loadData();
      // });
    },
    Admin_changeOverlay() {
      // this.Admin_selected = -1;
      this.Admin_isActive = !this.Admin_isActive;
    },
    Admin_changeOverlay2() {
      // this.Admin_selected = -1;
      this.Admin_isActive2 = !this.Admin_isActive2;
    },
    // 获取需要渲染到页面中的数据
    Admin_setSlist(arr) {
      this.Admin_slist = JSON.parse(JSON.stringify(arr));
    },
    // 搜索
    Admin_search(e) {
      var v = e.target.value,
        self = this;
      self.Admin_searchlist = [];
      if (v) {
        var ss = [];
        // 过滤需要的数据
        this.Admin_list.forEach(function (item) {
          if (item.aid.indexOf(v) > -1) {
            if (self.Admin_searchlist.indexOf(item.aid) == -1) {
              self.Admin_searchlist.push(item.aid);
            }
            ss.push(item);
          } else if (item.aname.indexOf(v) > -1) {
            if (self.Admin_searchlist.indexOf(item.aname) == -1) {
              self.Admin_searchlist.push(item.aname);
            }
            ss.push(item);
          }
        });
        this.Admin_setSlist(ss); // 将过滤后的数据给了slist
      } else {
        // 没有搜索内容，则展示全部数据
        this.Admin_setSlist(this.Admin_list);
      }
    },
    //-----------------------------------------------------------------------------------
    // Customer function ---------------------------------------------------
    // 修改数据
    Customer_showOverlay(index) {
      this.Customer_selected = index;
      this.Customer_selectedlist = this.Customer_list[index];
      this.Customer_changeOverlay();
    },
    // 点击保存按钮
    Customer_modify(arr) {
      var that = this;
      if (this.Customer_selected > -1) {
        Vue.set(this.Customer_list, this.Customer_selected, arr);
        this.Customer_selected = -1;
      } else {
        this.Customer_list.push(arr);  //新增的数据存储在Customer_list里面
      };
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Customer_setSlist(this.Customer_list);
      this.Customer_changeOverlay();
    },
    Customer_modify2(arr) {
      var that = this;
      if (this.Customer_selected > -1) {
        Vue.set(this.Customer_list, this.Customer_selected, arr);
        this.Customer_selected = -1;
      } else {
        this.Customer_list.push(arr);  //新增的数据存储在Customer_list里面
      };
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Customer_setSlist(this.Customer_list);
      this.Customer_changeOverlay2();
    },
    // 增加函数
    Customer_add: function () {
      this.Customer_selectedlist = {
        cid: '',
        cname: '',
        password: '',
        cnumber: '',
      };
      this.Customer_changeOverlay2();
    },
    // 删除函数
    Customer_del(index) {
      var that = this;
      this.Customer_list.splice(index, 1);
      this.Customer_setSlist(this.Customer_list);
      // axios.post(this.baseurl + "/api/**************/", this.Customer_list.splice(index, 1)).then(function (res) {
      //   console.log(res);
      //   that.loadData();
      // });
    },
    Customer_changeOverlay() {
      // this.Customer_selected = -1;
      this.Customer_isActive = !this.Customer_isActive;
    },
    Customer_changeOverlay2() {
      // this.Customer_selected = -1;
      this.Customer_isActive2 = !this.Customer_isActive2;
    },
    // 获取需要渲染到页面中的数据
    Customer_setSlist(arr) {
      this.Customer_slist = JSON.parse(JSON.stringify(arr));
    },
    // 搜索
    Customer_search(e) {
      var v = e.target.value,
        self = this;
      self.Customer_searchlist = [];
      if (v) {
        var ss = [];
        // 过滤需要的数据
        this.Customer_list.forEach(function (item) {
          if (item.cid.indexOf(v) > -1) {
            if (self.Customer_searchlist.indexOf(item.cid) == -1) {
              self.Customer_searchlist.push(item.cid);
            }
            ss.push(item);
          } else if (item.cname.indexOf(v) > -1) {
            if (self.Customer_searchlist.indexOf(item.cname) == -1) {
              self.Customer_searchlist.push(item.cname);
            }
            ss.push(item);
          }
        });
        this.Customer_setSlist(ss); // 将过滤后的数据给了slist
      } else {
        // 没有搜索内容，则展示全部数据
        this.Customer_setSlist(this.Customer_list);
      }
    },
    //-----------------------------------------------------------------------------------
    Goods_showOverlay(index) {
      this.Goods_selected = index;
      this.Goods_selectedlist = this.Goods_list[index];
      this.Goods_changeOverlay();
    },
    // 点击保存按钮
    Goods_modify(arr) {
      var that = this;
      if (this.Goods_selected > -1) {
        Vue.set(this.Goods_list, this.Goods_selected, arr);
        this.Goods_selected = -1;
      } else {
        this.Goods_list.push(arr);  //新增的数据存储在Goods_list里面
      };
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Goods_setSlist(this.Goods_list);
      this.Goods_changeOverlay();
    },
    Goods_modify2(arr) {
      var that = this;
      if (this.Goods_selected > -1) {
        Vue.set(this.Goods_list, this.Goods_selected, arr);
        this.Goods_selected = -1;
      } else {
        this.Goods_list.push(arr);  //新增的数据存储在Goods_list里面
      };
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Goods_setSlist(this.Goods_list);
      this.Goods_changeOverlay2();
    },
    // 增加函数
    Goods_add: function () {
      this.Goods_selectedlist = {
        gid: '',
        sid: '',
        gname: '',
        category: '',
        inventory: '',
        price: '',
      };
      this.Goods_changeOverlay2();
    },
    // 删除函数
    Goods_del(index) {
      var that = this;
      this.Goods_list.splice(index, 1);
      this.Goods_setSlist(this.Goods_list);
      // axios.post(this.baseurl + "/api/**************/", this.Goods_list.splice(index, 1)).then(function (res) {
      //   console.log(res);
      //   that.loadData();
      // });
    },
    Goods_changeOverlay() {
      // this.Goods_selected = -1;
      this.Goods_isActive = !this.Goods_isActive;
    },
    Goods_changeOverlay2() {
      // this.Goods_selected = -1;
      this.Goods_isActive2 = !this.Goods_isActive2;
    },
    // 获取需要渲染到页面中的数据
    Goods_setSlist(arr) {
      this.Goods_slist = JSON.parse(JSON.stringify(arr));
    },
    // 搜索
    Goods_search(e) {
      var v = e.target.value,
        self = this;
      self.Goods_searchlist = [];
      if (v) {
        var ss = [];
        // 过滤需要的数据
        this.Goods_list.forEach(function (item) {
          if (item.gid.indexOf(v) > -1) {
            if (self.Goods_searchlist.indexOf(item.gid) == -1) {
              self.Goods_searchlist.push(item.gid);
            }
            ss.push(item);
          } else if (item.sid.indexOf(v) > -1) {
            if (self.Goods_searchlist.indexOf(item.sid) == -1) {
              self.Goods_searchlist.push(item.sid);
            }
            ss.push(item);
          }
          else if (item.gname.indexOf(v) > -1) {
            if (self.Goods_searchlist.indexOf(item.gname) == -1) {
              self.Goods_searchlist.push(item.gname);
            }
            ss.push(item);
          }
        });
        this.Goods_setSlist(ss); // 将过滤后的数据给了slist
      } else {
        // 没有搜索内容，则展示全部数据
        this.Goods_setSlist(this.Goods_list);
      }
    },
    //-----------------------------------------------------------------------------------
    // Logisitcs function ---------------------------------------------------
    // 修改数据
    Logisitcs_showOverlay(index) {
      this.Logisitcs_selected = index;
      this.Logisitcs_selectedlist = this.Logisitcs_list[index];
      this.Logisitcs_changeOverlay();
    },
    // 点击保存按钮
    Logisitcs_modify(arr) {
      var that = this;
      if (this.Logisitcs_selected > -1) {
        Vue.set(this.Logisitcs_list, this.Logisitcs_selected, arr);
        this.Logisitcs_selected = -1;
      } else {
        this.Logisitcs_list.push(arr);  //新增的数据存储在Logisitcs_list里面
      };
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Logisitcs_setSlist(this.Logisitcs_list);
      this.Logisitcs_changeOverlay();
    },
    Logisitcs_modify2(arr) {
      var that = this;
      if (this.Logisitcs_selected > -1) {
        Vue.set(this.Logisitcs_list, this.Logisitcs_selected, arr);
        this.Logisitcs_selected = -1;
      } else {
        this.Logisitcs_list.push(arr);  //新增的数据存储在Logisitcs_list里面
      };
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Logisitcs_setSlist(this.Logisitcs_list);
      this.Logisitcs_changeOverlay2();
    },
    // 增加函数
    Logisitcs_add: function () {
      this.Logisitcs_selectedlist = {
        lid: '',
        cid: '',
        sid: '',
        number: '',
        startad: '',
        endad: '',
        state: '',
        addtime: '',
      };
      this.Logisitcs_changeOverlay2();
    },
    // 删除函数
    Logisitcs_del(index) {
      var that = this;
      this.Logisitcs_list.splice(index, 1);
      this.Logisitcs_setSlist(this.Logisitcs_list);
      // axios.post(this.baseurl + "/api/**************/", index).then(function (res) {
      //   console.log(res);
      //   that.loadData();
      // });
    },
    Logisitcs_changeOverlay() {
      // this.Logisitcs_selected = -1;
      this.Logisitcs_isActive = !this.Logisitcs_isActive;
    },
    Logisitcs_changeOverlay2() {
      // this.Logisitcs_selected = -1;
      this.Logisitcs_isActive2 = !this.Logisitcs_isActive2;
    },
    // 获取需要渲染到页面中的数据
    Logisitcs_setSlist(arr) {
      this.Logisitcs_slist = JSON.parse(JSON.stringify(arr));
    },
    // 搜索
    Logisitcs_search(e) {
      var v = e.target.value,
        self = this;
      self.Logisitcs_searchlist = [];
      if (v) {
        var ss = [];
        // 过滤需要的数据
        this.Logisitcs_list.forEach(function (item) {
          if (item.lid.indexOf(v) > -1) {
            if (self.Logisitcs_searchlist.indexOf(item.lid) == -1) {
              self.Logisitcs_searchlist.push(item.lid);
            }
            ss.push(item);
          } else if (item.cid.indexOf(v) > -1) {
            if (self.Logisitcs_searchlist.indexOf(item.cid) == -1) {
              self.Logisitcs_searchlist.push(item.cid);
            }
            ss.push(item);
          } else if (item.sid.indexOf(v) > -1) {
            if (self.Logisitcs_searchlist.indexOf(item.sid) == -1) {
              self.Logisitcs_searchlist.push(item.sid);
            }
            ss.push(item);
          }
        });
        this.Logisitcs_setSlist(ss); // 将过滤后的数据给了slist
      } else {
        // 没有搜索内容，则展示全部数据
        this.Logisitcs_setSlist(this.Logisitcs_list);
      }
    },

    // Order function ---------------------------------------------------
    // 修改数据
    Order_showOverlay(index) {
      this.Order_selected = index;
      this.Order_selectedlist = this.Order_list[index];
      this.Order_changeOverlay();
    },
    // 点击保存按钮
    Order_modify(arr) {
      var that = this;
      if (this.Order_selected > -1) {
        Vue.set(this.Order_list, this.Order_selected, arr);
        this.Order_selected = -1;
      } else {
        this.Order_list.push(arr);  //新增的数据存储在Order_list里面
      };
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Order_setSlist(this.Order_list);
      this.Order_changeOverlay();
    },
    Order_modify2(arr) {
      var that = this;
      if (this.Order_selected > -1) {
        Vue.set(this.Order_list, this.Order_selected, arr);
        this.Order_selected = -1;
      } else {
        this.Order_list.push(arr);  //新增的数据存储在Order_list里面
      };
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Order_setSlist(this.Order_list);
      this.Order_changeOverlay2();
    },
    // 增加函数
    Order_add: function () {
      this.Order_selectedlist = {
        oid: '',
        sid: '',
        cid: '',
        gid: '',
        lid: '',
        addtime: '',
        number: '',
        price: '',
        state: '',
      };
      this.Order_changeOverlay2();
    },
    // 删除函数
    Order_del(index) {
      var that = this;
      this.Order_list.splice(index, 1);
      this.Order_setSlist(this.Order_list);
      // axios.post(this.baseurl + "/api/**************/", index).then(function (res) {
      //   console.log(res);
      //   that.loadData();
      // });
    },
    Order_changeOverlay() {
      // this.Order_selected = -1;
      this.Order_isActive = !this.Order_isActive;
    },
    Order_changeOverlay2() {
      // this.Order_selected = -1;
      this.Order_isActive2 = !this.Order_isActive2;
    },
    // 获取需要渲染到页面中的数据
    Order_setSlist(arr) {
      this.Order_slist = JSON.parse(JSON.stringify(arr));
    },
    // 搜索
    Order_search(e) {
      var v = e.target.value,
        self = this;
      self.Order_searchlist = [];
      if (v) {
        var ss = [];
        // 过滤需要的数据
        this.Order_list.forEach(function (item) {
          if (item.oid.indexOf(v) > -1) {
            if (self.Order_searchlist.indexOf(item.oid) == -1) {
              self.Order_searchlist.push(item.oid);
            }
            ss.push(item);
          } else if (item.sid.indexOf(v) > -1) {
            if (self.Order_searchlist.indexOf(item.sid) == -1) {
              self.Order_searchlist.push(item.sid);
            }
            ss.push(item);
          } else if (item.cid.indexOf(v) > -1) {
            if (self.Order_searchlist.indexOf(item.cid) == -1) {
              self.Order_searchlist.push(item.cid);
            }
            ss.push(item);
          } else if (item.gid.indexOf(v) > -1) {
            if (self.Order_searchlist.indexOf(item.gid) == -1) {
              self.Order_searchlist.push(item.gid);
            }
            ss.push(item);
          } else if (item.lid.indexOf(v) > -1) {
            if (self.Order_searchlist.indexOf(item.lid) == -1) {
              self.Order_searchlist.push(item.lid);
            }
            ss.push(item);
          }
        });
        this.Order_setSlist(ss); // 将过滤后的数据给了slist
      } else {
        // 没有搜索内容，则展示全部数据
        this.Order_setSlist(this.Order_list);
      }
    },
    // Shopuser function ---------------------------------------------------
    // 修改数据
    Shopuser_showOverlay(index) {
      this.Shopuser_selected = index;
      this.Shopuser_selectedlist = this.Shopuser_list[index];
      this.Shopuser_changeOverlay();
    },
    // 点击保存按钮
    Shopuser_modify(arr) {
      var that = this;
      if (this.Shopuser_selected > -1) {
        Vue.set(this.Shopuser_list, this.Shopuser_selected, arr);
        this.Shopuser_selected = -1;
      } else {
        this.Shopuser_list.push(arr);  //新增的数据存储在Shopuser_list里面
      };
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Shopuser_setSlist(this.Shopuser_list);
      this.Shopuser_changeOverlay();
    },
    Shopuser_modify2(arr) {
      var that = this;
      if (this.Shopuser_selected > -1) {
        Vue.set(this.Shopuser_list, this.Shopuser_selected, arr);
        this.Shopuser_selected = -1;
      } else {
        this.Shopuser_list.push(arr);  //新增的数据存储在Shopuser_list里面
      };
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Shopuser_setSlist(this.Shopuser_list);
      this.Shopuser_changeOverlay2();
    },

    // 增加函数
    Shopuser_add: function () {
      this.Shopuser_selectedlist = {
        suid: '',
        sid: '',
        suname: '',
        password: '',
        number: '',
      };
      this.Shopuser_changeOverlay2();
    },
    // 删除函数
    Shopuser_del(index) {
      var that = this;
      this.Shopuser_list.splice(index, 1);
      this.Shopuser_setSlist(this.Shopuser_list);
      // axios.post(this.baseurl + "/api/**************/", index).then(function (res) {
      //   console.log(res);
      //   that.loadData();
      // });
    },
    Shopuser_changeOverlay() {
      // this.Shopuser_selected = -1;
      this.Shopuser_isActive = !this.Shopuser_isActive;
    },
    Shopuser_changeOverlay2() {
      // this.Shopuser_selected = -1;
      this.Shopuser_isActive2 = !this.Shopuser_isActive2;
    },
    // 获取需要渲染到页面中的数据
    Shopuser_setSlist(arr) {
      this.Shopuser_slist = JSON.parse(JSON.stringify(arr));
    },
    // 搜索
    Shopuser_search(e) {
      var v = e.target.value,
        self = this;
      self.Shopuser_searchlist = [];
      if (v) {
        var ss = [];
        // 过滤需要的数据
        this.Shopuser_list.forEach(function (item) {
          if (item.suid.indexOf(v) > -1) {
            if (self.Shopuser_searchlist.indexOf(item.suid) == -1) {
              self.Shopuser_searchlist.push(item.suid);
            }
            ss.push(item);
          } else if (item.sid.indexOf(v) > -1) {
            if (self.Shopuser_searchlist.indexOf(item.sid) == -1) {
              self.Shopuser_searchlist.push(item.sid);
            }
            ss.push(item);
          } else if (item.suname.indexOf(v) > -1) {
            if (self.Shopuser_searchlist.indexOf(item.suname) == -1) {
              self.Shopuser_searchlist.push(item.suname);
            }
            ss.push(item);
          }
        });
        this.Shopuser_setSlist(ss); // 将过滤后的数据给了slist
      } else {
        // 没有搜索内容，则展示全部数据
        this.Shopuser_setSlist(this.Shopuser_list);
      }
    },
    // Shop function ---------------------------------------------------
    // 修改数据
    Shop_showOverlay(index) {
      this.Shop_selected = index;
      this.Shop_selectedlist = this.Shop_list[index];
      this.Shop_changeOverlay();
    },
    // 点击保存按钮
    Shop_modify(arr) {
      var that = this;
      if (this.Shop_selected > -1) {
        Vue.set(this.Shop_list, this.Shop_selected, arr);
        this.Shop_selected = -1;
      } else {
        this.Shop_list.push(arr);  //新增的数据存储在Shop_list里面
      };
      // axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
      //   console.log(res);
      //   that.loadData();
      // });
      this.Shop_setSlist(this.Shop_list);
      this.Shop_changeOverlay();
    },
    // 增加函数
    Shop_add: function () {
      this.Shop_selectedlist = {
        sid: '',
        sname: '',
        snum: '',
        category: '',
      };
      this.Shop_isActive = true;
    },
    // 删除函数
    Shop_del(index) {
      var that = this;
      this.Shop_list.splice(index, 1);
      this.Shop_setSlist(this.Shop_list);
      // axios.post(this.baseurl + "/api/**************/", index).then(function (res) {
      //   console.log(res);
      //   that.loadData();
      // });
    },
    Shop_changeOverlay() {
      // this.Shop_selected = -1;
      this.Shop_isActive = !this.Shop_isActive;
    },
    // 获取需要渲染到页面中的数据
    Shop_setSlist(arr) {
      this.Shop_slist = JSON.parse(JSON.stringify(arr));
    },
    // 搜索
    Shop_search(e) {
      var v = e.target.value,
        self = this;
      self.Shop_searchlist = [];
      if (v) {
        var ss = [];
        // 过滤需要的数据
        this.Shop_list.forEach(function (item) {
          if (item.sid.indexOf(v) > -1) {
            if (self.Shop_searchlist.indexOf(item.sid) == -1) {
              self.Shop_searchlist.push(item.sid);
            }
            ss.push(item);
          } else if (item.sname.indexOf(v) > -1) {
            if (self.Shop_searchlist.indexOf(item.sname) == -1) {
              self.Shop_searchlist.push(item.sname);
            }
            ss.push(item);
          } else if (item.category.indexOf(v) > -1) {
            if (self.Shop_searchlist.indexOf(item.category) == -1) {
              self.Shop_searchlist.push(item.category);
            }
            ss.push(item);
          }
        });
        this.Shop_setSlist(ss); // 将过滤后的数据给了slist
      } else {
        // 没有搜索内容，则展示全部数据
        this.Shop_setSlist(this.Shop_list);
      }
    },

  },

  watch: {}

})
