/**
 * Handlebars Helpers
 */
Handlebars.registerHelper('counter', function (index) {
  return index + 1;
});

var $window = $(window);
var sectionLinks = [];

$('body').ready(function () {
  renderSkills();
  renderExperiences();
  getWorks();
  renderFooter();

  $('nav a').each(function () {
    sectionLinks.push($(this).attr('href'));
  });

  $('.nav-bar #nav-menu-btn').click(function () {
    $('.nav-bar').toggleClass('open');
  });

  $('a[href*="#"]:not([href="#"])').click(function () {
    $('.nav-bar').removeClass('open');
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

  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');
});

/** 
 * Render Skills
 */
function renderSkills() {
  var $skillsSection = $('#skills .skills-container');
  var $skillsTemplate = $('#skills-template').html();
  var compiledSkills = Handlebars.compile($skillsTemplate);
  var displaySkills = Object.keys(skills).map(function (level) {
    return {
      skillLevel: level,
      technologies: skills[level]
    };
  });
  $skillsSection.html(compiledSkills(displaySkills));
}

/** 
 * Render Experience details
 */
function renderExperiences() {
  var $experienceSection = $('#experience .experience-container');
  var $experienceTemplate = $('#experience-template').html();
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
      Accept: 'application/vnd.github.mercy-preview+json'
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
  var $ownWorksSection = $('.own-works');
  var $contributedWorksSection = $('.contributed-works');
  var $worksTemplate = $('#works-template').html();
  var compiledWorkDetails = Handlebars.compile($worksTemplate);
  var ownRepos = {
    repos: [],
    isOwn: true,
  };
  var contributedRepos = {
    repos: [],
    isOwn: false,
  };

  repos.filter(function (eachRepo) {
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
    }
    // else {
    //   contributedRepos.repos.push(repoDetails);
    // }
  });

  if (ownRepos.repos.length > 0) {
    $ownWorksSection.html(compiledWorkDetails(ownRepos));
  }

  if (contributedRepos.repos.length > 0) {
    $contributedWorksSection.html(compiledWorkDetails(contributedRepos));
  }

  if (ownRepos.repos.length > 0 || contributedRepos.repos.length > 0) {
    $('.section-works').removeClass('d-none');
    $('.link-works').removeClass('d-none');
  }
}

/**
 * Render Footer
 */
function renderFooter() {
  var $footerCopyright = $('.copyright-info');
  var $footerTemplate = $('#footer-copyright-template').html();
  var compiledFooter = Handlebars.compile($footerTemplate);
  var currentYear = (new Date()).getFullYear();
  $footerCopyright.html(compiledFooter(currentYear));

  var $footerContact = $('.footer-contact');
  var $footerContactTemplate = $('#footer-contact-template').html();
  var compiledFooterContact = Handlebars.compile($footerContactTemplate);
  $footerContact.html(compiledFooterContact(contactDetails));
}

function checkIfInView() {
  var windowHeight = $window.height();
  var windowTopPos = $window.scrollTop();
  var windowBottomPos = (windowTopPos + windowHeight);

  var linkToBeActive = sectionLinks.find(function (linkId) {
    var sectionPos = $(linkId).offset().top;
    var sectionHeight = $(linkId).height();

    return windowTopPos >= sectionPos && windowTopPos < (sectionPos + sectionHeight);
  });

  if (linkToBeActive) {
    $('nav a[href="' + linkToBeActive + '"]').addClass('active');
    history.pushState(null, null, linkToBeActive);
  }

  sectionLinks.filter(function (linkId) { return linkId !== linkToBeActive })
    .forEach(function (linkId) {
      $('nav a[href="' + linkId + '"]').removeClass('active');
    });

  Array.from($('.animation_elements')).filter(function (el) {
    var $el = $(el);
    var elHeight = $el.outerHeight();
    var elTopPos = $el.offset().top;
    var elBottomPos = elTopPos + elHeight;

    return $el.hasClass('animation_elements') && (elBottomPos >= windowTopPos) && (elTopPos <= windowBottomPos);
  }).forEach(function (el) {
    $(el).removeClass('animation_elements');
  });
}
