const BTNswitch = $('.setting .group .item .switch');

if (BTNswitch) {
  BTNswitch.on('click', function () {
    $(this).toggleClass('active');
  })
}

// Accordion
const accordion = $('.accordion');
if (accordion) {
  let accordionButtons = $('.accordion-btn');
  let accordionBodys = $('.accordion-item');
  const ACTIVE_CLASS = 'active';

  for (let i = 0; i < accordionButtons.length; i++) {
    const accordionButton = accordionButtons[i];
    const accordionBody = accordionBodys[i];
    $(accordionButton).on('click', function () {
      $(this).addClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
      $(accordionBody).addClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
    });
  }
}
