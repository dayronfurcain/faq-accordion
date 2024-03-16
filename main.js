const accordionItems = document.querySelectorAll('.accordion__item')

function toggleAccordion() {
  const openAccordion = document.querySelector('.open-accordion')

  if (openAccordion && openAccordion !== this) {
    openAccordion.classList.remove('open-accordion')
    const accordionIcon = openAccordion.querySelector('.accordion__img')
    accordionIcon.src = 'assets/images/icon-plus.svg'
  }

  const accordionIcon = this.querySelector('.accordion__img')

  if (this.classList.contains('open-accordion')) {
    this.classList.remove('open-accordion')
    accordionIcon.src = 'assets/images/icon-plus.svg'
  } else {
    this.classList.add('open-accordion')
    accordionIcon.src = 'assets/images/icon-minus.svg'
  }
}

accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener('click', toggleAccordion)
})
