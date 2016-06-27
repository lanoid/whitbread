# whitbread

A coding test for whitbread, setup with best practices from the angular tutorial.

## Initial Check In

A simple base with a separated controller ready for code to be placed inside.
Using Npm to manage dependencies and run parts of the project.
Using Bower to install and manage dependencies.

## Subsequent Check In's

1. Addition of input bound to the controller.place value.
2. Addition of http search to query and return data from foursquare.
3. Addition of test to be run in isolation on the module foursquare-search.
4. Addition of a little CSS and some mild linting.

## To Run

1. npm install
2. npm start
3. npm test

### Notes

There is probably way too much stuff in the node folder, given time I would assess what is needed and adjust the dependencies accordingly.

With more time, addition of a pre-processer so that I can modularize the SASS or LESS for inclusion in a project compiled css file.

Building the src into a single minified & uglified file would make this example ready for production, I didn't have time for this, as you can see form the check in history.
