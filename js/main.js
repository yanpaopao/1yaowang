//设置配置文件(配置依赖模块的路径)
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"x" : "ico_x",
		
	}
})
//执行代码 所依赖的文件
require(["jquery","cookie","x"],function($,cookie,x){
	//代码

})
