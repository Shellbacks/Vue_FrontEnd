# Vue_FrontEnd
index.html 和 dem.js 是主文件
index-LYH.html 和 Vue.js 是测试文件
运行时请运行index.html

JS函数说明：
loadData ： 接收后台回传的全部表格数据

Admin_showOverlay ：修改功能函数，弹出修改框

Admin_modify：修改框的保存按钮函数，点击后传数据给后端API

Admin_add：增加功能函数，弹出增加框

Admin_modify2：增加框的保存按钮函数，点击后传数据给后端API

Admin_del：删除功能函数，点击后传删除的数据给后端API

Admin_search：搜索功能函数，此处没有设定回传数据给后端API，通过函数能实现关键字搜索（关键字选择可以修改，暂时设定这几个）


后续多个表的函数都跟Admin的函数功能一致。现在多个回传的功能都是注释掉的（不注释会影响前端测试，后面后端写好API可以把名字替换上去再用），
回传里面有一句 that.loadData(); 这句话大概率是不需要的，后面调试的时候可以删掉。