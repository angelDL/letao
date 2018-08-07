
//在发送ajax请求时,开启进度条
//最后一个ajax请求回来,关闭进度条
//ajax全局事件 ajaxComplete() 完成时调用 ajaxError()失败时调用 ajaxSend()发送前调用
//ajaxStart() 第一个ajax请求时
//ajaxStop()全部完成时调用
$(document).ajaxStart(function(){
  //开启进度条
  NProgress.start();
})
$(document).ajaxStop(function(){
  //关闭进度条
  NProgress.done();
})
