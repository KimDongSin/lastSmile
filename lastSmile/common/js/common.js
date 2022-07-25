(function () {
    document.addEventListener('click', function (e) {
        if (e.target && e.target.className == 'select_box') {
            e.target.children[1].style.display = 'block';
        }
    });

    document.addEventListener('click', function (e) {
        if (e.target && e.target.className == 'select_span') {
            e.target.nextElementSibling.style.display = 'block';
        }
    });


    document.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == 'LI' && e.target.parentElement.className == 'select_ul') {
            e.target.parentElement.style.display = 'none';
        }
    });


    // 헤더
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            if ($('.header_wrapper.rider').length > 0 || $('.header_wrapper.delivery').length > 0) {
                $('.header_wrapper').css({
                    'background': '#191F2C'
                })
            }

            if ($('.header_wrapper.index').length > 0) {
                $('.header_wrapper').css({
                    'background': '#F0831E'
                })

            }

        } else {
            $('.header_wrapper').css({
                'background': 'initial'
            })
        }
    });

    // 메인 타이틀 모션
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $(this).scrollTop() <= 1000) {
            $('.service_info .sub_title span ').css({
                'top': '0',
                'opacity': '1'
            });
        }
    });

    // 라이더
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 50 && $(this).scrollTop() <= 800) {
    //         $('.intro_wrapper .title span ').css({
    //             'top': '0',
    //             'opacity': '1'
    //         });
    //     }
    // });
})();
