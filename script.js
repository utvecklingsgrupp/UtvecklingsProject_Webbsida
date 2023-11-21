const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('fe-item-list')
const itemWidth = 150
const padding = 100

prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})

$('.pro-container').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})