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
		
		$('.sharing span.icon.member.empty').each(function(index) {
			var rand = colarray[Math.floor(Math.random() * colarray.length)];
			$(this).css('background-color', rand);
			console.log('Hello Dolly');
		})
		
		$('.file-item-icon span.team').each(function(index) {
			var rand = colarray[Math.floor(Math.random() * colarray.length)];
			$(this).css('background-color', rand);
		})
		
		$('.file-item-icon span.member.empty').each(function(index) {
			var rand = colarray[Math.floor(Math.random() * colarray.length)];
			$(this).css('background-color', rand);
		})
		
		$('.stats-wrapper > ul > li:first-child ul').show();
		$('.stats-wrapper > ul > li:first-child').addClass('open');
		
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
	$('#linkuploader').slideUp('fast');
	if($(this).hasClass('opened')) {
		$(this).removeClass('opened');
	} else {
		$(this).addClass('opened');
	}
})

$('#showfolderdialog').click(function () {
	$('#addfolder').slideToggle('fast');
	$('#uploader').slideUp('fast');
	$('#linkuploader').slideUp('fast');
	if($(this).hasClass('opened')) {
		$(this).removeClass('opened');
	} else {
		$(this).addClass('opened');
	}
})

$('#showlinkuploader').click(function () {
	$('#linkuploader').slideToggle('fast');
	$('#uploader').slideUp('fast');
	$('#addfolder').slideUp('fast');
	if($(this).hasClass('opened')) {
		$(this).removeClass('opened');
	} else {
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

$('.dashboard-viewer-tabs > ul > li').click(function () {
	$(this).addClass('active-tab');
	$(this).siblings().removeClass('active-tab');
	var index = $(this).index();
	var dataShow = $('.document-container-content > div:nth-child('+(index + 1)+')')
	dataShow.siblings().removeClass('open');
	dataShow.addClass('open');
});


$('.has-dropdown').click(function () {
	if($(this).children('.dropdown-list').hasClass('opened')) {
		$(this).children('.dropdown-list').hide('fast');
		$(this).children('.dropdown-list').removeClass('opened');
	} else {
		$('.has-dropdown').children('.dropdown-list').removeClass('opened');
		$('.has-dropdown').children('.dropdown-list').hide('fast');
		$(this).children('.dropdown-list').addClass('opened');
		$(this).children('.dropdown-list').show('fast');
	}
});

$('.app-close-popups').click(function () {
	$(this).parents('.files-container-list').slideUp('fast');
})

$('.showshare').click(function () {
	$('#share-popup').addClass('open');
})

$('.stats-wrapper > ul > li').click(function () {
	if($(this).children('ul').length > 0) {
		$(this).addClass('open');
		$(this).children('ul').show('fast');
		$(this).siblings().removeClass('open');
		$(this).siblings().children('ul').hide('fast');
	}
})

//Added by Santosh
$('#tabs-nav li:first-child').addClass('active');
$('.app-content-wrap').hide();
$('.app-content-wrap:first').show();

// Click function
$('#tabs-nav li').click(function(){
$('#tabs-nav li').removeClass('active');
$(this).addClass('active');
$('.app-content-wrap').hide();

var activeTab = $(this).find('a').attr('href');
$(activeTab).fadeIn();
return false;
});
// header icon tab
$('.app-icon-tab').on('click', function(evt) {
	evt.preventDefault();
	$('.app-icon-tab').removeClass('active');
	$(this).addClass('active');
	var sel = this.getAttribute('data-toggle-target');
	$('.right-tab-content').removeClass('active').filter(sel).addClass('active');
});
//right sharing tab
$('.app-summary-tab-section > ul > li.tab-icon').click(function () {
if($(this).children('ul').length > 0) {
$(this).addClass('open');
$(this).children('ul').show('fast');
$(this).siblings().removeClass('open');
$(this).siblings().children('ul').hide('fast');
}
})

//Added by shubham
$('.identify-btn').click(function(){
$(this).siblings('.filter-menu-card').toggleClass('active');
$(this).parents().siblings().children('.filter-menu-card').removeClass('active');
});

//right sharing tab
// header icon tab
$('.heading-collapse').on('click', function(evt) {
	evt.preventDefault();
	$('.heading-collapse').removeClass('arrow-down');
	$(this).addClass('arrow-down');
	var sel = this.getAttribute('data-toggle-target');
	$('.box-component').removeClass('active').filter(sel).addClass('active');
});

