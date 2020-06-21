const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
  span.classList.add('animated','rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
  span.classList.remove('animated','rubberBand')
}))

const javaBar = document.querySelector('.bar-java')
const pythonBar = document.querySelector('.bar-python')
const frontendBar = document.querySelector('.bar-frontend')
const swiftBar = document.querySelector('.bar-swift')

var t1 = new TimelineLite()

t1.fromTo(javaBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
  .fromTo(pythonBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease: Power4.easeOut})
  .fromTo(frontendBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeOut})
  .fromTo(swiftBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(40% - 6px)`, ease: Power4.easeOut})

const controller =  new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
  triggerElement: '.skills',
  triggerHook: 0
})
.setTween(t1)
.addTo(controller)


const showRequiredCategory = event => {
  const getId = event.id
  const links = document.querySelectorAll('.project-category button')
  for (i = 0; i < links.length; i++) {
    if (links[i].hasAttribute('class')) {
      links[i].classList.remove('active')
    }
  }

  event.classList.add('active')
  const getCategory = document.querySelector(`.category-${getId}`)
  const categories = document.querySelectorAll('div[class^= "category-"]')
  for (i = 0; i < categories.length; i++) {
    if (categories[i].hasAttribute('class')) {
      categories[i].classList.remove('showCategory')
      categories[i].classList.add('hideCategory')
    }
  }

  getCategory.classList.remove('hideCategory')
  getCategory.classList.add('showCategory')
}
