var app = new Vue({
  el: '#app',
  data: function () {
    return {
      baseurl: 'http://127.0.0.1:8000',
      isActive: false,

      // ------------------------------------------------------
      Admin_selected: -1,
      Adimin_selectedlist: {},
      Admin_slist: [],
      Admin_searchlist: [],
      Admin_list: [
        {
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
      ],  //Adimin的全部数据
      // Admin_add_list: [],  //存放新增的数据
      // ------------------------------------------------------


    }
  },

  created: function () {
    this.loadData();  //调用加载数据函数
  },

  methods: {

    // ---------------------------------------------------
    //数据加载函数

    // ---------------------------------------------------

    // Admin function
    loadData: function () {
      var that = this;
      axios.get(this.baseurl + "/api/**************/").then(function (res) {   // 首先把后端第一个表的全部数据传进列表里
        // that.Admin_list= response.data;
        that.Admin_list = res.data;
        that.Admin_setSlist(that.Admin_list);
        console.log(that.Admin_list);
      }, function (err) {
        console.log(err);
      })
      this.Admin_setSlist(this.Admin_list);
      console.log(this.Admin_list);
    },
    // 修改数据
    Admin_showOverlay(index) {
      this.Admin_selected = index;
      this.Admin_selectedlist = this.Admin_list[index];
      this.Admin_changeOverlay();
    },
    // 点击保存按钮
    Admin_modify: function (arr) {
      var that = this;
      if (this.Admin_selected > -1) {
        Vue.set(this.Admin_list, this.Admin_selected, arr);
        this.Admin_selected = -1;
      } else {
        this.Admin_list.push(arr);  //新增的数据存储在Admin_list里面
        // this.Admin_add_list.push(arr);
      };
      axios.post(this.baseurl + "/api/**************/", arr).then(function (res) {        // 把新增的内容post到后台api
        console.log(res);
        that.loadData();
      });
      this.setSlist(this.Admin_list);
      this.changeOverlay();
    },
    // 增加函数
    Admin_add: function () {
      this.Adimin_selectedlist = {
        aid: '',
        aname: '',
        password: '',
        addtime: '',
      };
      this.isActive = true;
    },
    // 删除函数
    Admin_del(index) {
      var that = this;
      this.Admin_list.splice(index, 1);
      this.Admin_setSlist(this.Admin_list);
      axios.post(this.baseurl + "/api/**************/", index).then(function (res) {
        console.log(res);
        that.loadData();
      });
    },
    Admin_changeOverlay() {
      this.Admin_selected = -1;
      this.isActive = !this.isActive;
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
        this.Admin_list.forEach(function (item) {           // 过滤需要的数据,这里只对aid和aname进行搜索
          if (item.aid.indexOf(v) > -1) {
            if (self.searchlist.indexOf(item.username) == -1) {
              self.Admin_searchlist.push(item.username);
            }
            ss.push(item);
          } else if (item.aname.indexOf(v) > -1) {
            if (self.searchlist.indexOf(item.email) == -1) {
              self.Admin_searchlist.push(item.email);
            }
            ss.push(item);
          }
        });
        this.Admin_setSlist(ss); // 将过滤后的数据给了slist
        axios.post(this.baseurl + "/api/**************/", ss).then(function (res) {
          console.log(res);
          // that.loadData();
        });
      } else {
        // 没有搜索内容，则展示全部数据
        this.Admin_setSlistt(this.Admin_list);
      }
    }
    // ---------------------------------------------------








  },

})
