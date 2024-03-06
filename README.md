# Online Book Store

This project is a Bookstore API developed using Spring Boot. It provides endpoints to manage books and book categories.

## Endpoints

### Get Book Categories

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
- **Response:** Returns a list of book categories along with their details.

### Authenticate User

- **URL:** `/v1/auth`
- **Method:** POST
- **Description:** Used to authenticate and generate access token for user to access an authenticated endpoint.
- **Request Body:** {
  "username": "username",
  "password": "password"
  }
- **Response:** Returns access token to the user.


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

- [Ahmed Saka](https://github.com/ahmedsaka91)
