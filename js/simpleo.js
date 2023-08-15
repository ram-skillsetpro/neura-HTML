var colarray = ['#F26C6C', '#4F4F4F', '#F6744B', '#FFA533', '#60A563', '#60A563' ];

$('.scroller-text .scroller-slide').click(function () {
	$(this).addClass('open');
	$(this).children('.scroller-slide-content').show('fast');
	$(this).siblings().removeClass('open');
	$(this).siblings().children('.scroller-slide-content').hide('fast');
	var index = $(this).index();
	console.log(index);
	var image = $('.scroller-image .scroller-image-container:nth-child('+(index + 1)+')');
	image.siblings().removeClass('open');
	image.addClass('open');
})

$('#loginbutton').click(function () {
	$('#login-popup').addClass('open');
})

$('#signupbutton').click(function () {
	$('#signup-popup').addClass('open');
})

$('#demobutton , #demobutton-2, #demobutton-3').click(function () {
	$('#demo-popup').addClass('open');
})

$('.close-popups').click(function () {
	$(this).closest('.open').removeClass('open');
})

$( document ).ready(function() {
		// $('.dashboard-control-wrapper > ul > li:first-child').addClass('open');
		$('.dashboard-control-wrapper > ul > li:first-child > ul').show('fast');
		$('.document-container-content > div:first-child').addClass('open');
		
		var breadcrumb = $('#breadcrumb-collapse');
		var breadcrumbLength = breadcrumb.children().length;
		if(breadcrumbLength > 7) {
			breadcrumb.children('li:nth-child(1)').addClass('open');
			breadcrumb.children('li:nth-child(' + (breadcrumbLength) + ')').addClass('open');
		} else if(breadcrumbLength > 5) {
			breadcrumb.children('li:nth-child(1)').addClass('open');
			breadcrumb.children('li:nth-child(2)').addClass('open');
			breadcrumb.children('li:nth-child(' + (breadcrumbLength - 1) + ')').addClass('open');
			breadcrumb.children('li:nth-child(' + (breadcrumbLength) + ')').addClass('open');
		} else if(breadcrumbLength <= 5){
			breadcrumb.children('li').addClass('open');
		}
		
		$('.file-item-icon span.team').each(function(index) {
			var rand = colarray[Math.floor(Math.random() * colarray.length)];
			$(this).css('background-color', rand);
		})
		
		$('.file-item-icon span.member.empty').each(function(index) {
			var rand = colarray[Math.floor(Math.random() * colarray.length)];
			$(this).css('background-color', rand);
		})
		

});

$('.dashboard-control-wrapper > ul > li').click(function () {
	if($(this).children('ul').length > 0) {
		$(this).addClass('open');
		$(this).children('ul').show('fast');
		$(this).siblings().removeClass('open');
		$(this).siblings().children('ul').hide('fast');
	}
})

$('#showuploader').click(function () {
	$('#uploader').slideToggle('fast');
	$('#addfolder').slideUp('fast');
	$('#showfolderdialog').text('Add Folder');
	if($(this).hasClass('opened')) {
		$(this).text('Upload');
		$(this).removeClass('opened');
	} else {
		$(this).text('Close');
		$(this).addClass('opened');
	}
})

$('#showfolderdialog').click(function () {
	$('#addfolder').slideToggle('fast');
	$('#uploader').slideUp('fast');
	$('#showuploader').text('Upload');
	if($(this).hasClass('opened')) {
		$(this).text('Add Folder');
		$(this).removeClass('opened');
	} else {
		$(this).text('Close');
		$(this).addClass('opened');
	}
})

$('#showaddteam').click(function () {
	$('#addteam').slideToggle('fast');
	if($(this).hasClass('opened')) {
		$(this).text('Add New Team');
		$(this).removeClass('opened');
	} else {
		$(this).text('Close');
		$(this).addClass('opened');
	}
})

$('.dashboard-control-wrapper > ul > li > ul > li').click(function () {
	if($(this).children('ul').length > 0) {
		$(this).addClass('open');
		$(this).children('ul').show('fast');
		$(this).siblings().removeClass('open');
		$(this).siblings().children('ul').hide('fast');
	}
})

$('.document-container-tabs > ul > li').click(function () {
	$(this).addClass('active-tab');
	$(this).siblings().removeClass('active-tab');
	var index = $(this).index();
	var dataShow = $('.document-container-content > div:nth-child('+(index + 1)+')')
	dataShow.siblings().removeClass('open');
	dataShow.addClass('open');
});