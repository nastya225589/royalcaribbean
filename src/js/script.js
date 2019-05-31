svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){
  ///////////___header-menu___////////

  $('.page-header__toggal').on('click', function() {
    $('.page-header__wrapper').toggleClass('page-header__menu--open');
  });

  ///////////___carousel___////////

  $('.liner__carousel').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    centerPadding: false,
    prevArrow: '<button class="liner__slick liner__slick-prev" type="button"><svg width="10" height="25" class="liner__arrow liner__arrow-prev"><use href="img/sprite-svg.svg#arrow-prev"></use></svg></button>',
    nextArrow: '<button class="liner__slick liner__slick-next" type="button"><svg width="10" height="25" class="liner__arrow liner__arrow-next"><use href="img/sprite-svg.svg#arrow-next"></use></svg></button>'
  });

  $('.place__carousel').slick({
    infinite: false,
    initialSlide: 1,
    centerMode: true,
    centerPadding: false,
    slidesToShow: 3,
    speed: 500,
    nextArrow: '<button class="place__slick place__slick-next" type="button"><svg width="15" height="20" class="place__arrow place__arrow-next"><use href="img/sprite-svg.svg#arrow-next"></use></svg></button>',
    prevArrow: '<button class="place__slick place__slick-prev" type="button"><svg width="15" height="20" class="place__arrow place__arrow-prev"><use href="img/sprite-svg.svg#arrow-prev"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 690,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });

  ///////////___mask-tel___////////

  $(function(){
    $('input[name="phone"]').mask("+7-(999)-999-99-99");
  });

  ///////////___form___////////

  $(".field-select_select").select2({
    minimumResultsForSearch: Infinity,
    dropdownAutoWidth : true,
    width: 'auto'
  });

  $('.field-calendar__input-arrow--start').on('click', function() {
    $('.field-calendar__start').toggleClass('field-calendar__start--open');
  });

  $('.field-calendar__input-arrow--start').on('click', function() {
    $('.field-calendar__input-arrow--start').toggleClass('field-calendar__input-arrow--open');
  });

  $('.field-calendar__input-arrow--end').on('click', function() {
    $('.field-calendar__end').toggleClass('field-calendar__end--open');
  });

  $('.field-calendar__input-arrow--end').on('click', function() {
    $('.field-calendar__input-arrow--end').toggleClass('field-calendar__input-arrow--open');
  });

  $(".field-calendar__start, .field-calendar__end").datepicker({
    inline: true,
    firstDay: 2,
    showOtherMonths: true,
    monthNames: ['Январь ','Февраль ','Март ','Апрель ','Май ','Июнь ', 'Июль ','Август ','Сентябрь ','Октябрь ','Ноябрь ','Декабрь '],
    dayNamesMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  });


  $('.field-select__input-arrow').on('click', function() {
    $('.field-select__family').toggleClass('field-select__family--open');
  });

  $('.field-select__input-arrow').on('click', function() {
    $('.field-select__input-arrow').toggleClass('field-select__input-arrow--open');
  });



  ///////////___map___////////

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
          center: [25.643382, -89.918584],
          zoom: 6
        }, {
          searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #000; font-weight: 300; text-align: center; font-size: 16px;\n' +
            'line-height: 19px;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([26.119480, -80.169761], {
          iconContent: 'Форт Лодердейл'
        }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/placeholder.png',
          iconImageSize: [30, 30],
          iconImageOffset: [-24, -24],
          iconContentOffset: [15, 15],
          iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);
  });
});
// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// // ready(function(){
//   // code
//   var map;
//   function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: -34.397, lng: 150.644},
//       zoom: 8
//     });
//   }
// // });



