 
   /* min-witdh: 1024 */

var boxsearch = {
    run:function(){
       this.show();
       this.close();
    },
    show:function(){
       var buttonSearch = document.querySelector('.headerpage .headerpage_menu .headerpage_menu-list .button_search') 
       var boxSearch = document.querySelector('.search');
       		buttonSearch.addEventListener('click',function(){
       		boxSearch.classList.add('show');
       })
    },
    close:function(){
        var buttonClose = document.querySelector('.button-close');
        var boxSearch = document.querySelector('.search');
        buttonClose.addEventListener('click',function(){
            boxSearch.classList.remove('show');
        })
    }
}
boxsearch.run();

/* max-witdh: 1024 */

var boxsearch1 = {
    run:function(){
       this.show();
       this.close();
    },
    show:function(){
       var buttonSearch1 = document.querySelector('.headerpage .headerpage_menu .headerpage_search .headerpage_search-logo ') 
       var boxSearch1 = document.querySelector('.search');
       		buttonSearch1.addEventListener('click',function(){
       		boxSearch1.classList.add('show');
       })
    },
    close:function(){
        var buttonClose1 = document.querySelector('.button-close');
        var boxSearch1 = document.querySelector('.search');
        buttonClose1.addEventListener('click',function(){
            boxSearch1.classList.remove('show');
        })
    }
}
boxsearch1.run();

/* show menu bên right của icon, show background  and  body dịch left and showw menu dropdown ở thanh menu*/
var boxmenu = {
    run:function(){
       this.show();
       this.close();
    },
    show:function(){
       var icondropdown = document.querySelector('.headerpage .headerpage_menu .headerpage_search .headerpage_search-dropdown'); 
       var boxMenu = document.querySelector('.menu');
       var background = document.querySelector('.background');
       var wrapper = document.querySelector('.wrapper');
       var body = document.querySelector('body');
       var icontitle =document.querySelector('.menu .menu_heading .title .fa');
       var boxtitle = document.querySelector('.menu .menu_heading .title .title_item');
            icondropdown.addEventListener('click',function(){
            boxMenu.classList.add('show_menu');
            background.classList.add('show_background');
            wrapper.classList.add('wrapper_left');
            body.classList.add('body_overflow');
       });
            icontitle.addEventListener('click',function(){
              icontitle.classList.remove('fa-angle-down');
              icontitle.classList.add('fa-angle-up');
            })
    },
    close:function(){
        var menuClose = document.querySelector('.menu .menu_logo .logo-close');
        var boxMenu = document.querySelector('.menu');
        var background= document.querySelector('.background');
        var wrapper = document.querySelector('.wrapper');
        var body = document.querySelector('body');
        var icontitle =document.querySelector('.menu .menu_heading .title .fa');
        var boxtitle = document.querySelector('.menu .menu_heading .title .title_item');
            menuClose.addEventListener('click',function(){
            boxMenu.classList.remove('show_menu');
            background.classList.remove('show_background');
            wrapper.classList.remove('wrapper_left');
            body.classList.remove('body_overflow');
        });
            icontitle.addEventListener('click',function(){
             /* icontitle.classList.up('fa-angle-down');*/
            })

    },
  }
boxmenu.run();
/* click icon show search_reponsive */
$(".headerpage .headerpage_menu .headerpage_search .headerpage_search-icon").click(function(){
$(".search_reponsive").toggleClass('show_search');
});
/* show dropdown của menu search_reponsive*/

$(".menu .menu_heading .title .icon_home").click(function(){
$(".menu .menu_heading .title .home_item").toggleClass('show_title');
});
$(".menu .menu_heading .title .icon_company").click(function(){
$(".menu .menu_heading .title .company_item").toggleClass('show_title');
});
$(".menu .menu_heading .title .icon_solutions").click(function(){
$(".menu .menu_heading .title .solutions_item").toggleClass('show_title');
});
$(".menu .menu_heading .title .icon_elements").click(function(){
$(".menu .menu_heading .title .elements_item").toggleClass('show_title');
});
$(".menu .menu_heading .title .icon_studies").click(function(){
$(".menu .menu_heading .title .studies_item").toggleClass('show_title');
});
$(".menu .menu_heading .title .icon_blog").click(function(){
$(".menu .menu_heading .title .blog_item").toggleClass('show_title');
});


$(".menu .menu_heading .title .icon_company").click(function(){
$(".menu .menu_heading .title .icon_company").toggleClass('fa-angle-up');
});
/* cách 2:
 
 let menuBtn = document.querySelectorAll('.menu_heading');

   menuBtn.forEach(function(item){
    item.addEventListener('click',function(){
      console.log(this.lastElementChild.lastElementChild);
      this.lastElementChild.lastElementChild.classList.toggle('show_title');
      })
      
    });
  */
/*===============COMPANY js thêm class ===========*/

$(".company .row .col-12 .company_heading .section_one").click(function(){
$(".company .row .col-12 .company_heading .company_heading-section .heading_one").toggleClass('dis-bl')
});
$(".company .row .col-12 .company_heading .section_two").click(function(){
$(".company .row .col-12 .company_heading .company_heading-section .heading_two").toggleClass('dis-bl')
});
$(".company .row .col-12 .company_heading .section_three").click(function(){
$(".company .row .col-12 .company_heading .company_heading-section .heading_three").toggleClass('dis-bl')
});

/* ============back to top botton============ */
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
/* hiệu ứng số chạy mới đầu vào web */
function animateNumber(finalNumber, delay, startNumber = 0, callback) {
  let currentNumber = startNumber
  const interval = window.setInterval(updateNumber, delay)
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval)
    } else {
      currentNumber++
      callback(currentNumber)
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  animateNumber(1790, 10, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.querySelector('.contact .contact_count .contact_count-numbers .numbers_on h').innerText = formattedNumber
  })
  
  animateNumber(245, 10, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.querySelector('.contact .contact_count .contact_count-numbers .numbers_below h').innerText = formattedNumber
  })
  
  animateNumber(491, 10, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.querySelector('.contact .contact_count .contact_count-numbers .numbers_on .numbers_on-finished').innerText = formattedNumber
  })

  animateNumber(1090, 10, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.querySelector('.contact .contact_count .contact_count-numbers .numbers_below .numbers_below-blog').innerText = formattedNumber
  })
})