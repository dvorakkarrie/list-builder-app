# List Builder App

### Source Repository Links:
* [Frontend Repository](https://github.com/dvorakkarrie/list-builder-app)
* [Backend Repository](https://github.com/myraileen/listbuilder_backend)

### Deployment Links
* [React Frontend Application Deployment](https://listbuilderapp.herokuapp.com/)
* [Node, Express, Mongo Backend RESTful API Deployment](https://listbuilder-backend.herokuapp.com/)
---
## Functional Concept Overview:
The app allows users to create, maintain, and share lists.

---
## Implementation/delivery execution
  * Git workflow  used to manage source code.
  * Daily planning, prioritization and code-pairing
---
## User Stories
* MVP 
  * As a user, I can create an item (add it to 'my items').
  * As a user, I can create a list.
    * I can add items to my list from my list of items.
    * I can add an (ad-hoc) item when I'm building a list.
  * As a user, I can edit my list (description, status). 
  * As a user, I can delete my list.
  * As a user, I can mark items as complete.
  * As a user, I can register as a user.
    * I am not allowed to use someone else's user id.
  * As a user, I can login to see (only) my data.
  * As a user, I can update my user information.
  * As a user, I can only maintain lists that I create.
* Silver
  * As a user, I can browse recipes from Edamam API.
  * As a user, I can remove a recipe ingredient from a shopping list.
* Gold
  * As a user, I can share my list with another user.
  * As a user, I can see only view or edit lists shared with me.
--- 
## Technical Achievements:
### Frontend
 * Single page React app using React Router
 * React Hooks (useContext, useEffect, useState) implemented with the "Tasks" components
 * Responsive design for mobile and large screen devices
#### Backend
 * RESTful API built using Djange that demonstrates full CRUD against MongoDb noSQL database
 * Three nested, relational data models
    - users => lists & items
    - lists => items
 * Prior to implementing the node/express/mongo backend, we considered implementing a django/postgres backend and one was built but not fully flushed out and used as there was concern for cors/communicating with the frontend. JWT token implementation was researched but did not have time to implement in either. Linked here is the django/postgres backend repo: __**[django/mongodb backend repository](https://github.com/myraileen/List_Builder_Backend)**__
#### User login
 * User role-based security (did not learn in class) - as defined in user stories
 * Security authorization

---
## Screen Mock-ups
* [Login/SignUp View](https://wireframe.cc/UUdu4W)  
* [Login View](https://wireframe.cc/KvXkK2)  
* [Item View](https://wireframe.cc/8DJyT8)  
* [List View](https://wireframe.cc/NanzQ3)  

* [Manage List](https://wireframe.cc/2sCU9g)  
* [User Profile View]()  

---

## Backend API
### Data Models
![ERD](https://res.cloudinary.com/myraileen/image/upload/v1587427814/ERD_tjioas.jpg)

### Backend API routes
| Path | Transaction | Description |
| --- | :---:| :---: |
| / | GET, POST | Called by React frontend to get Users data model that is 'populated' with the users Items and Lists |
| /users/`<id>` | GET, PUT, UPDATE, DELETE | CRUD for an individual User instance |
| /new-list/ | PUT  | called by React frontend passing a userId and ListId to create a list and push it into User's List array |
| /delete-list/`<userId>`/`<listId>` | DELETE | called by React frontend to delete a list and remove it from the User's List array |
| /new-item/ | PUT | called by React frontend passing a userId and ItemId to add an Item to the User's Item array. 
| /delete-item/`<userId>`/`<listId>` | DELETE | called by React frontend passing the userId and listId to delete an Item from a User's List
| /new-list-item/ | PUT | adds NEW Item instance and updates the user and list item arrays) 
| /add-list-item/ | PUT | called by React frontend passing a listId and itemId to push an existing Item instance into a User's List 

---

## Frontend Components
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component | Description |
| --- |  :---: |
| **App.js** | This component is the routing component and hosts the API calls. |
| **Header.js** | This component is the component which displays the header section on all pages. |
| **Signin.js** | This component is the authorization component for the user and requires data to be provided in an email format. |
| **SideNav.js** | This component is the navigation component for the user to select (items (create items), lists (create lists), or task components. |
| **Lists.js** | This component recieves an array of lists assigned to the user and maps each one to the List component. |
| **List.js** | This component creates an list from its parent Lists component. A DELETE call can be fired from this component to remove a list from the backend api. |
| **ListDetails.js** | This component displays a single list and the children Item components. There are inputs on this page to update (PUT) items. |
| **ListItems.js** | This component recieves an array of items and maps each one to the assigned List component. |
| **Items.js** | This component recieves an array of items assigned to the user and maps each one to the assigned Item component. |
| **Item.js** | This component creates an item from its parent Items component. A DELETE call can be fired from this component to remove an item from the backend api. |
| **ItemDetails.js** | This component displays a single item. There are inputs on this page to update (PUT) items. |
| **CreateList.js** | This will post a new list to the parent user with the following data: list title and image_url. |
| **CreateItem.js** | This will post a new item to the parent user with the following data: item name, description and image_url. |
| **CreateListItem.js** | This will post a new item to the parent list with the following data: item name, description and image_url. |

## Installation Instructions
* npm install
* npm i uuid
* npm i axios
* react-router
* react-router-dom
* react-dom

## Credits/References
* [Auth0 Tutorial](https://manage.auth0.com/dashboard/us/dev-9zf3-xc1/applications/gAanIirzJ76DQa5mSkSlp1lGyn8UkdGs/quickstart): there are commits in our project where we had Auth0 applied to the frontend. There was a lot of learning to apply it, but in the end we removed it for technical difficulties we did not resolve by the project deadline.