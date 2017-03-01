
$(function () {
    // 轮播图
    new Swiper('.lunboswiper-container',{
        pagination: '.swiper-pagination',
        loop:true,
        autoplay:1000,
        autoplayDisableOnInteraction:false
    });
    // 滑动分类
    new Swiper('.Sortswiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30
    });
    //滑动信息分类
    new Swiper('.yifu_info_swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30
    });
// 主体部分
    var page = 'pagenavi';
    var mslide = 'slider';
    var mtitle = 'emtitle';
    arrdiv = 'arrdiv';

    var as = document.getElementById(page).getElementsByTagName('a');

    var tt = new TouchSlider({
        id: mslide,
        'auto': '-1',
        fx: 'ease-out',
        direction: 'left',
        speed: 600,
        timeout: 5000,
        'before': function (index) {
            var as = document.getElementById(this.page).getElementsByTagName('a');
            as[this.p].className = '';
            as[index].className = 'active';
            this.p = index;
            var txt = as[index].innerText;
            $("#" + this.page).parent().find('.emtitle').text(txt);
            var txturl = as[index].getAttribute('href');
            var turl = txturl.split('#');
            $("#" + this.page).parent().find('.go_btn').attr('href', turl[1]);
        }
    });

    tt.page = page;
    tt.p = 0;
    for (var i = 0; i < as.length; i++) {
        (function () {
            var j = i;
            as[j].tt = tt;
            as[j].onclick = function () {
                this.tt.slide(j);
                return false;
            };
        })();
    }
});
document.getElementsByClassName("yifu_advert")[0].onclick=function(){
  this.style.display="none";
};
