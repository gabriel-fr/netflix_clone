$('.owl-carousel.filmes-principais').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    lazyLoad: true,
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

$('.owl-carousel.filmes-secundarios').owlCarousel({
    items: 7,
    loop:false,
    nav:true,
    lazyLoad: true,
    margin: 15,
    responsive:{
        0:{
            items:3
        },
        100:{
            items:5
        },
        1000:{
            items:7
        }
    }
})