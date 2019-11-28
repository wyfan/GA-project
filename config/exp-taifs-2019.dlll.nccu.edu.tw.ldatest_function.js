/**
 * 適用網頁：https://www.travel.taipei/
 * 事件查詢表：https://docs.google.com/spreadsheets/d/1MtMtw9lKLDTUzfBd6Ld0fAe_FGe5u-Mlkh5WfZiH5qM/edit
 * 程式碼位置：https://billxu0521.github.io/GA-project/config/www.travel.taipei.js
 * GA https://analytics.google.com/analytics/web/#realtime/rt-overview/a89833109w133278856p137301362/
 * @author Pudding 20170203
 */

GA_TRACE_CODE = "UA-153121700-1"; //DLLL LAB GA

var _local_debug = true;

if (_local_debug === true) {
  CSS_URL = "./ga-taifs/config/exp-taifs-2019.dlll.nccu.edu.tw.css";
  LIB_URL = "../../ga-taifs/ga_inject_lib.js";
  console.log("[LOCAL TEST MODE]");
} else {
  CSS_URL = "https://wyfan.github.io/GA-project/config/exp-taifs-2019.dlll.nccu.edu.tw.css";
  LIB_URL = "https://wyfan.github.io/GA-project/ga_inject_lib.js";
}


var exec = function() {
  //auto_set_user_id();

  //最相關主題1-7(0-6)
  ga_mouse_click_event(".discuss0", "taifs_click_light0_open");
  ga_mouse_click_event(".discuss1", "taifs_click_light1_open");
  ga_mouse_click_event(".discuss2", "taifs_click_light2_open");
  ga_mouse_click_event(".discuss3", "taifs_click_light3_open");
  ga_mouse_click_event(".discuss4", "taifs_click_light4_open");
  ga_mouse_click_event(".discuss5", "taifs_click_light5_open");
  ga_mouse_click_event(".discuss6", "taifs_click_light6_open");

  //各主題詞彙
  ga_mouse_click_event("#t00", "taifs_click_t00");
  ga_mouse_click_event("#t01", "taifs_click_t01");
  ga_mouse_click_event("#t02", "taifs_click_t02");
  ga_mouse_click_event("#t03", "taifs_click_t03");
  ga_mouse_click_event("#t04", "taifs_click_t04");

  ga_mouse_click_event("#t10", "taifs_click_t10");
  ga_mouse_click_event("#t11", "taifs_click_t11");
  ga_mouse_click_event("#t12", "taifs_click_t12");
  ga_mouse_click_event("#t13", "taifs_click_t13");
  ga_mouse_click_event("#t14", "taifs_click_t14");

  ga_mouse_click_event("#t20", "taifs_click_t20");
  ga_mouse_click_event("#t21", "taifs_click_t21");
  ga_mouse_click_event("#t22", "taifs_click_t22");
  ga_mouse_click_event("#t23", "taifs_click_t23");
  ga_mouse_click_event("#t24", "taifs_click_t24");

  ga_mouse_click_event("#t30", "taifs_click_t30");
  ga_mouse_click_event("#t31", "taifs_click_t31");
  ga_mouse_click_event("#t32", "taifs_click_t32");
  ga_mouse_click_event("#t33", "taifs_click_t33");
  ga_mouse_click_event("#t34", "taifs_click_t34");

  ga_mouse_click_event("#t40", "taifs_click_t40");
  ga_mouse_click_event("#t41", "taifs_click_t41");
  ga_mouse_click_event("#t42", "taifs_click_t42");
  ga_mouse_click_event("#t43", "taifs_click_t43");
  ga_mouse_click_event("#t44", "taifs_click_t44");

  ga_mouse_click_event("#t50", "taifs_click_t50");
  ga_mouse_click_event("#t51", "taifs_click_t51");
  ga_mouse_click_event("#t52", "taifs_click_t52");
  ga_mouse_click_event("#t53", "taifs_click_t53");
  ga_mouse_click_event("#t54", "taifs_click_t54");

  ga_mouse_click_event("#t60", "taifs_click_t60");
  ga_mouse_click_event("#t61", "taifs_click_t61");
  ga_mouse_click_event("#t62", "taifs_click_t62");
  ga_mouse_click_event("#t63", "taifs_click_t63");
  ga_mouse_click_event("#t64", "taifs_click_t64");

  //搜尋欄位
  ga_mouse_click_event("#discussSearch", "taifs_click_moodle_search");
  ga_mouse_click_event("#googleSearch", "taifs_click_external_search");


  //GL1-6 click
  ga_mouse_click_event(".unit:eq(0)", "GL1_6");

  //G1-7 click
  ga_mouse_click_event(".breadcrumb .unit:not(':eq(0)')", "GL1_7");

  //GL1-8 搜尋列 click
  ga_submit_event('.btn-search-submit', "GL1_8"); // 遊客人數調查
  ga_submit_event("#keyword", "GL1_8", function(_form) {
    return $("#keyword").val();
  });
  ga_mouse_click_event('input.gsc-search-button', "GL1_8");
  ga_input_keydown_enter_event(".gsc-search-box input.gsc-input", "GL1_8", function(_input) {
    return $(_input).val();
  });

  //GL1-9
  ga_mouse_click_event('.first-page', "GL1_9");
  ga_mouse_click_event('.last-page', "GL1_9");
  ga_mouse_click_event('.next-page', "GL1_9");
  ga_mouse_click_event('.prev-page', "GL1_9");

  //GL2-2  更多xx
  ga_mouse_click_event('.btn-more', "GL2_2");

  //GL2-5  收藏
  ga_mouse_click_event('#btn-my-collection', "GL2_5");
  ga_mouse_click_event('.btn-add-diamond', "GL2_5");

  //GL2-6  底部
  ga_mouse_scroll_in_event('.footer', "GL2_6");

  //GL2-8  電話
  ga_mouse_click_event('.tel-link', "GL2_8");
  ga_mouse_click_event('.info .btn-tel-link', "GL2_8");

  //GL2-9 多語言轉換
  ga_mouse_click_event('.lang-link-list .link', "GL2_9");

  //GL2-10  底部條款
  ga_mouse_scroll_in_event('.info .link-blk', "GL2_10");

  //GL2-11  勘誤
  ga_mouse_click_event('.btn-report-issue', "GL2_11");

  //GL2-12  分享
  ga_mouse_click_event('.btn-share-fb', "GL2_12");
  ga_mouse_click_event('.btn-share-gplus', "GL2_12");
  ga_mouse_click_event('.btn-share-twitter', "GL2_12");
  ga_mouse_click_event('.btn-share-weibo', "GL2_12");
  ga_mouse_click_event('.btn-share-line', "GL2_12");

  //GL2-13  分類資訊
  ga_mouse_click_event('.menu-title', "GL2_13");
  ga_mouse_click_event('.event-news-card-list .item .link', "GL2_13");
  ga_mouse_click_event('.btn-theme-link', "GL2_13");

  //GL2-14  日期

  ga_mouse_scroll_in_event('.info-blk .duration', "GL2_14", function(_span) {
    return $(_span).parent().text();
  });
  ga_mouse_scroll_in_event('.info-blk .date', "GL2_14", function(_span) {
    return $(_span).parent().text();
  });

  // GL2_15 夜生活地圖
  //if (location.href.indexOf("/shop/nightlife") > -1) {
  // https://www.travel.taipei/zh-tw/shop/nightlife
  //ga_send_event("GL2_15");
  //}

  // GL3_2 沒有顯示畫面
  if (location.href.indexOf("/notfound") > -1) {
    // 表示沒有找到
    ga_send_event("GL3_2");
  }

  //4-1
  ga_mouse_click_event('.btn-radio', "GL4_1");
  ga_input_change_event('select[name="start-year"]', "GL4_1");
  ga_input_change_event('select[name="start-month"]', "GL4_1");
  ga_input_change_event('select[name="end-year"]', "GL4_1");
  ga_input_change_event('select[name="end-month"]', "GL4_1");
  //這邊偵測表單送出後的值
  ga_submit_event('.expend-wrapper > form', "GL4_1",
    function(form) {
      console.log("submit act" + form);
      return "start-year=" + form.find('select[name="start-year"]').val();
    });
  ga_submit_event('.expend-wrapper > form', "GL4_1",
    function(form) {
      console.log("submit act" + form);
      return "end-year=" + form.find('select[name="end-year"]').val();
    });
  ga_submit_event('.expend-wrapper > form', "GL4_1",
    function(form) {
      console.log("submit act" + form);
      return "start-month=" + form.find('select[name="start-month"]').val();
    });
  ga_submit_event('.expend-wrapper > form', "GL4_1",
    function(form) {
      console.log("submit act" + form);
      return "end-month=" + form.find('select[name="end-month"]').val();
    });


  //GL5-2  圖片
  // https://www.travel.taipei/zh-tw/attraction/details/9
  //ga_mouse_touch_event('.flickity-lazyloaded',"GL5_2");
  setInterval(function() {
    ga_mouse_touch_event('.flickity-lazyloaded:not(.event-binded)', "GL5_2");
    $('.flickity-lazyloaded:not(.event-binded)').addClass("event-binded");
  }, 500);
  // :not()
  // [target="_blank"]
  setInterval(function() {
    ga_mouse_touch_event('.thumb .flickity-lazyloaded:not(.event-binded)', "GL5_2");
    $('.thumb .flickity-lazyloaded:not(.event-binded)').addClass("event-binded");
  }, 500);

  ga_mouse_touch_event('.item .is-selected', "GL5_2");
  //ga_mouse_down_event('.spot-photo-slider .pswp__scroll-wrap',"GL5_2");
  //ga_mouse_down_event('.spot-photo-slider .pswp__item',"GL5_2");
  //ga_mouse_touch_event('.spot-photo-slider .item',"GL5_2");

  //ga_mouse_touch_event('.spot-photo-slider .item',"GL5_2");
  //ga_mouse_touch_event('.pswp__item',"GL5_2")
  ga_mouse_touch_event('.pswp__scroll-wrap', "GL5_2");

  //GL5-3  互動
  ga_mouse_click_event('.spot-photo-slider .flickity-prev-next-button', "GL5_3");
  ga_mouse_click_event('.spot-photo-slider .flickity-lazyloaded', "GL5_3");
  //ga_mouse_touch_event('#krpanoSWFObject canvas',"GL5_3");
  //ga_mouse_drag_event('#krpanoSWFObject canvas',"GL5_3");
  //ga_mouse_down_event("#media-pano-wrapper", "GL5_3");

  //ga_mouse_click_event('.media-switch-blk',"GL5_3");
  ga_mouse_click_event('.btn-media-photo', "GL5_3");
  ga_mouse_click_event('.btn-media-video', "GL5_3");
  ga_mouse_click_event('.btn-media-pano', "GL5_3");
  ga_mouse_click_event('.btn-media-voice', "GL5_3");

  //GL5-5  圖示設計
  //ga_mouse_click_event('.thumb',"GL5_5");
  ga_mouse_click_event('.btn-open-menu', "GL5_5");
  ga_mouse_click_event('.menu-title', "GL5_5");
  ga_mouse_click_event('.event-news-card-list .item .link', "GL5_5");
  ga_mouse_click_event(".mobile-nav-close-mask", "GL5_5");
  ga_mouse_click_event('.btn-media-photo', "GL5_5");
  ga_mouse_click_event('.btn-media-video', "GL5_5");
  ga_mouse_click_event('.btn-media-pano', "GL5_5");
  ga_mouse_click_event('.btn-media-voice', "GL5_5");
  ga_mouse_click_event('.fast-link-list a.link', "GL5_5");

  //GL5-6  按鈕設計
  //ga_mouse_click_event('.thumb',"GL5_6");
  ga_mouse_click_event('.btn-open-menu', "GL5_6");
  ga_mouse_click_event('.menu-title', "GL5_6");
  ga_mouse_click_event('.event-news-card-list .item .link', "GL5_6");
  ga_mouse_click_event(".mobile-nav-close-mask", "GL5_6");
  ga_mouse_click_event('.btn-media-photo', "GL5_6");
  ga_mouse_click_event('.btn-media-video', "GL5_6");
  ga_mouse_click_event('.btn-media-pano', "GL5_6");
  ga_mouse_click_event('.btn-media-voice', "GL5_6");
  ga_mouse_click_event('.fast-link-list a.link', "GL5_6");


  //GL6-2  跳離網域
  //ga_mouse_click_event('a[target="_blank"]:not(.js-photoswipe-item)',"GL6_2");
  ga_mouse_click_event('a:not([target="_blank"])', "googlsearch_result");

  setInterval(function() {
    ga_mouse_click_event('.gsc-resultsbox-visible .gs-title > .gs-title:not(.event-binded)', "GL6_2", function(_a) {
      return $(_a).text();
    });
    $('.gsc-resultsbox-visible .gs-title > .gs-title:not(.event-binded)').addClass("event-binded");
  }, 500);

  ga_display_timer(9);
  enable_screen_recorder_link();
};

// --------------------------------------

$(function() {
  $.getScript(LIB_URL, function() {
    ga_setup(function() {
      exec();
    });
  });
});
