var app = new Vue({
    el: '#app',
    data: {
      isActive: false,
      selected: -1,
      selectedlist: {},
      slist: [],
      searchlist: [],
      list: [],
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
  