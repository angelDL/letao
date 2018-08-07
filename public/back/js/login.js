/**
 * Created by daili on 2018/8/7.
 */
$(function(){
  //检验插件初始化
  $('#form').bootstrapValidator({
    //配置图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    //配置字段
    fields:{
      username:{
        validators:{
          //不能为空
          notEmpty:{
            message: '用户名不能为空'
          },      
        //长度校验
          stringLength:{
          min: 2,
          max: 6,
          message: '用户名长度必须在2到6之间'
        }
      }
    } ,
      password:{
        validators:{
          //不能为空
          notEmpty:{
            message: '用户名不能为空'
          },      
        //长度校验
          stringLength:{
          min: 6,
          max: 12,
          message: '用户名长度必须在6到12之间'
        }
     },
   }
}

  })
})
// $(function() {
//   // 检验插件初始化
//   $('#form').bootstrapValidator({

//     // 配置图标
//     feedbackIcons: {
//       valid: 'glyphicon glyphicon-heart',     // 校验成功
//       invalid: 'glyphicon glyphicon-remove',  // 校验失败
//       validating: 'glyphicon glyphicon-refresh'  // 校验中
//     },


//     // 配置字段 (不要忘记给input加name)
//     fields: {
//       username: {
//         // 校验规则
//         validators: {
//           // 非空校验
//           notEmpty: {
//             // 配置提示信息
//             message: "用户名不能为空"
//           },
//           // 长度校验
//           stringLength: {
//             min: 2,
//             max: 6,
//             message: "用户名长度必须是2-6位"
//           }
//         }
//       },
//       password: {
//         validators: {
//           // 非空校验
//           notEmpty: {
//             message: "密码不能为空"
//           },
//           // 长度校验
//           stringLength: {
//             min: 6,
//             max: 12,
//             message: "密码长度必须是6-12位"
//           }
//         }
//       }
//     }
//   });




// });
