# List Builder App

### Source Repository Links:
* [Frontend Repository](https://github.com/dvorakkarrie/list-builder-app)
* [Backend Repository](https://github.com/myraileen/listbuilder_backend)

### Deployment Links
* [React Frontend Application Deployment](https://listbuilderapp.herokuapp.com/)
* [Node, Express, Mongo Backend RESTful API Deployment](https://listbuilder-backend.herokuapp.com/)
---
## Functional Overview:
The app allows users to create, maintain, and share lists.

## Technical Achievements:
### Frontend
 * REACT
 * Hooks (useContext, useEffect, useState)
 * Responsive design for mobile and large screen devices
#### Backend
 * Consume an API
 * CRUD against Django/Mongoose rest api for user data
 * Three nested data models
    - users => lists & items
    - lists => items
#### User login
 * User role-based security (did not learn in class) - as defined in user stories
 * Security authorization

---
## Components
### Screen Mock
[Login/SignUp View](https://wireframe.cc/UUdu4W)
[Login View](https://wireframe.cc/KvXkK2)
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

## Backend API routes
| Path | Transaction |
| --- | :---:|
| /users | GET, POST |
| /users/`<id>` | GET, PUT, UPDATE, DELETE |
| /new-list/ | PUT (with userID, adds list doc, updates user list array) |
| /delete-list/`<userId>`/`<listId>` | DELETE |
| /new-item/ | PUT (with userID, adds item doc, updates user item array) |
| /delete-item/`<userId>`/`<listId>` | DELETE |
| /new-list-item/ | PUT (adds new item doc, updates user and list item arrays) |
| /add-list-item/ | PUT (updates user and list with existing item) |

## Components
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
| **Item.js** | child component to EventDetails as mentioned in previous item. This component can update an item's sold property by forwarding a PUT statement to the backend API |
| **CreateEvent.js** | this component hosts the form to create new events. The CreateEvent component sends a POST call to the backend api to create a new event. |
| **CreateItem.js** | this component hosts the form to create new items. The CreateItem component sends a PUT call to the backend api to update an event by pushing the added item into the events item array. |
| **UpdateItems.js** | this component (while not functional in the first release) was intended to update an item's properties. |

## Installation Instructions
* npm install
* npm i uuid
* npm i axios
* react-router
* react-router-dom
* react-dom

## Credits/References
* [Auth0 Tutorial](https://manage.auth0.com/dashboard/us/dev-9zf3-xc1/applications/gAanIirzJ76DQa5mSkSlp1lGyn8UkdGs/quickstart)
