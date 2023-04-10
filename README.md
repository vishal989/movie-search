# Movie Search App

## Steps to run the application:
1. `npm install`
2. `npm install react-router-dom`
3. `npm start`


## Description

A web application which used to search for the movies by typing the keyword in the searchbox. 
An api call is fired when the keyword is typed and it fetches 10 of the movies corresponding to the keyword. 
`next` button is used to provide pagination functionality as it fetches 10 more movies hence resulting in another api call and render them on the screen. 
Pressing the `prev` results in the rendering of the previous page. As we have implemented caching in the following appliaction, no api call is triggered for that.
Clicking on one of the movie navigate us to the details of that corresponding movie. Poster, title, genre, plot and movie length are shown for that particular movie.

## Features
1. Fetches data from the OMDB API. ✅
2. Search bar to search for movies. ✅
3. Movie list as a result of search. ✅
4. Clicking on a movie displays its details such as title, poster, plot, release year, genre and movie length. ✅
5. The app works well on both desktop and mobile. ✅
6. Implemented pagination to display more results. ✅
7. Implemented caching to reduce API requests. ✅
8. User can filter the searched result by genre. ✅
9. Implemented `back to top` button to scroll up to the top. ✅
