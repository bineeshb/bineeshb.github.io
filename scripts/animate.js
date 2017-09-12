$("body").ready(function () {
	var linksId = [];
	
	$('nav a').each(function() {
		linksId.push($(this).attr("href"));
	});
	
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    var $animationElements = $('.animation_elements');
    var $window = $(window);

    function checkIfInView() {
        var windowHeight = $window.height();
        var windowTopPos = $window.scrollTop();
        var windowBottomPos = (windowTopPos + windowHeight);
		
		$.each(linksId, function(index, theID) {
			var sectionPos = $(theID).offset().top;
			var sectionHeight = $(theID).height();
			if(windowTopPos >= sectionPos && windowTopPos < (sectionPos + sectionHeight)) {
				$("nav a[href='" + theID + "']").addClass("active");
			} else {
				$("nav a[href='" + theID + "']").removeClass("active");
			}
		});

        $.each($animationElements, function() {
            var $element = $(this);

            if ($element.hasClass('animation_elements')) {
                var elementHeight = $element.outerHeight();
                var elementTopPos = $element.offset().top;
                var elemBottomPos = (elementTopPos + elementHeight);

                if ((elemBottomPos >= windowTopPos) && (elementTopPos <= windowBottomPos)) {
                    $element.removeClass('animation_elements');
                }
            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});