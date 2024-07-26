/* ===================================================
viewport固定（375px以下は小さくさせない）
=====================================================*/
(function () {
  const viewport = document.querySelector('meta[name="viewport"]');

  function switchViewport() {
    const value = window.outerWidth > 375 ? "width=device-width,initial-scale=1" : "width=375";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

/* ===================================================
スクロール監視
=====================================================*/
const intersectionObserver = new IntersectionObserver(function(entries){
  entries.forEach(function(entry) {
    if(entry.isIntersecting){
      entry.target.classList.add("is-in-view");
    } else {
      entry.target.classList.remove("is-in-view");
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function(inViewItem) {
  intersectionObserver.observe(inViewItem);
});

/* ===================================================
ドロワーメニュー
=====================================================*/

jQuery("#js-drawer-icon").on("click", function(e){
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
  jQuery("body").toggleClass("drawer-active");
  });

  /*ドロワー内のリンクがクリックされたときの挙動*/

    jQuery('#js-drawer-content a[href^="#"]').on("click",function(e){
      e.preventDefault();
      jQuery("#js-drawer-icon").removeClass("is-checked");
      jQuery("#js-drawer-content").removeClass("is-checked");
      jQuery("body").removeClass("drawer-active");
    });

/* ===================================================
スムーススクロール
=====================================================*/

jQuery('a[href^="#"]').on("click", function(e) {
  e.preventDefault();
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const headerHeight = jQuery("header").outerHeight();
  const position = jQuery(target).offset().top - headerHeight; //headerの高さ分位置をずらす
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
});
