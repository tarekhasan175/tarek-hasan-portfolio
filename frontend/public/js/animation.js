// public/js/old11-animation.js
(function ($) {
          if (!$) return;

          function initAnimationText() {
                    function getNextItem($item) {
                              return $item.is(':last-child') ? $item.parent().children().eq(0) : $item.next();
                    }
                    function switchText($old, $new) {
                              $old.removeClass('is-visible').addClass('is-hidden');
                              $new.removeClass('is-hidden').addClass('is-visible');
                    }
                    function showWord($word) {
                              if ($word.parents('.animationtext').hasClass('clip')) {
                                        $word.parents('.cd-words-wrapper').animate(
                                                  { width: $word.width() + 10 },
                                                  600,
                                                  () => setTimeout(() => hideWord($word), 1500)
                                        );
                              } else {
                                        switchText($word, getNextItem($word));
                                        setTimeout(() => hideWord(getNextItem($word)), 2500);
                              }
                    }
                    function hideWord($word) {
                              if ($word.parents('.animationtext').hasClass('clip')) {
                                        $word.parents('.cd-words-wrapper').animate({ width: '2px' }, 600, () => {
                                                  switchText($word, getNextItem($word));
                                                  showWord(getNextItem($word));
                                        });
                              } else {
                                        switchText($word, getNextItem($word));
                                        setTimeout(() => hideWord(getNextItem($word)), 2500);
                              }
                    }

                    $('.animationtext').each(function () {
                              const $this = $(this);
                              if ($this.hasClass('clip')) {
                                        const $wrapper = $this.find('.cd-words-wrapper');
                                        $wrapper.css('width', $wrapper.width() + 10);
                              } else {
                                        let maxWidth = 0;
                                        $this.find('.cd-words-wrapper .item-text').each(function () {
                                                  const itemWidth = $(this).width();
                                                  if (itemWidth > maxWidth) maxWidth = itemWidth;
                                        });
                                        $this.find('.cd-words-wrapper').css('width', maxWidth);
                              }
                              setTimeout(() => {
                                        showWord($this.find('.is-visible').eq(0));
                              }, 2500);
                    });
          }

          $(document).ready(() => {
                    initAnimationText();
                    window.initAnimationText = initAnimationText; // allow manual re-init if needed
          });

})(window.jQuery);



// IIFE part: animation and pinning elements on scroll
(function () {
          if (!document.querySelector(".stack-element")) return;

          let header = document.querySelector(".header-fixed");
          let headerHeight = (header?.clientHeight) || 0;
          let tabsContentWrap = document.querySelector(".tabs-content-wrap");
          if (!tabsContentWrap) return;

          let totalHeight = tabsContentWrap.offsetHeight;
          let animations = [];

          const setupAnimations = () => {
                    animations.forEach(anim => anim.kill());
                    animations = [];

                    // For every .element except the last child
                    document.querySelectorAll(".element:not(:last-child)").forEach(el => {
                              let elHeight = el.offsetHeight;
                              totalHeight -= elHeight;

                              let anim = l.u.create({
                                        trigger: el,
                                        scrub: 1,
                                        start: `top+=-${headerHeight} top`,
                                        end: `+=${totalHeight}`,
                                        pin: true,
                                        pinSpacing: false,
                                        animation: n.Ay.to(el, {
                                                  scale: 0.7,
                                                  opacity: 0
                                        })
                              });

                              animations.push(anim);
                    });
          };

          setupAnimations();

          window.addEventListener("resize", () => {
                    setTimeout(setupAnimations, 150);
          });
})(window.jQuery);


// React useEffect hook: toggle .is-fixed class on header when scrollY >= 350
(function () {
          let header = document.querySelector(".header-fixed");
          if (!header) return;

          let isFixed = false;

          const onScroll = () => {
                    let scrolled = window.scrollY >= 350;
                    if (scrolled !== isFixed) {
                              header.classList.toggle("is-fixed", scrolled);
                              isFixed = scrolled;
                    }
          };

          window.addEventListener("scroll", onScroll, { passive: true });
          onScroll();

          return () => {
                    window.removeEventListener("scroll", onScroll);
          };
})(window.jQuery);



// Dark Mode Toggle IIFE
(function () {
          const body = document.body;
          const toggleSelector = '.toggle-switch-mode'; // Your toggle button selector

          // Utility to update logos based on mode
          function updateLogos(darkEnabled) {
                    const mainLogo = document.querySelector('.main-logo');
                    const mobileLogo = document.querySelector('#logo_header_mobile');
                    const lightLogo = mainLogo?.dataset.light ?? '';
                    const darkLogo = mainLogo?.dataset.dark ?? '';
                    const src = darkEnabled ? darkLogo : lightLogo;

                    if (mainLogo) mainLogo.src = src;
                    if (mobileLogo) mobileLogo.src = src;
          }

          // Initialize dark mode on page load
          let darkModeStored = localStorage.getItem('darkMode');
          let defaultMode = body.dataset.defaultMode || 'light';
          let darkEnabled = darkModeStored
                    ? darkModeStored === 'enabled'
                    : defaultMode === 'dark';

          // Apply initial state
          body.classList.toggle('dark-mode', darkEnabled);
          updateLogos(darkEnabled);

          // Find toggle element and attach click event
          const toggleEl = document.querySelector(toggleSelector);
          if (!toggleEl) return;

          toggleEl.classList.toggle('active', darkEnabled);

          toggleEl.addEventListener('click', () => {
                    darkEnabled = !darkEnabled;
                    body.classList.toggle('dark-mode', darkEnabled);
                    toggleEl.classList.toggle('active', darkEnabled);
                    updateLogos(darkEnabled);
                    localStorage.setItem('darkMode', darkEnabled ? 'enabled' : 'disabled');
          });
})();

