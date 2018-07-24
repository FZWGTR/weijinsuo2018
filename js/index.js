$(function () {

    // 顶部通栏的固定
    // $(window).on('resize', function () {

    //     // 获取屏幕滚动的高度
    //     // var scrollHeight=$('#nav').scrollTop();
    //     // var scrollHeight=$('#nav').offset().top;
    //     $(document).on('scroll', function () {

    //         console.log($(this).scrollTop())
    //         var scrollHeight = $(this).scrollTop();
    //         if (scrollHeight > 41) {

    //             $('#nav').css({
    //                 'position': 'fixed',
    //                 'top': 0,
    //                 'z-index': 3,
    //             })
    //         } else {
    //             $('#nav').css({
    //                 'position': '',
    //             })
    //         }


    //     })
    // })
    // 激活商品区域中的tab栏插件，在官网中工具提示实例的最后一块有写
    // ？？？？为什么不做初始化操作也能正常操作运行？？？？
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })



    // 响应式的轮播图函数
    // 首次加载时，先调用一次函数
    responseSlide()

    function responseSlide() {

        $(window).on('resize', function () {

            // 获取屏幕的宽度
            var windowWidth = $(window).width();
            // console.log(windowWidth)

            // 获取轮播图中的每一个页面
            var items = $('.carousel-inner .item');

            // 当屏幕宽度大于768px时，展示大页面的图片
            if (windowWidth > 768) {

                // 遍历轮播图中的每一块，从而添加相应的图片
                items.each(function (index, value) { //index是图片对应的下标，value是对应的每个items

                    $(value).html('<div class="pc-pic hidden-xs" style="background: url(img/slide_0' + (index + 1) + '_2000x410.jpg) center;"></div>')


                })

            } else {
                // 遍历轮播图中的每一块，从而添加相应的图片
                $(items).each(function (index, value) { //index是图片对应的下标，value是对应的每个items

                    $(value).html('<img src="img/slide_0' + (index + 1) + '_640x340.jpg" alt="..." class="mobile-pic hidden-lg hidden-md hidden-sm">')


                })
            }


            // 完成函数后马上触发一次
        }).trigger('resize')


    }











})