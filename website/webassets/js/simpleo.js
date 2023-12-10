var colarray = ['#F26C6C', '#4F4F4F', '#F6744B', '#FFA533', '#60A563', '#60A563' ];

jQuery('.scroller-text .scroller-slide').click(function () {
	jQuery(this).addClass('open');
	jQuery(this).children('.scroller-slide-content').show('fast');
	jQuery(this).siblings().removeClass('open');
	jQuery(this).siblings().children('.scroller-slide-content').hide('fast');
	var index = jQuery(this).index();
	console.log(index);
	var image = jQuery('.scroller-image .scroller-image-container:nth-child('+(index + 1)+')');
	image.siblings().removeClass('open');
	image.addClass('open');
})

jQuery('#loginbutton').click(function () {
	jQuery('#login-popup').addClass('open');
})

jQuery('#signupbutton').click(function () {
	jQuery('#signup-popup').addClass('open');
})

jQuery('#demobutton , #demobutton-2, #demobutton-3').click(function () {
	jQuery('#demo-popup').addClass('open');
})

jQuery('.close-popups').click(function () {
	jQuery(this).closest('.open').removeClass('open');
})

jQuery( document ).ready(function() {
		// jQuery('.dashboard-control-wrapper > ul > li:first-child').addClass('open');
		jQuery('.dashboard-control-wrapper > ul > li:first-child > ul').show('fast');
		jQuery('.document-container-content > div:first-child').addClass('open');
		
		var breadcrumb = jQuery('#breadcrumb-collapse');
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
		
		jQuery('.sharing span.icon.member.empty').each(function(index) {
			var rand = colarray[Math.floor(Math.random() * colarray.length)];
			jQuery(this).css('background-color', rand);
			console.log('Hello Dolly');
		})
		
		jQuery('.file-item-icon span.team').each(function(index) {
			var rand = colarray[Math.floor(Math.random() * colarray.length)];
			jQuery(this).css('background-color', rand);
		})
		
		jQuery('.file-item-icon span.member.empty').each(function(index) {
			var rand = colarray[Math.floor(Math.random() * colarray.length)];
			jQuery(this).css('background-color', rand);
		})
		
		jQuery('.stats-wrapper > ul > li:first-child ul').show();
		jQuery('.stats-wrapper > ul > li:first-child').addClass('open');
		
});

jQuery('.dashboard-control-wrapper > ul > li').click(function () {
	if(jQuery(this).children('ul').length > 0) {
		jQuery(this).addClass('open');
		jQuery(this).children('ul').show('fast');
		jQuery(this).siblings().removeClass('open');
		jQuery(this).siblings().children('ul').hide('fast');
	}
})

jQuery('#showuploader').click(function () {
	jQuery('#uploader').slideToggle('fast');
	jQuery('#addfolder').slideUp('fast');
	jQuery('#linkuploader').slideUp('fast');
	if(jQuery(this).hasClass('opened')) {
		jQuery(this).removeClass('opened');
	} else {
		jQuery(this).addClass('opened');
	}
})

jQuery('#showfolderdialog').click(function () {
	jQuery('#addfolder').slideToggle('fast');
	jQuery('#uploader').slideUp('fast');
	jQuery('#linkuploader').slideUp('fast');
	if(jQuery(this).hasClass('opened')) {
		jQuery(this).removeClass('opened');
	} else {
		jQuery(this).addClass('opened');
	}
})

jQuery('#showlinkuploader').click(function () {
	jQuery('#linkuploader').slideToggle('fast');
	jQuery('#uploader').slideUp('fast');
	jQuery('#addfolder').slideUp('fast');
	if(jQuery(this).hasClass('opened')) {
		jQuery(this).removeClass('opened');
	} else {
		jQuery(this).addClass('opened');
	}
})

jQuery('#showaddteam').click(function () {
	jQuery('#addteam').slideToggle('fast');
	if(jQuery(this).hasClass('opened')) {
		jQuery(this).text('Add New Team');
		jQuery(this).removeClass('opened');
	} else {
		jQuery(this).text('Close');
		jQuery(this).addClass('opened');
	}
})

