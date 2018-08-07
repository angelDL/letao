//5.判断是否登录过
if(location.href.indexOf("login.html")===-1){
  //不是login.html进性拦截判断
  $.ajax({
    type:"get",
    url:'/employee/checkRootLogin',
    dataType:'json',
    success:function(info){
        if(info.success){
          console.log("以登录");        
        }
        if(info.error===400){
          location.href="login.html"
        }
    }
  })
}
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

$(function(){
  //公共功能实现
  //1.左侧二级菜单切换
  $('.lt_aside .category').click(function(){
    $('.lt_aside .child').stop().slideToggle();
  })
  //2.点击切换侧边栏
  $('.lt_menu').click(function(){
    $('.lt_aside').toggleClass("hidemenu");
    $('.lt_topbar').toggleClass("hidemenu");
    $('.lt_main').toggleClass("hidemenu");
  })
  //3.点击退出菜单
  $('.lt_logout').click(function(){     
    $('#logoutModal').modal('show')
  })
  //4.点击退出按钮,实现用户退出
  $('#logoutBtn').click(function(){
     $.ajax({
       type:"get",
       url:"/employee/employeeLogout",
       dataType:'json',
       success:function(info){
        if(info.success){
          location.href="login.html"
        }
       }

     }) 
  })
})