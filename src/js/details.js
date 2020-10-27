var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var skills = {
  master: [],
  expert: [
    { skill: 'HTML', position: 'right', code: 'html' },
    { skill: 'CSS', position: 'right', code: 'css' },
    { skill: 'SCSS', position: 'right', code: 'scss' },
    { skill: 'JavaScript', position: 'left', code: 'js' },
    { skill: 'jQuery', position: 'left', code: 'jq' },
    { skill: 'BootStrap', position: 'right', code: 'bootstrap' }
  ],
  proficient: [
    { skill: 'Angular 2+', position: 'left', code: 'angular' },
    { skill: 'TypeScript', position: 'left', code: 'ts' }
  ],
  familiar: [
    { skill: 'Backbone.js', position: 'left', code: 'backbone' },
    { skill: 'Node.js', position: 'left', code: 'node' },
    { skill: 'ReactJS', position: 'left', code: 'react' },
    { skill: 'Photoshop', position: 'right', code: 'photoshop' }
  ],
  beginner: []
};

var experienceDetails = [
  {
    from: '200709',
    to: '201105',
    organisation: 'R.M.K Engineering College',
    code: 'rmk',
    location: 'Gummudipondi',
    profile: [{ role: 'Under Graduate', description: ['Electrical and Electronics Engineering'] }]
  },
  {
    from: '201109',
    to: '201612',
    organisation: 'Tata Consultancy Services',
    code: 'tcs',
    location: 'Chennai',
    profile: [
      { role: 'Web Developer', description: ['For a Banking client'] },
      { role: 'Production Support Executive', description: ['For a Telecom client'] }
    ]
  },
  {
    from: '201612',
    to: 'Present',
    organisation: 'Cognizant Technology Solutions',
    code: 'cts',
    location: 'Chennai',
    profile: [{ role: 'Senior Web Developer', description: ['For a Logistics client', 'For a Pharmaceutical client'] }]
  }
];

var githubUsername = 'bineeshb';
var reposUrl = `https://api.github.com/users/${githubUsername}/repos?sort=updated&type=all`;
var portfolioUrl = 'https://bineeshb.github.io/';

var contactDetails = [
  { iconClass: 'fa-envelope', displayText: 'bbineesh21@gmail.com', link: 'mailto:bbineesh21@gmail.com' },
  { iconClass: 'fa-linkedin', displayText: 'bineesh-balasubramanian', link: 'https://in.linkedin.com/in/bineesh-balasubramanian-5b9223b5' },
  { iconClass: 'fa-facebook', displayText: 'bineesh.balasubramanian', link: 'https://www.facebook.com/bineesh.balasubramanian' },
  { iconClass: 'fa-github', displayText: 'bineeshb', link: 'https://github.com/bineeshb' }
];
