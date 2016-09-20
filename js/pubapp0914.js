var pubapp = angular.module('pubapp',['ui.router']);
pubapp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/news');
    $stateProvider
        .state('news',{
            url:'/news',
            views:{
                '':{templateUrl:'news.html'},
                'header@news':{templateUrl:'header.html'}
/*                'footer@news':{templateUrl:'footer.html'}*/
            }
        })
        .state('laws',{
            url:'/laws',
            views:{
                '':{templateUrl:'laws.html'},
                'header@laws':{templateUrl:'header.html'}
/*                'footer@laws':{templateUrl:'footer.html'}*/
            }
        })
        .state('notices',{
            url:'/notices',
            views:{
                '':{templateUrl:'notices.html'},
                'header@notices':{templateUrl:'header.html'}
/*                'footer@notices':{templateUrl:'footer.html'}*/
            }
        })
        .state('expert',{
            url:'/expert',
            views:{
                '':{templateUrl:'expert.html'},
                'header@expert':{templateUrl:'header.html'}
/*                'footer@expert':{templateUrl:'footer.html'}*/
            }
        })
        .state('news1',{
            url:'news-detail',
            views:{
                '':{templateUrl:'news-detail.html'}
            }
        })
        .state('detail-menu.detail',{
            url:'/goods-detail-info',
            views:{
                '':{templateUrl:'goods-detail-info'},
                'detail@detail-menu':{templateUrl:'goods-detail-info.html'}
            }
        })







});
























