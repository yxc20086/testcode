var pubapp = angular.module('pubapp',['ui.router']);
pubapp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/news');
    $stateProvider
        .state('news',{
            url:'/news',
            views:{
                '':{templateUrl:'news.html'},
                'header':{templateUrl:'header.html'}
/*                'footer@news':{templateUrl:'footer.html'}*/
            }
        })
        .state('laws',{
            url:'/laws',
            views:{
                '':{templateUrl:'laws.html'},
                'header':{templateUrl:'header.html'}
/*                'footer@laws':{templateUrl:'footer.html'}*/
            }
        })
        .state('notices',{
            url:'/notices',
            views:{
                '':{templateUrl:'notices.html'},
                'header':{templateUrl:'header.html'}
/*                'footer@notices':{templateUrl:'footer.html'}*/
            }
        })
        .state('expert',{
            url:'/expert',
            views:{
                '':{templateUrl:'expert.html'},
                'header':{templateUrl:'header.html'}
/*                'footer@expert':{templateUrl:'footer.html'}*/
            }
        })
        .state('news1',{
            url:'/news',
            views:{
                '':{templateUrl:'news.html'},
                'header':{templateUrl:'header.html'}
            }
        })
        /*.state('news1',{
            url:'/news1',
            templateUrl:'news.html'
        })*/
        .state('news-detail',{
            url:'/news-detail',
            views:{
                '':{templateUrl:'news-detail.html'}
            }
        })
        .state('company-list',{
            url:'/company-list',
            views:{
                '':{templateUrl:'company-list.html'}
            }
        })
        .state('company-info',{
            url:'/company-info',
            views:{
                '':{templateUrl:'company-info.html'}
            }
        })
        .state('private-info',{
            url:'/info-per',
            views:{
                '':{templateUrl:'info-per.html'}
            }
        })

        .state('goods-barcode-info',{
            url:'/barcode',
            views:{
                '':{templateUrl:'barcode.html'},
                'detail-menu@goods-detail-info':{templateUrl:'detail-menu.html'}      /*detail-menu@detail-menu.goods-detail-info???*/
            }
        })

        /*不能用*/
        .state('detail-menu.detail',{
            url:'/goods-detail-info',
            views: {
                '': {templateUrl: 'goods-detail-info.html'},
                'detail-menu@detail-menu.goods-detail': {templateUrl: 'detail-menu.html'}
            }
        })
        .state('feeding',{
            url:'/feeding',
            views: {
                '': {templateUrl: 'feeding.html'},
                'detail-menu': {templateUrl: 'detail-menu.html'}
            }
        })

});
























