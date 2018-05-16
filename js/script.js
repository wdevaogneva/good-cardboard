$(document).ready(function(){

	//инициация анимационного файла WOW
	new WOW().init();

	//плавная прокрутка к якорю
	$("#menu-close").on("click","a", function (event) {
	  //отменяем стандартную обработку нажатия по ссылке
	  event.preventDefault();
		//забираем идентификатор бока с атрибута href
	  let id  = $(this).attr('href'),
	  //узнаем высоту от начала страницы до блока на который ссылается якорь
	  top = $(id).offset().top;
	  //анимируем переход на расстояние - top за 1500 мс
	  $('body,html').animate({scrollTop: top}, 1500);
	});

	// Маска ввода номера телефона (плагин maskedinput)
	$("#number").mask("+7(999)999-99-99");
	$("#number2").mask("+7(999)999-99-99");
	$("#number3").mask("+7(999)999-99-99");
	$("#number4").mask("+7(999)999-99-99");

	//раскрывающееся мобильное меню

	let link = $('.menu-mobile-link'),
			link_active = $('.menu-mobile-link_active'),
			menu_on = $('.menu'),
			menu_ul = $('.menu-ul'),
			menu_li = $('.menu-li'),
			menu_link = $('.menu-link'),
			menu = $('.menu_min');

	link.click(function(){
		/*добавляем классы*/
		link.toggleClass('menu-mobile-link_active');
		menu_on.toggleClass('menu_min');
		menu_ul.toggleClass('menu_min-ul');
		menu_li.toggleClass('menu_min-li');
		menu_link.toggleClass('menu_min-link');
		menu.toggleClass('menu_min_active');

	});	

	link_active.click(function(){
		/*удаляем классы*/
		link.removeClass('menu-mobile-link_active');
		menu.removeClass('menu_min_active');
		menu_link.removeClass('menu_min-link');
		menu_li.removeClass('menu_min-li');
		menu_ul.removeClass('menu_min-ul');
		menu_on.removeClass('menu_min');
	});

	//отправка формы на почту через ajax.

	$('#main-form').submit(function() {
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thx').fadeIn();
			$(this).find('input').val('');
			$('#main-form').trigger('reset');
		});
		return false;
	});	

	$('#form').submit(function() {
				$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function() {
				$('.js-overlay-thx').fadeIn();
				$(this).find('input').val('');
				$('#form').trigger('reset');
			});
			return false;
	});	

	$('#offer-form').submit(function() {
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thx').fadeIn();
			$(this).find('input').val('');
			$('#offer-form').trigger('reset');
		});
		return false;
	});

	$('#consultation-form').submit(function() {
		$.ajax({
			type: "POST",
			url: "mailer/consultation.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thx').fadeIn();
			$(this).find('input').val('');
			$('#consultation-form').trigger('reset');
		});
		return false;
	});	

	// Всплывающие окна-формы
	$('.header-contacts__button').on("click", function(){
		$('.overlay-js').fadeIn();
		$('body').css('overflow','hidden');
	});

	$('.button_contacts').on("click", function(){
		$('.overlay-js').fadeIn();
		$('body').css('overflow','hidden');
	});

	$('.popup-close').on("click", function(){
		$('.overlay-js').fadeOut();
		$('body').css('overflow','visible');
	});

	$('.button-consultation').on("click", function(){
		$('.overlay-consultation').fadeIn();
		$('body').css('overflow','hidden');
	});

	$('.popup-close-consultation').on("click", function(){
		$('.overlay-consultation').fadeOut();
		$('body').css('overflow','visible');
	});

	let det = $('.details'),
			ov_prod = $('.overlay-products');
	$('.products').delegate('.details', "click", function(event){
		let target = event.target;
			for (let i = 0; i < det.length; i++) {
				if (target == det[i]) {
					$('.overlay-products:eq('+i+')').addClass('overlay-products_show');
					$('body').css('overflow','hidden');
					break;
				}

			}
	});

	$('.products-description-close').on("click", function(){
		$('.overlay-products').removeClass('overlay-products_show');
		$('body').css('overflow','visible');
	});


	// Закрытие модульных окон-форм по клику вне попапа
	$(document).mouseup(function (e) {
	    var popup = $('.popup');
	    if (e.target!=popup[0] && popup.has(e.target).length === 0){
	        $('.js-overlay').fadeOut();
	        $('body').css('overflow','visible');
	    }
	});

	$(document).mouseup(function (e) {
	    var popup = $('.overlay-products');
	    if (e.target!=popup[0] && popup.has(e.target).length === 0){
	        $('.overlay-products').removeClass('overlay-products_show');
	        $('body').css('overflow','visible');
	    }
	});

	$(document).mouseup(function (e) {
	    var popup = $('.popup-consultation');
	    if (e.target!=popup[0] && popup.has(e.target).length === 0){
	        $('.overlay-consultation').fadeOut();
	        $('body').css('overflow','visible');
	    }
	});

		// Закрытие окна «спасибо»
	$('.js-close-thx').click(function() { // по клику на крестик
		$('.js-overlay-thx').fadeOut();
		$('body').css('overflow','visible');
	});

	$(document).mouseup(function (e) { // по клику вне попапа
	    var popup = $('.popup-thx');
	    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
	        $('.js-overlay-thx').fadeOut();
	        $('body').css('overflow','visible');
	    }
	});
  

	//слайдер с http://kenwheeler.github.io/slick/

	$('.production-slider__top').slick({
	 	arrows: false,
	 	slidesToShow: 1,
	 	slidesToScroll: 1,
	 	fade: true,
	 	prevArrow: '<div class="slider-arrow slider-arrow__left slider-arrow__left_feedback"></div>',
	 	nextArrow: '<div class="slider-arrow slider-arrow__right slider-arrow__right_feedback"></div>',
	 	asNavFor: '.production-slider__bottom',
	 	responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: true,
	      }
	    }
	  ]

	});

	$('.production-slider__bottom').slick({
	 	arrows: true,
	 	slidesToShow: 3,
	 	slidesToScroll: 1,
	 	focusOnSelect: true,
	 	centerMode: true,
	 	prevArrow: '<div class="slider-arrow slider-arrow__left_prod slider-arrow__left"></div>',
	 	nextArrow: '<div class="slider-arrow slider-arrow__right_prod slider-arrow__right"></div>',
	 	asNavFor: '.production-slider__top',
	 	responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2
	      }
	    }
	  ]

	 });

	$('.feedback-slider').slick({
		arrows: true,
		slidesToShow: 3,
	 	slidesToScroll: 1,
	 	prevArrow: '<div class="slider-arrow slider-arrow__left_feedback slider-arrow__left"></div>',
	 	nextArrow: '<div class="slider-arrow slider-arrow__right_feedback slider-arrow__right"></div>',
	 		responsive: [
	 	   {
	 	     breakpoint: 992,
	 	     settings: {
	 	       slidesToShow: 2
	 	     }
	 	   },
	 	   {
	 	     breakpoint: 768,
	 	     settings: {
	 	       slidesToShow: 1
	 	     }
	 	   }
	 	 ]

	});

	$('.main-slider').slick({
		arrows: true,
		slidesToShow: 1,
	 	slidesToScroll: 1,
	 	prevArrow: '<div class="slider-arrow slider-arrow__left_feedback slider-arrow__left"></div>',
	 	nextArrow: '<div class="slider-arrow slider-arrow__right_feedback slider-arrow__right"></div>',
	 	autoplay: true,
	  autoplaySpeed: 2000,
	});
});






