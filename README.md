# List Builder Frontend

## Overview:
The app allows users to create, maintain, and share lists.

## Technical Goals/Requirements:
### Frontend
 * REACT
#### Backend
 * Consume an API
 * CRUD against Django/Mongoose rest api for user data
#### User login
 * role-based security (did not learn in class) - as defined in user stories
 * social-authenticate

---
## Components
### Screen Mock
[Item View](https://wireframe.cc/8DJyT8)
[List View](https://wireframe.cc/NanzQ3)
[Manage List](https://wireframe.cc/2sCU9g)
[User Profile View]()  

* MVP
  * HomePage
  * User
  * CreateItem
  * CreateList
  * BuildList
  * LoginSignupLogout
* Silver
  * FindRecipe
  * Recipe
  * Ingredients
* Gold
  * Share (from List)
---
## Data Models
[ERDs](https://dbdiagram.io/d/5e924af039d18f5553fd74eb)

---
## User Stories
* MVP 
  * As
  * As a user, I can create an item (add it to 'my items').
  * As a user, I can create a list.
    * I can add items to my list from my list of items.
    * I can add an (ad-hoc) item when I'm building a list.
  * As a user, I can edit my list (description, status). 
  * As a user, I can delete my list.
  * As a user, I can mark items as complete.
  * As a user, I can login to see (only) my data.
  * As a user, I can only maintain lists that I create.
* Silver
  * As a user, I can browse recipes from Edamam API.
  * As a user, I can remove a recipe ingredient from a shopping list.
* Gold
  * As a user, I can share my list with another user.
  * As a user, I can see only view or edit lists shared with me.


