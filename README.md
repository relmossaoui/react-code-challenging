React Coding Challenge
Overview
To complete this challenge, you will need to write a simple React based web app, and provide us the source files to be built.

The purpose of this challenge is to assess your skills and approach to composing a simple web app given a set of instructions.

This challenge is expected to take about 2-3 hours.

+ I taked 8 hours to produce it.

The Challenge
It's very simple. You'll need to build a set of React components to render the app. You'll also need to request a JSON feed, filter that data, and use the relevant fields.

Although this is a basic exercise, we'll be looking for simple, well-designed, performant, and tested code in the submission.

Also, add the following info to your README:

How did you decide on the technical and architectural choices used as part of your solution?
+ I have decided to use just functional component using React Hooks API.
+ I have tried to decompose our UI to many presentational components.
+ I decompose my project to: components, views, models, http 

Are there any improvements you could make to your submission?
What would you do differently if you were allocated more time?

+ of course, many improvement should be done, if I have more time to do :
    + using HOC patterns in many cases.
    + style properly UI.
    + test the code.
    
Details
You will need to build the following 3 pages with React:

A "Home" page
B "View pokemon" page
C "Types" page
Please create components for each part of the page (eg. header, content, footer, etc).

The pages should also be usable on mobile and tablet devices.

"Home" Page
This will be your index screen.

You will need to display a paginated list of pokemons, each pokemon is clickable which takes to view pokemon page.

Page size: 20
Adding some filters is a plus (ex: by type).
Loading, error and empty states.
"View pokemon" Page
Display the selected Pokemon details (name, picture, type...)

Display possible pokemon evolutions (clickable).
Clicking on type should take to the "Types" page.
Loading, error and empty states.
"Types" Page
Display a list of pokemons belonging to the selected type

Clickable pokemons to "view pokemon" page.
Page size: 20.
Loading, error and empty states.
FAQ
What language, framework, build tool... should I use?
You may use whatever you like as long as the solution is built using React. We prefer it if you did not use any third party CSS frameworks.

You can use create-react-app.

We also prefer the use of minimal dependencies.

API Link
https://pokeapi.co/

Other Notes
Please send any other code or projects that you're proud of and would like to share with us.

Any feedback on the coding challenge once you're done is also appreciated!