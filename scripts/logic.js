/** Handlebars Helpers */
Handlebars.registerHelper("counter", function (index) {
    return index + 1;
});

$("body").ready(function () {

    /** Render Skills */
    var $skillsSection = $("#skills .skills-container");
    var $skillsTemplate = $("#skills-template").html();
    var compiledSkills = Handlebars.compile($skillsTemplate);
    $skillsSection.html(compiledSkills(skills));

    /** Render Experience details */
    var $experienceSection = $("#experience .experience-container");
    var $experienceTemplate = $("#experience-template").html();
    var compiledExpDetails = Handlebars.compile($experienceTemplate);
    $experienceSection.html(compiledExpDetails(experienceDetails));

    /** Fetch and render Works */
    var isWorksFetched = false;
    var $worksSection = $(".works-container");
    var $worksTemplate = $("#works-template").html();
    var compiledWorkDetails = Handlebars.compile($worksTemplate);
    var repoDetails = [];

    $.ajax({
        url: reposUrl,
        success: function (repos) {
            isWorksFetched = (repos.length > 0);
            if (isWorksFetched) {
                repos.forEach(function (eachRepo) {
                    repoDetails.push({
                        name: eachRepo.name,
                        description: eachRepo.description,
                        homepage: (eachRepo.homepage !== portfolioUrl) ? eachRepo.homepage : "",
                        svn_url: eachRepo.svn_url
                    });
                });
                $worksSection.html(compiledWorkDetails(repoDetails));
            }
        }
    });


    /** Render Contact details */
    var $contactSection = $("#contact .cards");
    var $contactTemplate = $("#contact-template").html();
    var compiledContactDetails = Handlebars.compile($contactTemplate);
    $contactSection.html(compiledContactDetails(contactDetails));

    var linksId = [];

    $('nav a').each(function () {
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

        $.each(linksId, function (index, theID) {
            var sectionPos = $(theID).offset().top;
            var sectionHeight = $(theID).height();
            if (windowTopPos >= sectionPos && windowTopPos < (sectionPos + sectionHeight)) {
                $("nav a[href='" + theID + "']").addClass("active");
            } else {
                $("nav a[href='" + theID + "']").removeClass("active");
            }
        });

        $.each($animationElements, function () {
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