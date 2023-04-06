# Movie Search App

## Steps to run the application:
1. `npm install`
2. `npm install react-router-dom`


## Description

A web application which used to search for the movies by typing the keyword in the searchbox. 
An api call is fired when the keyword is typed and it fetches 10 of the movies corresponding to the keyword. 
`next` button is used to provide pagination functionality as it fetches 10 more movies hence resulting in another api call and render them on the screen. 
Pressing the `prev` results in the rendering of the previous page. As we have implemented caching in the following appliaction, no api call is triggered for that.
Clicking on one of the movie navigate us to the details of that corresponding movie. Poster, title, genre, plot and movie length are shown for that particular movie.
