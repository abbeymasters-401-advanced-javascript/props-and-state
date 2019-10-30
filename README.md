# Lab: Props and State
Author: Abbey Masters

## Submission Links
* [GitHub PR 1] ()
* [GitHub PR 2] (https://github.com/abbeymasters-401-advanced-javascript/props-and-state/pull/3)

## Scripts
"test": "jest --verbose",
"test:watch": "npm run test -- --watch",
"start": "webpack-dev-server --hot --mode development --devtool eval-source-map",
"build": "webpack -p --devtool source-map"

## Instructions 
Refactor
* Right now state in contained inside of the App component. Extract state from the App component and create a src/containers/ColorContainer.js file. Import the ColorContainer into App.

Random Color
* Create a src/containers/RandomColor.js that changes colors randomly every second
* Import RandomColor into `App'

BONUS
* If the color wasn't changed (the same color was randomly selected) set the background image to https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg

Tests
* Write mount/enzyme tests for each component, including the stater-code components.