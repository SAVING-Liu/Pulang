module.exports={
	entry:'./js/entry4.js',/**入口文件**/
	output:{/**输出目录**/
		path:'js',/**输出路径**/
		filename:'output4.js'/**输出文件名称**/
	},
	module:{
		loaders:[
			{ 
			    test: /\.js$/, /**通过入口处理匹配js文件**/
			    loader: "jsx-loader", /**使用哪个加载器 css－loader,coffee-loader,babel-loader**/
			}
		]
	}/*, 
	watch:true,*/
}
/****

1.通过入口 寻找入口里面调用的组件 文件  自动处理有依赖

2.代码整合 之所以实现a.js调用b.JS 整合都整合在了一个大文件中


***/