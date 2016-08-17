/**
 * Created by greedy on 2016/5/16.
 */
angular.module('ionicApp', ['ionic'])
    .controller( 'xjw',function($scope,$ionicModal){
        $scope.contacts = [
            { name: 'Gordon Freeman' },
            { name: 'Barney Calhoun' },
            { name: 'Lamarr the Headcrab' }
        ];

        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;//modal更改这个 可以重新再写一个
        });

        $scope.createContact = function(u) {
            $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
            $scope.modal.hide();
        };


        $scope.onHold=function(){
            alert('on-hold')
        }
        $scope.ontap=function(){
            alert('on-tap')
        }
        $scope.ondoubletap=function(){
            alert('ondoubletap')
        }
        $scope.data = {
            showDelete: false
        };

        $scope.edit = function(item) {
            alert('Edit Item: ' + item.id);
        };
        $scope.share = function(item) {
            alert('Share Item: ' + item.id);
        };

        $scope.moveItem = function(item, fromIndex, toIndex) {
            $scope.items.splice(fromIndex, 1);
            $scope.items.splice(toIndex, 0, item);
        };

        $scope.onItemDelete = function(item) {
            $scope.items.splice($scope.items.indexOf(item), 1);
        };

        $scope.items = [
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
            { id: 13 },
            { id: 14 },
            { id: 15 },
            { id: 16 },
            { id: 17 },
            { id: 18 },
            { id: 19 },
            { id: 20 },
            { id: 21 },
            { id: 22 },
            { id: 23 },
            { id: 24 },
            { id: 25 },
            { id: 26 },
            { id: 27 },
            { id: 28 },
            { id: 29 },
            { id: 30 },
            { id: 31 },
            { id: 32 },
            { id: 33 },
            { id: 34 },
            { id: 35 },
            { id: 36 },
            { id: 37 },
            { id: 38 },
            { id: 39 },
            { id: 40 },
            { id: 41 },
            { id: 42 },
            { id: 43 },
            { id: 44 },
            { id: 45 },
            { id: 46 },
            { id: 47 },
            { id: 48 },
            { id: 49 },
            { id: 50 }
        ];
        $scope.myActiveSlide = 1;



    })

    .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('bottom');
        $stateProvider
            .state('menu', {
                url: "/menu",
                templateUrl: "templates/menu.html"
            })
        //这一行定义了会在html页面第一个显示出来的状态，作为页面被加载好以后第一个被使用的路由.
            .state('menu.tabs', {
                url: "/tabs",
                views: {
                    'menu' :{
                        templateUrl: "templates/tabs.html"
                    }
                }
            })

            .state('menu.tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "templates/home.html"
                    }
                }
            })
            .state('menu.tabs.search', {
                url: "/search",
                views: {
                    'search-tab': {
                        templateUrl: "templates/search.html"
                    }
                }
            })

            .state('menu.tabs.about', {
                url: "/about",
                views: {
                    'about-tab': {
                        templateUrl: "templates/about.html"
                    }
                }
            })

            .state('menu.tabs.about.first', {
                url: "/first",
                views: {
                    'about-sub': {
                        templateUrl: "templates/first.html"
                    }
                }
            })
            .state('menu.tabs.about.second', {
                url: "/second",
                views: {
                    'about-sub': {
                        templateUrl: "templates/second.html"
                    }
                }
            })
            .state('menu.tabs.about.third', {
                url: "/third",
                views: {
                    'about-sub': {
                        templateUrl: "templates/third.html"
                    }
                }
            })

        $urlRouterProvider.otherwise("/menu/tabs/about");//页面初始化的时候也是这个地址
    })



