var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var skills = {
  master: [],
  expert: [],
  proficient: [
    { skill: "HTML", position: "right", styleClass: "skill-html" },
    { skill: "CSS", position: "right", styleClass: "skill-css" },
    { skill: "JavaScript", position: "left", styleClass: "skill-js" },
    { skill: "jQuery", position: "left", styleClass: "skill-jq" },
    { skill: "SCSS", position: "right", styleClass: "skill-scss" },
    { skill: "BootStrap", position: "right", styleClass: "skill-bootstrap" }
  ],
  familiar: [
    { skill: "Backbone.js", position: "left", styleClass: "skill-backbone" },
    { skill: "Photoshop", position: "right", styleClass: "skill-photoshop" },
    { skill: "Angular 2+", position: "left", styleClass: "skill-angular" },
    { skill: "TypeScript", position: "left", styleClass: "skill-ts" }
  ],
  beginner: []
};

var experienceDetails = [
  {
    from: "200709",
    to: "201105",
    organisation: "R.M.K Engineering College",
    styleClass: "rmk",
    location: "Gummudipondi",
    profile: [
      { role: "Under Graduate", description: ["Electrical and Electronics Engineering"] }
    ]
  },
  {
    from: "201109",
    to: "201612",
    organisation: "Tata Consultancy Services",
    styleClass: "tcs",
    location: "Chennai",
    profile: [
      { role: "Web Developer", description: ["For a Banking client"] },
      { role: "Production Support Executive", description: ["For a Telecom client"] }
    ]
  },
  {
    from: "201612",
    to: "Present",
    organisation: "Cognizant Technology Solutions",
    styleClass: "cts",
    location: "Chennai",
    profile: [
      { role: "Senior Web Developer", description: ["For a Logistics client", "For a Pharmaceutical client"] }
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