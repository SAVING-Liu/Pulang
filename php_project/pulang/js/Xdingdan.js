var React = require('react')
var Xdingdan = React.createClass({
	render: function() {
		return(
			<div className="message">
			<div className="message-top">
				<h1>在线订单</h1>
				<em></em>
			</div>
			<div className="xkong"></div>
		
					<form className="form-horizontal">
						<h5 className="biaoti3">您的联系方式</h5>
						<div className="form-group">
							<label for="exampleInputName2" className="col-md-2 control-label">单位名称：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="exampleInputName2" />
							</div>
							<span className="span1">*</span>
						</div>
						<div className="form-group">
							<label for="peo" className="col-md-2 control-label">联系人：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="peo" />
							</div>
							<span className="span1">*</span>
						</div>
						<div className="form-group">
							<label for="peo1" className="col-md-2 control-label">联系地址：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="peo1"/>
							</div>
							<span className="span1">*</span>
						</div>
						<div className="form-group">
							<label for="peo2" className="col-md-2 control-label">传真：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="peo2"/>
							</div>
						</div>
						<div className="form-group">
							<label for="peo3" className="col-md-2 control-label">联系电话：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="peo3" />
							</div>
							<span className="span1">*</span>
						</div>
						<div className="form-group">
							<label for="inputEmail3" className="col-md-2 control-label">Email：</label>
							<div className="col-md-4">
								<input type="email" className="form-control input1" id="inputEmail3" placeholder="Email" />
							</div>
							<span className="span1">*</span>
						</div>
						<div className="form-group">
							<label for="peo4" className="col-md-2 control-label">网址：</label>
							<div className="col-md-4">
								<input type="url" className="form-control input1" id="peo4" />
							</div>
							<span className="span1">*</span>
						</div>
						<h5 className="biaoti3">您的项目信息：</h5>
						<div className="form-group">
							<label for="inputqq3" className="col-md-2 control-label">展会名称或展会项目：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="inputqq3" />
							</div>
						</div>
						<div className="form-group">
							<label for="inputphone" className="col-md-2 control-label">展会名称或项目实施地点：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="inputphone" />
							</div>
						</div>
						<div className="form-group">
							<label for="inputphone1" className="col-md-2 control-label">展期或项目持续时间：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="inputphone1" />
							</div>
						</div>
						<div className="form-group">
							<label for="inputphone2" className="col-md-2 control-label">参展面积或实施面积：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="inputphone2" />
							</div>
						</div>
						<div className="form-group">
							<label for="inputphone3" className="col-md-2 control-label">提交初期方案日期：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="inputphone3" />
							</div>
						</div>
						<div className="form-group">
							<label for="inputphone5" className="col-md-2 control-label">提交最终方案日期：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="inputphone5" />
							</div>
						</div>
						<div className="form-group">
							<label for="inputphone6" className="col-md-2 control-label">主要展示产品：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="inputphone6" />
							</div>
						</div>
						
						<div className="form-group">
							<div className="col-md-offset-1 col-md-6">
								<button type="submit" className="btn btn-default btn2  col-sm-offset-1">提交</button>
							</div>
						</div>
						<div className="con-right">
						<img src="img/pic_075.jpg" alt="" />
						<div className="cont1">
							<h4>普朗展览(美国)公司</h4>
							<p>电 话: 0086-21-59275993</p>
							<p>免费电话: 400-034-5963</p>
							<p>邮 箱: sales@messeperlon.com</p>
						</div>
					</div>
					</form>
					
		</div>
		)
	}
})
module.exports = Xdingdan