jQuery('.dashboard-control-wrapper > ul > li > ul > li').click(function () {
	if(jQuery(this).children('ul').length > 0) {
		jQuery(this).addClass('open');
		jQuery(this).children('ul').show('fast');
		jQuery(this).siblings().removeClass('open');
		jQuery(this).siblings().children('ul').hide('fast');
	}
})

jQuery('.dashboard-viewer-tabs > ul > li').click(function () {
	jQuery(this).addClass('active-tab');
	jQuery(this).siblings().removeClass('active-tab');
	var index = jQuery(this).index();
	var dataShow = jQuery('.document-container-content > div:nth-child('+(index + 1)+')')
	dataShow.siblings().removeClass('open');
	dataShow.addClass('open');
});


jQuery('.has-dropdown').click(function () {
	if(jQuery(this).children('.dropdown-list').hasClass('opened')) {
		jQuery(this).children('.dropdown-list').hide('fast');
		jQuery(this).children('.dropdown-list').removeClass('opened');
	} else {
		jQuery('.has-dropdown').children('.dropdown-list').removeClass('opened');
		jQuery('.has-dropdown').children('.dropdown-list').hide('fast');
		jQuery(this).children('.dropdown-list').addClass('opened');
		jQuery(this).children('.dropdown-list').show('fast');
	}
});

jQuery('.app-close-popups').click(function () {
	jQuery(this).parents('.files-container-list').slideUp('fast');
})

jQuery('.showshare').click(function () {
	jQuery('#share-popup').addClass('open');
})

jQuery('.stats-wrapper > ul > li').click(function () {
	if(jQuery(this).children('ul').length > 0) {
		jQuery(this).addClass('open');
		jQuery(this).children('ul').show('fast');
		jQuery(this).siblings().removeClass('open');
		jQuery(this).siblings().children('ul').hide('fast');
	}
})

//Added by Santosh
jQuery('#tabs-nav li:first-child').addClass('active');
jQuery('.app-content-wrap').hide();
jQuery('.app-content-wrap:first').show();

// Click function
jQuery('#tabs-nav li').click(function(){
jQuery('#tabs-nav li').removeClass('active');
jQuery(this).addClass('active');
jQuery('.app-content-wrap').hide();

var activeTab = jQuery(this).find('a').attr('href');
jQuery(activeTab).fadeIn();
return false;
});
// header icon tab
jQuery('.app-icon-tab').on('click', function(evt) {
	evt.preventDefault();
	jQuery('.app-icon-tab').removeClass('active');
	jQuery(this).addClass('active');
	var sel = this.getAttribute('data-toggle-target');
	jQuery('.right-tab-content').removeClass('active').filter(sel).addClass('active');
});
//right sharing tab
jQuery('.app-summary-tab-section > ul > li.tab-icon').click(function () {
if(jQuery(this).children('ul').length > 0) {
jQuery(this).addClass('open');
jQuery(this).children('ul').show('fast');
jQuery(this).siblings().removeClass('open');
jQuery(this).siblings().children('ul').hide('fast');
}
});
//  contact form submit 

