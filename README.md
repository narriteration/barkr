# barkr
Jesse and Chelsea's Project 1 - WDI 36
Express App using the MEN stack

## About
Barkr is a platform to meet other dog-loving locals in your area. Create a profile for you and your furry friend, complete with photos and descriptions, and start searching for some puppy playmates.

MVP:
* The ability to create a new user profile: accessible link on nav bar at top or when user navigates to the main feed.
* Display all existing profiles sequentially on a feed (access through scrolling through a single page).
* Ability for a superuser to update or delete existing profiles.
* Ability to send an email message to any existing user by typing in your message into a text box and clicking send.
* Navigation bar header with several icons: feed, map of dog parks, login to existing profile, create new profile.
* Footer with copyright and contact information.

## Feasibility check

A dropdown menu/burger that allows you to filter your choices based on properties of dog and owner. Linking to a remote API that will display map or list of local dog parks. Pagination feature that deletes and renders 5 new profiles when new page is clicked on.

## Technologies

* HTML + Bootstrap to template our existing and planned feature including: burgers, forms, dropdowns, pagination, navigation bars.
* CSS
* Javascript and Jquery for our interactive features.
* Express for creating our RESTful routes to CRUD json in our API.
* mongoDb and mongoose to store and manipulate the information in a database.
* Heroku to host and display our functioning app.

## Features

* A cover page with brief intro, contact info, and enter-site button.
* Nav bar on top with log in/sign up, map tab, and logo to go to home page.
* Sign up tab brings you to top of the page where you create a bio for you and the dog
* Ability to scroll through all posted profiles.
* A superuser can update the values of each section on a profile, including the photo.
* The superuser can delete any profile, with a warning module that pops up to confirm delete.
* A dropdown/burger where users are able to filter profiles based on your search requires.

## Planned Features

* User authentication to sign into an account, access the feed, and interact with other users.
* Once authenticated, a user will be able to modify only their own profile information.
* Add working pagination buttons to bottom of feed page: Display a maximum of 5 profiles per page.
* Burger at top left of screen. On click, a filter sidebar pops out for user to narrow down what kinds of other Barkr users they want to see. Search metrics: Human gender and age. Dog breed, size, socialization status.
* A message box to activate on any existing user profile, write a message to that user, and post that message to a public view, directly on that profile. Any user may see this message on the feed.
* Map icon on the navigation bar (at top) takes user to bottom of the feed page where there is a google map from google including markers that display local dog parks.
* In feed, when profile is clicked on, a user can navigate to a separate personal page.
