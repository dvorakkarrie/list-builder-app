# List Builder

## Overview:
The app allows users to create, maintain, and share lists.

## Project Goals & Requirements:
  ### Delivery execution
  * Git workflow  used to manage source code.
  * Daily planning, prioritization and code-pairing
  ### Frontend
  * REACT
  ### Backend
  * Consume an API
  * CRUD against Django/Mongoose rest api for user data
  ### User login
  * role-based security (did not learn in class) - as defined in user stories
  * social-authenticate

## Components
[Screen mock](https://wireframe.cc/8DJyT8)
* HomePage
* LoginSignupLogout
* User
* FindRecipe
* Recipe
* Ingredients
* CreateList
* CreateItem
* List
* ToDo
* Share (from List)

# Data Models
[ERD](https://dbdiagram.io/d/5e924af039d18f5553fd74eb)
* users
  - user_id (pk)
  - type (admin, general_user)
  - name
  - email_address
  - create_date
  - update_date
  - photo_url
* list
  - list_id (pk)
  - list type
  - user id
  - status (open, complete)
  - create_date
  - update_date
  - image_url
* item
  - item_id (pk)
  - item_type (ingredient, to_do)
  - user_id
  - status
  - create_date
  - update_date
  - quantity
  - image_url
* shared_list
  - owner_user_id
  - list_id
  - share_user_id

# User Stories
* As a user, I can create a list of to dos.
* As a user, I can browse recipes from Edamam API.
* As a user, I can add an item to my list from Edamam recipe ingredients.
* As a user, I can add an item to a list.
* As a user, I can remove a recipe ingredient from a shopping list.
* As a user, I can mark a to do item as complete in the shopping list.
* As a user, I can maintain the list status.
* As a user, I can only maintain lists that I create.
* As a user, I can see only view or edit lists shared with me.
* As a user, I can share my list with another user.

