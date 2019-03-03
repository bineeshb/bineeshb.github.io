/**
 * Handlebars Helpers
 */
Handlebars.registerHelper("counter", function (index) {
  return index + 1;
});

var $window = $(window);

$("body").ready(function () {
  renderSkills();
  renderExperiences();
  getWorks();
  renderContactDetails();
  renderFooter();

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

  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');
});

/** 
 * Render Skills
 */
function renderSkills() {
  var $skillsSection = $("#skills .skills-container");
  var $skillsTemplate = $("#skills-template").html();
  var compiledSkills = Handlebars.compile($skillsTemplate);
  $skillsSection.html(compiledSkills(skills));
}

/** 
 * Render Experience details
 */
function renderExperiences() {
  var $experienceSection = $("#experience .experience-container");
  var $experienceTemplate = $("#experience-template").html();
  var compiledExpDetails = Handlebars.compile($experienceTemplate);
  experienceDetails.sort(function(exp1, exp2) {
    return exp2.from - exp1.from;
  });
  experienceDetails.forEach(function(exp) {
    exp.from = getMonthYearLabel(exp.from);
    exp.to = getMonthYearLabel(exp.to);
  });
  $experienceSection.html(compiledExpDetails(experienceDetails));
}

/**
 * Returns Month Year label
 * @param {number} yearMonth 
 */
function getMonthYearLabel(yearMonth) {
  var dateString, dateObj;

  if (isFinite(yearMonth)) {
    dateString = yearMonth.substring(0, 4) + '-' + yearMonth.substring(4);
    dateObj = new Date(dateString);

    return months[dateObj.getMonth()] + ' ' + dateObj.getFullYear();
  } else {
    return yearMonth;
  }
}

/**
 * Get Works from online repos 
 */
function getWorks() {
  $.ajax({
    url: reposUrl,
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    },
    success: function (repos) {
      if (repos.length > 0) {
        renderWorks(repos);
      }
    }
  });
}

/**
 * Render Works
 */
function renderWorks(repos) {
  var $ownWorksSection = $(".own-works"),
      $contributedWorksSection = $(".contributed-works"),
      $worksTemplate = $("#works-template").html(),
      compiledWorkDetails = Handlebars.compile($worksTemplate),
      ownRepos = {
        repos: [],
        isOwn: true,
      },
      contributedRepos = {
        repos: [],
        isOwn: false,
      };

  repos.filter(function(eachRepo) {
    return (eachRepo.topics && eachRepo.topics.length > 0) || eachRepo.description;
  }).forEach(function (eachRepo) {
    var repoDetails = {
      name: eachRepo.name,
      language: eachRepo.language ? eachRepo.language.toLowerCase() : null,
      topics: eachRepo.topics,
      description: eachRepo.description,
      homepage: (eachRepo.homepage !== portfolioUrl) ? eachRepo.homepage : null,
      repoUrl: eachRepo.svn_url
    };

    if (eachRepo.owner.login === githubUsername) {
      ownRepos.repos.push(repoDetails);
    } else {
      contributedRepos.repos.push(repoDetails);
    }
  });

  if (ownRepos.repos.length > 0) {
    $ownWorksSection.html(compiledWorkDetails(ownRepos));
  }

  if (contributedRepos.repos.length > 0) {
    $contributedWorksSection.html(compiledWorkDetails(contributedRepos));
  }
}

/**
 * Render Contact details
 */
function renderContactDetails() {
  var $contactSection = $("#contact .cards");
  var $contactTemplate = $("#contact-template").html();
  var compiledContactDetails = Handlebars.compile($contactTemplate);
  $contactSection.html(compiledContactDetails(contactDetails));
}

/**
 * Render Footer
 */
function renderFooter() {
  var $footer = $("footer");
  var $footerTemplate = $("#footer-template").html();
  var compiledFooter = Handlebars.compile($footerTemplate);
  var currentYear = (new Date()).getFullYear();
  $footer.html(compiledFooter(currentYear));
}

function checkIfInView() {
  var $animationElements = $('.animation_elements');
  var windowHeight = $window.height();
  var windowTopPos = $window.scrollTop();
  var windowBottomPos = (windowTopPos + windowHeight);
  var linksId = [];

  $('nav a').each(function () {
    linksId.push($(this).attr("href"));
  });

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