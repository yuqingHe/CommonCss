/** 
 *功能：入口文件
 *作者：tianyu.chen
 *时间：2016-8-18
 *邮箱：tianyu.chen@xiaobao100.com | cty8998@163.com
**/
var shiningStarStatistics = shiningStarStatistics || {};

shiningStarStatistics.goToMobile = function () {
    var timer;
    if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
        window.location.href = '/mobile.html';
    }
}

//初始化
function init() {
    shiningStarStatistics.goToMobile();
}
init();


