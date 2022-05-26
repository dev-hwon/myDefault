<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge, chrome=1">
    <title>ui 프론트 개발자 박현원입니다.</title>
    <link rel="shortcut icon" href="./favicon.ico" />
    <link rel="stylesheet" href="./css/common.css">
    <link rel="stylesheet" href="./css/swiper.css">
    <link rel="stylesheet" href="./css/default.css">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <script type="text/javascript"  src="//code.jquery.com/jquery-3.6.0.min.js"></script>
<!--    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>-->

    <script type="text/javascript" src="./js/mycustomjs.js"></script>
    <script type="text/javascript" src="./js/plx.jquery.js"></script>
    <script type="text/javascript" src="./js/swiper.min.js"></script>
</head>
<body>
    <header class="header">
        <div class="h_gnb">
            <nav class="gnb_menu">
                <ul>
                    <li>Work & Project
                        <ul class="sub_gnb_menu">
                            <li data-scrpos="#comp_enuri">써머스플랫폼</li>
                            <li data-scrpos="#comp_off">OFF/(주)디앤오솔루션</li>
                            <li data-scrpos="#comp_vida">비주얼다이브</li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <script>
                $('[data-scrpos]').on('click', function(){
                    var target = $(this).data('scrpos')
                    scrollMove(target);
                    console.log(target);
                });
            </script>
            <div class="my_info">
                <ul>
                    <li><a href="mailto:thehyun11@google.com">thehyun11@google.com</a></li>
                    <li>010-8738-7473</li>
                    <li>thehyun1.design ⓒ All right reserved.</li>
                </ul>
            </div>
        </div>
    </header>