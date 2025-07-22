// ==UserScript==
// @name MyFilter
// @name:ja 自分用フィルタ
// @author atempo
// @description Block ads.
// @description:ja 広告をブロックします。
// @version 0.0.01
// @include http://eromanga-ace.com/*
// @include http://blog.livedoor.jp/uwasainfo/*
// @include https://eromanga-pon.com/*
// @require jquery
// @history 0.0.1 	Initial version.
// @history:ja 0.0.1	最初のバージョン
// @gallery-id aiiknneyrlytnkknljdobkesfsxgfndo
// ==/UserScript==
if (/eromanga-ace\.com/.test(location.href)){
  function removeads() {
    $('div[class="sp_headweidget"]').remove();
    $('div[class="sp_mainlowweidget"]').remove();
    $('div[class="sp_lastweidget"]').remove();
    $('div[class="sp_articleweidget"]').remove();
    
  }
  removeads();
  setInterval(removeads, 1000);
}
if (/blog\.livedoor\.jp\/uwasainfo/.test(location.href)){
  /*alert('call');*/
  $("a[href^='https://i.imgur.com/']").attr("target","_blank").attr("rel","noopener noreferrer");
}
if (/eromanga-pon\.com/.test(location.href)){
  function removeads() {
    $('div[class="ad_big"]').remove();
    $('div[id^="active_overlay"]').remove();
    $('div[id^="inst_area"]').remove();
  }
  removeads();
  setInterval(removeads, 1000);
}
