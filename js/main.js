/** 
 *功能：入口文件
 *作者：tianyu.chen
 *时间：2016-8-18
 *邮箱：tianyu.chen@xiaobao100.com | cty8998@163.com
**/



function init(){
    //判断是否为移动设备
     if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
            window.location.href = 'http://m.baidu.com';
        }
}   
init();   
