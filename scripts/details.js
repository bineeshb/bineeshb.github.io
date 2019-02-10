var skills = {
  master: [],
  expert: [],
  proficient: [
    { skill: "HTML", position: "right", styleClass: "skill_html" },
    { skill: "CSS", position: "right", styleClass: "skill_css" },
    { skill: "JavaScript", position: "left", styleClass: "skill_js" },
    { skill: "jQuery", position: "left", styleClass: "skill_jq" },
    { skill: "Rivets.js", position: "left", styleClass: "skill_rivet" },
    { skill: "Underscore.js", position: "left", styleClass: "skill_underscore" },
    { skill: "SCSS", position: "right", styleClass: "skill_scss" },
    { skill: "BootStrap", position: "right", styleClass: "skill_bootstrap" }
  ],
  familiar: [
    { skill: "Backbone.js", position: "left", styleClass: "skill_backbone" },
    { skill: "Photoshop", position: "right", styleClass: "skill_photoshop" },
    { skill: "Angular 2+", position: "left", styleClass: "skill_angular" }
  ],
  beginner: []
};

var experienceDetails = [
  {
    from: "Sep 2007",
    to: "May 2011",
    organisation: "R.M.K Engineering College",
    location: "Gummudipondi",
    profile: [
      { role: "Under Graduate", description: ["Electrical and Electronics Engineering"] }
    ]
  },
  {
    from: "Sep 2011",
    to: "Dec 2016",
    organisation: "Tata Consultancy Services",
    location: "Chennai",
    profile: [
      { role: "Web Developer", description: ["For a Banking client"] },
      { role: "Production Support Executive", description: ["For a Telecom client"] }
    ]
  },
  {
    from: "Dec 2016",
    to: "Present",
    organisation: "Cognizant Technology Solutions",
    location: "Chennai",
    profile: [
      { role: "Senior Developer", description: ["For a Pharmaceutical client", "For a Logistics client"] }
    ]
  }
];

var githubUsername = "bineeshb";
var reposUrl = `https://api.github.com/users/${githubUsername}/repos?sort=updated&type=all`;
var portfolioUrl = "https://bineeshb.github.io/";

var contactDetails = [
  { iconClass: "fa-linkedin", displayText: "bineesh-balasubramanian", link: "https://in.linkedin.com/in/bineesh-balasubramanian-5b9223b5" },
  { iconClass: "fa-facebook", displayText: "bineesh.balasubramanian", link: "https://www.facebook.com/bineesh.balasubramanian" },
  { iconClass: "fa-github", displayText: "bineeshb", link: "https://github.com/bineeshb" }
];