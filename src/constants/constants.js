export const projects = [
  {
    title: 'Book Search',
    description: "This is a Full-Stack MERN application (Mongoose/Express/React/Node) that allows users to search for books from the Google Books API. Users can also save their searches to review later as well as remove them from their saved list.",
      image: '/images/BookSearch.png',
      tags: ['Mongo', 'Express', 'React', 'Node'],
    source: 'https://book-search-robert-alanis.herokuapp.com/search/',
    visit: 'https://github.com/facebook/create-react-app',
    id: 0,
  },
  {
    title: 'Frida Khalo Click Game',
    description: 'Play this Frida Khalo match game built in react and designed with Reacstrap.',
      image: '/images/MatchGame.png',
      tags: ['React', 'Reactstrap', 'Express', 'Node'],
      source: 'https://github.com/robertalanis/frida-khalo-match-game',
      visit: 'https://robertalanis.github.io/frida-khalo-match-game/',
    id: 1,
  },
    {
    title: 'Student Tag and Search App',
    description: 'Front-end react applicaton that takes in data from an API with mock student data. This is fully responsive for all screen sizes and allows users to view and exapnd data from API. Users can search by a combination of first and last name or saved tags.',
      image: '/images/Student.png',
      tags: ['React', 'API', 'CSS'],
      source: 'https://github.com/robertalanis/Front-End-Tags-and-Filters',
      visit: 'https://robertalanis.github.io/Front-End-Tags-and-Filters/',
    id: 2,
  },
  {
    title: 'Burger Tracker',
    description: "This is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a Devour button. When the user clicks it, the burger will move to the right side of the page. The app will store every burger in a database, whether devoured or not until it is deleted by the user. Users can delete the burger from the database by using either the Discard or Forget buttons.",
      image: '/images/Burger.png',
      tags: ['MySQL', 'Express', 'Node', 'Handlebars'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
  {
    title: 'Node Word Guess Game',
    description:"This is a Command-Line Interface (CLI) app that allows you to guess the name of Countries in Latin America. This is built in node and makes use of contructor functions",
    image: '/images/WordGuess.gif',
    tags: ['Node', 'JavaScript Constructors'],
    source: 'https://github.com/robertalanis/word-guess-node-app',
    id: 4,
  },
  {
    title: 'LIRI-Bot',
    description: "LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies using the following commands: concert-this,spotify-this-song, movie-this, do-what-it-says",
      image: '/images/LIRI.gif',
      tags: ['Node.js', 'APIs'],
    source: 'https://github.com/robertalanis/liri-node-app',
    id: 5,
  }
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];
