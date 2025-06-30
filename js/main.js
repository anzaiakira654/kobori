window.onload = function () {
  // スライダー1
  const swiper = new Swiper(".swiper", {
    spaceBetween: 0,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        updateActiveSlide(this, "active-slide", "inactive-slide");
      },
      slideChangeTransitionStart: function () {
        updateActiveSlide(this, "active-slide", "inactive-slide");
      },
    },
  });

  // スライダー2
  const swiper2 = new Swiper(".staffSwiper2", {
    spaceBetween: 16,

    centeredSlides: false,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1, // モバイル
      },
      640: {
        slidesPerView: 2, // タブレット
      },
      1024: {
        slidesPerView: 5, // PC
      },
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    on: {
      init: function () {
        updateActiveSlide(this, "active-slide2", "inactive-slide2");
      },
      slideChangeTransitionStart: function () {
        updateActiveSlide(this, "active-slide2", "inactive-slide2");
      },
    },
  });

  // 共通のアクティブスライド切り替え関数（クラス名を引数で変更）
  function updateActiveSlide(swiperInstance, activeClass, inactiveClass) {
    swiperInstance.slides.forEach(slide => {
      slide.classList.remove(activeClass);
      slide.classList.add(inactiveClass);
    });
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
    activeSlide.classList.remove(inactiveClass);
    activeSlide.classList.add(activeClass);
  }
};

// ヘッダーのスクロールイベント
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const header = document.getElementById("siteHeader");
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll < 600) {
    // 下にスクロール → ヘッダーを隠す
    header.style.transform = "translateY(-100%)";
  } else {
    // 上にスクロール → ヘッダーを表示
    header.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});


//アニメーション左から順番に表示
document.addEventListener("DOMContentLoaded", () => {
  const fadeCards = document.querySelectorAll(".fade-card");

  const observerCards = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 200); // 順番に表示されるように
        observerCards.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });

  fadeCards.forEach((card) => observerCards.observe(card));
});

//アニメーションtextふわっと順に表示
document.addEventListener("DOMContentLoaded", () => {
  const fadeTexts = document.querySelectorAll(".fade-text");

  const observerText = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 200); // 200msずつ遅延してふわっと順に表示
        observerText.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });

  fadeTexts.forEach((el) => observerText.observe(el));
});