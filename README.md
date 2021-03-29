# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

- This repository is my version and work from the starter code supplied for the project by LighthouseLabs: We cloned a starter repositiory to practice our HTML, CSS, JS, jQuery and AJAX front-end skills, while using Node, Express for back-end skills.

## Features

- Include a navigation bar that comes with you while you scroll,
- A character countdown that turns red when you have reached the max character amount of a single tweet (max of 140),
- Error messages if too few( 0 characters) or too many (>140 characters) are put into the new-tweet box,
- Responsive design that allows for tablet, desktop and phone layouts.
- Compose tweets and assign them to randomly generated profiles.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Body-parser
- Chance
- Express
- Node 5.10.x or above

## Screenshots

!['Screenshot of Tweeter header and main profile'](https://github.com/brackish888/tweeter/blob/master/docs/tweeterHeader.png?raw=true)

!['Get redirected to the compose new tweet section of the page from the nav bar'](https://github.com/brackish888/tweeter/blob/master/docs/writeNewTweetRedirect.png?raw=true)

!['Character coounter in action'](https://github.com/brackish888/tweeter/blob/master/docs/Character-counter.png?raw=true)

!['Error message for 0 characters'](https://github.com/brackish888/tweeter/blob/master/docs/errorMessageForZeroChar.png?raw=true)

!['Randomly generated tweeter friend!'](https://github.com/brackish888/tweeter/blob/master/docs/GenerateRandomTweeter.png?raw=true)