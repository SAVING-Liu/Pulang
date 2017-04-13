var React = require('react')
var Xmessage = React.createClass({
	render: function() {
		return(
			<div className="message">
			<div className="message-top">
				<h1>留言反馈</h1>
				<em></em>
			</div>
			<div className="xkong"></div>
		
					<form className="form-horizontal">
						<div className="form-group">
							<label for="exampleInputName2" className="col-md-2 control-label">您的姓名：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="exampleInputName2" placeholder="Jane Doe" />
							</div>
							<span className="span1">*</span>
						</div>

						<div className="form-group">
							<label for="inputEmail3" className="col-md-2 control-label">电子邮箱：</label>
							<div className="col-md-4">
								<input type="email" className="form-control input1" id="inputEmail3" placeholder="Email" />
							</div>
							<span className="span1">*</span>
						</div>
						<div className="form-group">
							<label for="inputqq3" className="col-md-2 control-label">联系QQ：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="inputqq3" />
							</div>
							<span className="span1">*</span>
						</div>
						<div className="form-group">
							<label for="inputphone" className="col-md-2 control-label">联系电话：</label>
							<div className="col-md-4">
								<input type="text" className="form-control input1" id="inputphone" />
							</div>
							<span className="span1">*</span>
						</div>
						<div className="form-group">
							<label for="inputmessage" className="col-md-2 control-label">请您留言：</label>
							<div className="col-md-5">
								<textarea id="inputmessage" className="form-control textarea1" rows="3"></textarea>
							</div>
						</div>
						<div className="form-group">
							<div className="col-md-offset-2 col-md-6">
								<button type="reset" className="btn btn-default">重置</button>
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
module.exports = Xmessage