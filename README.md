# Online Book Store

This project is a Bookstore API developed using Spring Boot. It provides endpoints to search books and them to cart.

## Endpoints for the API

### Sign up

- **URL:** `/v1/auth/signup`
- **Method:** POST
- **Description:** This an authenticated endpoint with is used to view cart content.
  - **Request Body:** {
      "firstName": "Test",
      "lastName": "Testing",
      "email": "tester@gmail.com",
      "password": "Password",
      "phoneNumber": "+2348135194199",
      "shippingAddress": "Lagos Nigeria",
      "username": "asaka"
    }
  - **Response:** {
      "firstName": "Ahmed",
      "lastName": "Saka",
      "email": "ahmedsaka91@gmail.com",
      "password": "Password@123$",
      "phoneNumber": "+2348135199661",
      "shippingAddress": "Aborishade Lawanson Surulere",
      "username": "asaka",
      "id": "861be649-e4be-4424-b50e-c596e14e9969"
    }

### Login

- **URL:** `/v1/auth`
- **Method:** POST
- **Description:** This an authenticated endpoint with is used to view cart content.
  - **Request Body:** {
      "username": "test",
      "password": "test"
    }
- **Response:** {
    "token": "token"
  }

### Search for Books

- **URL:** `/v1/books/search`
- **Method:** POST
- **Description:** Search for books using defined parameters.
  - **Request Body:** {
      "title": "The Last Temptation",
      "author": "Raul Lang",
      "genre": "horror",
      "yearOfPublication": "1951"
    }
      - `limit`: Optional query parameter to specify the maximum number of categories to retrieve (default is 10).
- **Response:** Returns a list of bookEntity categories along with their details.

### Add book order to cart

- **URL:** `/v1/orders`
- **Method:** POST
- **Description:** This an authenticated endpoint with is used to add a book to cart.
- **Request Body:** {
  "bookId": "861be649-e4be-4424-b50e-c596e14e9969",
  "quantity": 1
  }
- **Header:** Bearer Token: "token"
- **Response:** Returns cart containing books added by the logged in user.


### View book(s) in cart

- **URL:** `/v1/orders`
- **Method:** GET
- **Description:** This an authenticated endpoint with is used to view cart content.
- **Header:** Bearer Token: "token"
- **Response:** Returns cart containing books added by the logged in user.

## Technologies Used

- Java
- Spring Boot
- Spring Web
- Project Lombok
- MYSQL

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run docker compose up -d
4. The api will start running on port 8091, and you can access the endpoints using a tool like Postman or cURL.

## Contributors

- [Ahmed Saka](https://github.com/Ahmedsaka)
