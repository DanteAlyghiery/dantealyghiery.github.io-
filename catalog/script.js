"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iOS/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
        }
     };
if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    // Перевірка овжини масиву
    
    if (menuArrows.length > 0) {
        // цикл що б перевірити усі стрілки

        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];

            // Дія з кожною стрілкою (елементом) який є у масиві
            menuArrow.addEventListener('click', function (e) {
                // Навішування класу батьку елементу (Якщо його немає то забрати .toggle)
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

function toggleSubMenu() {
    const subMenuIcon = document.querySelector('.sub-menu-icon');
    const subMenuContainer = document.querySelector('.menu-sub');
    subMenuIcon.classList.toggle('_active-sub-menu');
    subMenuContainer.classList.toggle('_active-sub-menu-list');
}

function toggleMenu() {   // Подія клік на іконку, звернення до іконки добавка класу _active
    const iconMenu = document.querySelector('.menu__icon'); // Звернення до іконки бургер
    const menuBody = document.querySelector('.menu__body'); // Перевірка наяності класу menu__ion
    document.body.classList.toggle('_lock'); // Заборона прогортання сторінки привідкритому меню бургер
    iconMenu.classList.toggle('_active'); // Добавка класу 
    menuBody.classList.toggle('_active');
}


$(function() {
  $('.marquee').marquee({
    duration: 7000,
    startVisible: true,
    duplicated: true,
    gap:100
  });
});

// let btn = document.getElementById('btn');
// let btnText = document.getElementById('btnText');

// btn.onclick = function() {
//     btnText.innerHTML = "Дякуємо!";
//     btn.classList.add("active");
// }


$(function() {
 
    $(window).scroll(function() {
     
    if($(this).scrollTop() != 0) {
     
    $('#toTop').fadeIn();
     
    } else {
     
    $('#toTop').fadeOut();
     
    }
     
    });
     
    $('#toTop').click(function() {
     
    $('body,html').animate({scrollTop:0},800);
     
    });
     
    });