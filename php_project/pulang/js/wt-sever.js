var React=require('react')
var Sever=React.createClass({
	render:function(){
		
		return(
			<div id="bbs" >
			<div className="container sever-tit">
			<h2>One-stop Global Exhibition Solution</h2>
			<p>全球展台设计搭建一站式服务</p>
			
		</div>
		<div style={{width:"100%",height:"345px",background:"#f2c82c"}}>
<div className="container sever">
	
		<div className="  sever1">
			<img  className="img-dd"  src="img/pic_010.jpg" />
			<img className="img-ss" src="img/kuang6_black (1).png"/>
			<div className="sever1-2">
				<p>IBM</p>
				<p>200平方</p>
				<p>美国CES电子消费展</p>
				
			</div>
		</div>
		
		<div className="  sever1">
			<img  className="img-dd" alt="140x140" src="img/pic_011.jpg" />
			<img className="img-ss" src="img/kuang6_black (1).png"/>
			<div className="sever1-2"><p>UF-TEK</p>
				<p>100平方</p>
				<p>国际医疗展</p></div>
		</div>
		<div className="  sever1">
			<img className="img-dd" alt="140x140" src="img/pic_012.jpg" />
			<img className="img-ss" src="img/kuang6_black (1).png"/>
			<div className="sever1-2"><p>NORWICH</p>
				<p>300平方</p>
				<p>原料展</p></div>
		</div>
		<div className="  sever1">
			<img className="img-dd" alt="140x140" src="img/pic_013.jpg" />
			<img className="img-ss" src="img/kuang6_black (1).png"/>
			<div className="sever1-2"><p>中粮</p>
				<p>150平方</p>
				<p>食品配料展览会</p></div>
		</div>
		</div>
		<div className="container sever2">
			<p>美国展台设计</p>
			<p>德国展台设计</p>
			<p>欧洲展台设计</p>
			<p>中国展台设计</p>
		</div>
</div>

		</div>
		)
	}
})

module.exports=Sever;