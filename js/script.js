const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    toggle.addEventListener('click', () =>{

        // Adiciona o mostrar o menu na nav
        nav.classList.toggle('show-menu')

        //Adiciona o mostrar o icon para mostrar e esconde o menu icon
        toggle.classList.toggle('show-icon')
    
    })
}
showMenu('nav-toggle','navMenu')

$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-sizer',
  //gutter: 10,
  horizontalOrder:true,
  percentPosition: true
})

var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  //layoutMode: 'masonryHorizontal',
  itemSelector: '.grid-item',
  //selector
  //layout
  percentPosition: true,
  masonryHorizontal: {
    rowHeight: 10,
    gutter: 0
    //columnWidth: '.grid-sizer'
  }
})

$('.filter-button-group').on('click','button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue});
    $('.filter-button-group button').removeClass('active');
    $(this).addClass('active');
});


const lightbox = GLightbox ({
    loop : true
})

// Aplica filtro se vier com hash na URL
const hash = window.location.hash;
if (hash) {
    const filterValue = '.' + hash.replace('#', '');
    $grid.isotope({ filter: filterValue });
    $('.filter-button-group button').removeClass('active');
    $(`.filter-button-group button[data-filter="${filterValue}"]`).addClass('active');
}