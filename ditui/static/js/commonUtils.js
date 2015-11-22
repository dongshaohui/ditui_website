//该处校验较为严格
function isEmpty(value) {
	if (value == undefined || value == 'undefined')
		return true;
	else if (value === null || value === 'null')
		return true;
	else if (typeof value == 'string') {
		return (value == '');
	} else if (value.length !== undefined) {
		return (value.length == 0);
	} else
		return false;
};

//红框
function regx(dom,flag){
	if(flag){
		$(dom).addClass("inperr");
	}else{
		$(dom).removeClass("inperr");
	}
}

//验证密码
function checkPassword(password){
	if(isEmpty(password)){
		return false;
	}
	
	var _val = jQuery.trim(password);
	var _pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
	if(_pwd.test(_val)){
		return true;
	}
	
	return false;
}

//验证密码
function checkPassword(password, error) {
	if (isEmpty(password)) {
		error.text("请输入密码!").show();
		return false;
	}

	var _val = jQuery.trim(password);
	var _pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
	if (_pwd.test(_val)) {
		error.hide();
		return true;
	}

	error.text("密码位8-16位数字字母组合, 请重新输入密码!").show();
	return false;
}

//验证手机号
function checkMobile(phone, error){
	if(isEmpty(phone)){
		error.text("请输入手机号!").show();
		return false;
	}else if(/^1[345678]\d{9}$/.test(phone)){
		error.hide();
		return true;
	}else{
		error.text("手机号为11位数字, 请重新输入手机号!").show();
		return false;
	}
}

//短信验证码验证
function checkPhoneCode(phoneCode, error){
	if(isEmpty(phoneCode)){
		error.text("请输入验证码!").show();
		return false;
	}
	
	if(/^\d{6}$/.test(phoneCode)){
		return true
	}
	
	error.text("验证码为6位数字, 请重新输入!").show();
	return false;
}

//验证页面生成的验证码
function checkVerifyCode(verifyCode, error){
	if(isEmpty(verifyCode)){
		error.text("请输入验证码!").show();
		return false;
	}
	
	if(/^\d{4}$/.test(verifyCode)){
		return true
	}
	
	error.text("验证码为4位数字, 请重新输入!").show();
	return false;
}

//验证交易密码
function checkBusiPwd(busiPwd, error){
	if(isEmpty(busiPwd)){
		error.text("请输入交易密码!").show();
		return false;
	}
	
	//与线上保持一致,暂不要求交易密码规则
	/*if(/^\d{6}$/.test(busiPwd)){
		return true
	}
	
	error.text("交易密码为6位数字, 请重新输入!").show();
	return false;*/
	return true
}

//校验银行卡是否有效16位(五空格), 19位 中间带3个空格
function checkBankCard(bankcard){
	return (bankcard.length <= 19&&bankcard.length >= 16);
}