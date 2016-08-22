var a = angular.module('mainApp', ['ionic', 'mobiscroll-datetime']);
a.controller("exam", ['$scope', '$ionicPopup', '$timeout', '$ionicActionSheet','$ionicSideMenuDelegate', function ($scope, $ionicPopup, $timeout, $ionicActionSheet,$ionicSideMenuDelegate) {
    $scope.nav = [
        {id: 1, en: 'Font', ch: '文字'},
        {id: 2, en: 'Icons', ch: '图标'},
        {id: 3, en: 'Color', ch: '颜色'},
        {id: 4, en: 'Layout', ch: '布局'},
        {id: 5, en: 'Buttons', ch: '按钮'},
        {id: 6, en: 'Tabs', ch: '导航条'},
        {id: 7, en: 'Controls', ch: '控件'},
        {id: 8, en: 'List', ch: '列表'},
        {id: 9, en: 'Cards', ch: '卡片'},
        {id: 10, en: 'Forms', ch: '表单'},
        {id: 11, en: 'Dialogs', ch: '模拟框'},
        {id: 12, en: 'Others', ch: '其他一些组件'}
    ]
    $scope.navActive = 1;
    $scope.showTab = function (id) {
        $scope.navActive = id;
    }


    $scope.mydate = new Date();
    var now = new Date();
    var dateTitle = "<p>一旦有人助力/报名，截止时间不能再改了哦！</p>"
    $scope.setVisitDateTime = {
        animate: 'fade',
        theme: 'material',      // 样式
        lang: 'zh',    // 语言
        mode: 'mixed',
        display: 'bottom',  // 显示位置
        buttons: [
            'clear',
            'set',
            'cancel'
        ],
        clearText: '删除回访提醒',
        minWidth: 50,
        headerText: dateTitle,
        rows: 3
    };

    $scope.showVisitDateTime = function () {
        this.myInstance.show();
    };

    // Triggered on a button click, or some other target
    $scope.showPopup = function () {
        $scope.data = {}
        var myPopup = $ionicPopup.show({
            template: '<div class="font-popbody"> aaaaa</div>',
            title: 'Enter Wi-Fi Password',

            scope: $scope,
            buttons: [
                {
                    text: '取消',
                    type: 'button-cancel'
                },
                {
                    text: '<b>确认</b>',
                    type: 'button-save'
                }
            ]
        });
    };
    //  confirm 对话框
    $scope.showConfirm = function () {
        var confirmPopup = $ionicPopup.confirm({
            template: 'Are you sure you want to eat this ice cream?',
            buttons: [
                {
                    text: '取消',
                    type: 'button-cancel'
                },
                {
                    text: '<b>确认</b>',
                    type: 'button-save'
                }
            ]
        });
    };

    //  alert（警告） 对话框
    $scope.showAlert1 = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Don\'t eat that!',
            template: '<div class="font-poplink"> aaaaa</div>',
            buttons: [
                {
                    text: '<b>确认</b>',
                    type: 'button-save'
                }
            ]
        })
    };
    $scope.showAlert2 = function () {
        var alertPopup = $ionicPopup.alert({

            template: '<div class="poplink"> http://dev.xbx100.cn/GameViewShare?p=activity/oldandnewview?Id=1278</div>',
            buttons: [
                {
                    text: '<b>确认</b>',
                    type: 'button-save'
                }
            ]
        });
    };

//list
    $scope.items = [
        {id: 0},
        {id: 1}
    ];

    // Footer Select List - 底部选择列表
    $scope.selectList = "showSelectList"
    $scope.showSelectList = function () {
        // 显示操作表
        $ionicActionSheet.show({
            buttons: [
                {text: '待跟进'},
                {text: '跟进中'},
                {text: '已成交'},
                {text: '已失效'}
            ],
            cancelText: '取消',
            buttonClicked: function (index) {
                $scope.selectList = this.buttons[index].text;
                return true;
            }
        });

    };

    //遮罩显示
    $scope.successAlert1 = function () {
        $scope.successAlert1Box = true;
        $timeout(function () {
            $scope.successAlert1Box= false;
        }, 3000);
    }
    $scope.successAlert2 = function () {
        $scope.successAlert2Box = true;
        $timeout(function () {
            $scope.successAlert2Box= false;
        }, 3000);
    }
    $scope.showLoading = function () {
        $scope.loading = true;
        $timeout(function () {
            $scope.loading= false;
        }, 3000);
    }
    $scope.showDataMove = function () {
        $scope.dataMove = true;
        $timeout(function () {
            $scope.dataMove= false;
        }, 3000);
    }

    //mobile 左侧侧栏
    $scope.toggleLeftSideMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.navWidth=parseFloat(angular.element("html").css("font-size"))*9;


    //初始化
    $scope.init = function () {
        $scope.lockMask_btn1 = false;

        //dialogs
        $scope.successAlert1Box = false;
        $scope.successAlert2Box = false;
        $scope.loading = false;
        $scope.dataMove = false;

    }
    $scope.init();

    //文字输入框
    $scope.textInput= function () {
        $scope.isShow=true;
        $scope.sure=function(){
            $scope.isShow=false;
        }
        $scope.cancel=function(){
            $scope.isShow=false;
        }

    }

    //底部选择列表
    $scope.showComboboxMask=function(){
        $scope.comboboxData = {
            isShow: true,
            viewList: {},
            info:{}
        };
        var dataList = [{ name: "待跟进", value: 1 },
            { name: "跟进中", value: 2 },
            { name: "已成交", value: 3 },
            { name: "已失效", value: 4 },
            { name: "取消", value: 5 }];
        var info = "";
        $scope.comboboxData.info=info;
        $scope.comboboxData.viewList=dataList;
        console.log("1");
    }
    $scope.hideComboboxMask=function(){
        $scope.comboboxData = {
            isShow: false,
            viewList: {},
            info:{}
        };
    }
}])


