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
      searchlist: [],
      Admin_list: [],  //Adimin的全部数据
      // ------------------------------------------------------


    }
  },

  methods: {

    // 点击保存按钮
    Admin_modify: function (arr) {
      if (this. Admin_selected> -1) {
        Vue.set(this.Admin_list, this.Admin_selected, arr);
        this.Admin_selected = -1;
      } else {
        this.Admin_list.push(arr);  //新增的数据存储在Admin_list里面
      }
      this.setSlist(this.Admin_list);
      this.changeOverlay();
    },
    Admin_add: function () {
      this.Adimin_selectedlist = {
        aid: '',
        aname: '',
        password: '',
        addtime: '',
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

  },

  mounted: function () {

    // 首先把后端第一个表的全部数据传进列表里
    axios.get(this.baseurl + "/api/**************/").then((res) => {
      this.Admin_list = res.data;
    })

  },

  watch: {}
}


)