jQuery(document).ready(function() {
	// Your key-value object
	const countryOptions = {
	     "+91" :  "IND(+91)" ,
		 "+61" :  "AUS(+61)" ,
		 "+1" :  "USA(+1)" ,
		 "+44" :  "GBR(+44)" ,
		 "+971" :  "UAE(+971)" ,
		 "+65" :  "SGP(+65)" ,
		 "+966" :  "SAU(+966)" ,
		 "+1" :  "CAN(+1)" ,
		 "+49" :  "DEU(+49)" ,
		 "+93" :  "AFG(+93)" ,
		 "+355" :  "ALB(+355)" ,
		 "+213" :  "DZA(+213)" ,
		 "+1684" :  "ASM(+1684)" ,
		 "+376" :  "AND(+376)" ,
		 "+244" :  "AGO(+244)" ,
		 "+1264" :  "AIA(+1264)" ,
		 "+672" :  "ATA(+672)" ,
		 "+1268" :  "ATG(+1268)" ,
		 "+54" :  "ARG(+54)" ,
		 "+374" :  "ARM(+374)" ,
		 "+297" :  "ABW(+297)" ,
		 "+43" :  "AUT(+43)" ,
		 "+994" :  "AZE(+994)" ,
		 "+1242" :  "BHS(+1242)" ,
		 "+973" :  "BHR(+973)" ,
		 "+880" :  "BGD(+880)" ,
		 "+1246" :  "BRB(+1246)" ,
		 "+375" :  "BLR(+375)" ,
		 "+32" :  "BEL(+32)" ,
		 "+501" :  "BLZ(+501)" ,
		 "+229" :  "BEN(+229)" ,
		 "+1441" :  "BMU(+1441)" ,
		 "+975" :  "BTN(+975)" ,
		 "+591" :  "BOL(+591)" ,
		 "+387" :  "BIH(+387)" ,
		 "+267" :  "BWA(+267)" ,
		 "+55" :  "BRA(+55)" ,
		 "+246" :  "IOT(+246)" ,
		 "+1284" :  "VGB(+1284)" ,
		 "+673" :  "BRN(+673)" ,
		 "+359" :  "BGR(+359)" ,
		 "+226" :  "BFA(+226)" ,
		 "+257" :  "BDI(+257)" ,
		 "+855" :  "KHM(+855)" ,
		 "+237" :  "CMR(+237)" ,
		 "+238" :  "CPV(+238)" ,
		 "+1345" :  "CYM(+1345)" ,
		 "+236" :  "CAF(+236)" ,
		 "+235" :  "TCD(+235)" ,
		 "+56" :  "CHL(+56)" ,
		 "+86" :  "CHN(+86)" ,
		 "+61" :  "CXR(+61)" ,
		 "+61" :  "CCK(+61)" ,
		 "+57" :  "COL(+57)" ,
		 "+269" :  "COM(+269)" ,
		 "+682" :  "COK(+682)" ,
		 "+506" :  "CRI(+506)" ,
		 "+385" :  "HRV(+385)" ,
		 "+53" :  "CUB(+53)" ,
		 "+599" :  "CUW(+599)" ,
		 "+357" :  "CYP(+357)" ,
		 "+420" :  "CZE(+420)" ,
		 "+243" :  "COD(+243)" ,
		 "+45" :  "DNK(+45)" ,
		 "+253" :  "DJI(+253)" ,
		 "+1767" :  "DMA(+1767)" ,
		 "+1809" :  "DOM(+1809)" ,
		 "+670" :  "TLS(+670)" ,
		 "+593" :  "ECU(+593)" ,
		 "+20" :  "EGY(+20)" ,
		 "+503" :  "SLV(+503)" ,
		 "+240" :  "GNQ(+240)" ,
		 "+291" :  "ERI(+291)" ,
		 "+372" :  "EST(+372)" ,
		 "+251" :  "ETH(+251)" ,
		 "+500" :  "FLK(+500)" ,
		 "+298" :  "FRO(+298)" ,
		 "+679" :  "FJI(+679)" ,
		 "+358" :  "FIN(+358)" ,
		 "+33" :  "FRA(+33)" ,
		 "+689" :  "PYF(+689)" ,
		 "+241" :  "GAB(+241)" ,
		 "+220" :  "GMB(+220)" ,
		 "+995" :  "GEO(+995)" ,
		 "+233" :  "GHA(+233)" ,
		 "+350" :  "GIB(+350)" ,
		 "+30" :  "GRC(+30)" ,
		 "+299" :  "GRL(+299)" ,
		 "+1473" :  "GRD(+1473)" ,
		 "+1671" :  "GUM(+1671)" ,
		 "+502" :  "GTM(+502)" ,
		 "+441481" :  "GGY(+441481)" ,
		 "+224" :  "GIN(+224)" ,
		 "+245" :  "GNB(+245)" ,
		 "+592" :  "GUY(+592)" ,
		 "+509" :  "HTI(+509)" ,
		 "+504" :  "HND(+504)" ,
		 "+852" :  "HKG(+852)" ,
		 "+36" :  "HUN(+36)" ,
		 "+354" :  "ISL(+354)" ,
		 "+62" :  "IDN(+62)" ,
		 "+98" :  "IRN(+98)" ,
		 "+964" :  "IRQ(+964)" ,
		 "+353" :  "IRL(+353)" ,
		 "+441624" :  "IMN(+441624)" ,
		 "+972" :  "ISR(+972)" ,
		 "+39" :  "ITA(+39)" ,
		 "+225" :  "CIV(+225)" ,
		 "+1876" :  "JAM(+1876)" ,
		 "+81" :  "JPN(+81)" ,
		 "+441534" :  "JEY(+441534)" ,
		 "+962" :  "JOR(+962)" ,
		 "+7" :  "KAZ(+7)" ,
		 "+254" :  "KEN(+254)" ,
		 "+686" :  "KIR(+686)" ,
		 "+383" :  "XKX(+383)" ,
		 "+965" :  "KWT(+965)" ,
		 "+996" :  "KGZ(+996)" ,
		 "+856" :  "LAO(+856)" ,
		 "+371" :  "LVA(+371)" ,
		 "+961" :  "LBN(+961)" ,
		 "+266" :  "LSO(+266)" ,
		 "+231" :  "LBR(+231)" ,
		 "+218" :  "LBY(+218)" ,
		 "+423" :  "LIE(+423)" ,
		 "+370" :  "LTU(+370)" ,
		 "+352" :  "LUX(+352)" ,
		 "+853" :  "MAC(+853)" ,
		 "+389" :  "MKD(+389)" ,
		 "+261" :  "MDG(+261)" ,
		 "+265" :  "MWI(+265)" ,
		 "+60" :  "MYS(+60)" ,
		 "+960" :  "MDV(+960)" ,
		 "+223" :  "MLI(+223)" ,
		 "+356" :  "MLT(+356)" ,
		 "+692" :  "MHL(+692)" ,
		 "+222" :  "MRT(+222)" ,
		 "+230" :  "MUS(+230)" ,
		 "+262" :  "MYT(+262)" ,
		 "+52" :  "MEX(+52)" ,
		 "+691" :  "FSM(+691)" ,
		 "+373" :  "MDA(+373)" ,
		 "+377" :  "MCO(+377)" ,
		 "+976" :  "MNG(+976)" ,
		 "+382" :  "MNE(+382)" ,
		 "+1664" :  "MSR(+1664)" ,
		 "+212" :  "MAR(+212)" ,
		 "+258" :  "MOZ(+258)" ,
		 "+95" :  "MMR(+95)" ,
		 "+264" :  "NAM(+264)" ,
		 "+674" :  "NRU(+674)" ,
		 "+977" :  "NPL(+977)" ,
		 "+31" :  "NLD(+31)" ,
		 "+599" :  "ANT(+599)" ,
		 "+687" :  "NCL(+687)" ,
		 "+64" :  "NZL(+64)" ,
		 "+505" :  "NIC(+505)" ,
		 "+227" :  "NER(+227)" ,
		 "+234" :  "NGA(+234)" ,
		 "+683" :  "NIU(+683)" ,
		 "+850" :  "PRK(+850)" ,
		 "+1670" :  "MNP(+1670)" ,
		 "+47" :  "NOR(+47)" ,
		 "+968" :  "OMN(+968)" ,
		 "+92" :  "PAK(+92)" ,
		 "+680" :  "PLW(+680)" ,
		 "+970" :  "PSE(+970)" ,
		 "+507" :  "PAN(+507)" ,
		 "+675" :  "PNG(+675)" ,
		 "+595" :  "PRY(+595)" ,
		 "+51" :  "PER(+51)" ,
		 "+63" :  "PHL(+63)" ,
		 "+64" :  "PCN(+64)" ,
		 "+48" :  "POL(+48)" ,
		 "+351" :  "PRT(+351)" ,
		 "+1787" :  "PRI(+1787)" ,
		 "+974" :  "QAT(+974)" ,
		 "+242" :  "COG(+242)" ,
		 "+262" :  "REU(+262)" ,
		 "+40" :  "ROU(+40)" ,
		 "+7" :  "RUS(+7)" ,
		 "+250" :  "RWA(+250)" ,
		 "+590" :  "BLM(+590)" ,
		 "+290" :  "SHN(+290)" ,
		 "+1869" :  "KNA(+1869)" ,
		 "+1758" :  "LCA(+1758)" ,
		 "+590" :  "MAF(+590)" ,
		 "+508" :  "SPM(+508)" ,
		 "+1784" :  "VCT(+1784)" ,
		 "+685" :  "WSM(+685)" ,
		 "+378" :  "SMR(+378)" ,
		 "+239" :  "STP(+239)" ,
		 "+221" :  "SEN(+221)" ,
		 "+381" :  "SRB(+381)" ,
		 "+248" :  "SYC(+248)" ,
		 "+232" :  "SLE(+232)" ,
		 "+1721" :  "SXM(+1721)" ,
		 "+421" :  "SVK(+421)" ,
		 "+386" :  "SVN(+386)" ,
		 "+677" :  "SLB(+677)" ,
		 "+252" :  "SOM(+252)" ,
		 "+27" :  "ZAF(+27)" ,
		 "+82" :  "KOR(+82)" ,
		 "+211" :  "SSD(+211)" ,
		 "+34" :  "ESP(+34)" ,
		 "+94" :  "LKA(+94)" ,
		 "+249" :  "SDN(+249)" ,
		 "+597" :  "SUR(+597)" ,
		 "+47" :  "SJM(+47)" ,
		 "+268" :  "SWZ(+268)" ,
		 "+46" :  "SWE(+46)" ,
		 "+41" :  "CHE(+41)" ,
		 "+963" :  "SYR(+963)" ,
		 "+886" :  "TWN(+886)" ,
		 "+992" :  "TJK(+992)" ,
		 "+255" :  "TZA(+255)" ,
		 "+66" :  "THA(+66)" ,
		 "+228" :  "TGO(+228)" ,
		 "+690" :  "TKL(+690)" ,
		 "+676" :  "TON(+676)" ,
		 "+1868" :  "TTO(+1868)" ,
		 "+216" :  "TUN(+216)" ,
		 "+90" :  "TUR(+90)" ,
		 "+993" :  "TKM(+993)" ,
		 "+1649" :  "TCA(+1649)" ,
		 "+688" :  "TUV(+688)" ,
		 "+1340" :  "VIR(+1340)" ,
		 "+256" :  "UGA(+256)" ,
		 "+380" :  "UKR(+380)" ,
		 "+598" :  "URY(+598)" ,
		 "+998" :  "UZB(+998)" ,
		 "+678" :  "VUT(+678)" ,
		 "+379" :  "VAT(+379)" ,
		 "+58" :  "VEN(+58)" ,
		 "+84" :  "VNM(+84)" ,
		 "+681" :  "WLF(+681)" ,
		 "+212" :  "ESH(+212)" ,
		 "+967" :  "YEM(+967)" ,
		 "+260" :  "ZMB(+260)" ,
		 "+263" :  "ZWE(+263)" ,
	    // Add more key-value pairs as needed
	};

	// Function to set options in the dropdown
	function setDropdownOptions(options) {
	    const dropdown = jQuery("#countryCode");

	    // Clear existing options
	    dropdown.empty();

	    // Iterate through the object and append options
	    jQuery.each(options, function(key, value) {
	        dropdown.append('<option value="' + key + '">' + value + '</option>');
	    });
	}

	// Call the function to set options
	setDropdownOptions(countryOptions);

	const formDataJson = {};
    jQuery("#submitBtn").click(function() {

    	jQuery("#submitBtn").attr("disabled", true);
    	jQuery("#submitBtn").css("background-color","#808080");


        // Get form data
        var formData = jQuery("#contactusform").serialize();
        console.log('formData>'+ formData)

        if (validateForm()) {        	
        	const formDataJsonString = JSON.stringify(formDataJson);	
        	console.log('formDataJsonString>'+ formDataJsonString)

        	jQuery('#validationmsg').html('');
        	jQuery('#validationmsg').addClass('loader');
            
            // Perform an AJAX POST request
	        jQuery.ajax({
	            type: "POST",
	            url: "https://alpha-api.simpleo.ai/v1/create-user",
	            data: formDataJsonString,
	            contentType: "application/json",
	            success: function(response) {
	            	// Handle the success response from the server
	                console.log(response.status);
	                //remove the loader
	                jQuery('#validationmsg').removeClass('loader');
	            	if(response.status == 200){
	            		jQuery('#validationmsg').html('Thank you for getting in touch. We will get back to you shortly!');
	            		jQuery("#validationmsg").show();
						jQuery('#contactusform').trigger("reset");
						
						setTimeout(function() {
							jQuery("#validationmsg").hide();
							jQuery('#validationmsg').html('');
							jQuery('#demo-popup').removeClass('open');
						}, 3000);
	            	} else {
	            		jQuery("#validationmsg").show();
            			jQuery("#validationmsg").html(response.message);
	            	}
	              	jQuery('#submitBtn').removeAttr("disabled");
	              	jQuery("#submitBtn").css("background-color", "var(--button-red)");
	              	
	            },
	            error: function(error) {
	                // Handle errors
	                console.error(error);
	                
	                jQuery('#validationmsg').removeClass('loader');
	                jQuery("#validationmsg").show();
            		jQuery("#validationmsg").html("Some issue in registering the user, please try after some time.");

            		jQuery('#submitBtn').removeAttr("disabled");
            		jQuery("#submitBtn").css("background-color", "var(--button-red)");
            		
	            }
	        });
        } else {
        	jQuery('#submitBtn').removeAttr("disabled");
        	jQuery("#submitBtn").css("background-color", "var(--button-red)");
        }

        
    });

    function validateForm() {
        // Add your validation logic here
        var isValid = true;

		jQuery("#validationmsg").hide();
        // Example validation: Check if Name is not empty
        var userName = jQuery("#userName").val();
        formDataJson['userName'] = userName.trim();
        if (userName.trim() === "") {
            jQuery("#validationmsg").show();
            jQuery("#validationmsg").html("Name is required");
            return false;
        }

        // Example validation: Check if Email is valid
        var email = jQuery("#emailId").val();
        formDataJson['emailId'] = email.trim();
        if (!isValidEmail(email)) {
            jQuery("#validationmsg").show();
            jQuery("#validationmsg").html("Invalid Email "+email);
            return false;
        }

		var countryCode = jQuery("#countryCode").val();
		formDataJson['countryCode'] = countryCode.trim();
		if (countryCode.trim() === "") {
            jQuery("#validationmsg").show();
            jQuery("#validationmsg").html("Country code is required");
            return false;
        }

        // Example validation: Check if Name is not empty
        var phone = jQuery("#phone").val();
        formDataJson['phone'] = phone.trim();
        if (phone.trim() === "") {
            jQuery("#validationmsg").show();
            jQuery("#validationmsg").html("Phone number is required");
            return false;
        }

        // Example validation: Check if Name is not empty
        var companyName = jQuery("#companyName").val();
        formDataJson['companyName'] = companyName.trim();
        if (companyName.trim() === "") {
            jQuery("#validationmsg").show();
            jQuery("#validationmsg").html("Company Name is required");
            return false;
        }

		// Example validation: Check if Terms checkbox is checked
		var isChecked = jQuery("#demoterms").is(":checked");
		console.log(isChecked);
		if(isChecked || isChecked == 'on'){
			formDataJson['terms'] = true;	
		} else {
			formDataJson['terms'] = false;
			jQuery("#validationmsg").show();
            jQuery("#validationmsg").html("Please agree to the Terms of service and Privacy Policy");
            return false;
		}

        return isValid;
    }

    function isValidEmail(email) {
        // Simple email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});