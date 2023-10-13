Scoreboard Software Specification
===================================

Introduction
------------

This document outlines the specifications for the development of a Scoreboard API module for our website. The module is responsible for updating and maintaining a live scoreboard that displays the top 10 users' scores. It also ensures that user scores are updated securely and prevents unauthorized score increments by malicious users.

Table of Contents
-----------------

1.  Project Overview
2.  Flow of Execution
4.  API Documentation
5.  Data Structures
6.  Authentication and Authorization
7.  Error Handling


Project Overview
---------------

The Scoreboard API is designed to facilitate real-time updates of the top 10 user scores on our website. It allows users to increase their scores by performing actions and ensures the security of score increments.

Flow of Execution
-----------------

![flow-diagram]

Flow Diagram Details:

1.  The user performs an action that increases their score on the website.
2.  The website make an API call to Scoreboard API with the user's credentials and the action details.
3.  The Scoreboard API receives the API call and validates the user's credentials.
4.  If the user is authorized, the server updates the user's score based on the action.
5.  The server recalculates the top 10 scores and updates the scoreboard and save to the database.
6.  The server will send back new top 10 user to the website for display.

Note: This flow diagram assumes a simplified scenario and may not account for all possible edge cases or error handling. The actual implementation may vary depending on the specific technologies, programming languages, and architectural choices utilized by the website and the Scoreboard API.


API Documentation
---------------------

The following endpoints and methods are available in the Scoreboard API:

-   `GET /api/scores`

    Method: GET

    Description: Retrieves the top 10 user scores for display on the scoreboard.

    Response:

    -   200 OK: The request was successful.

    ```json 
    [
        {
        "userId": "user1",
        "username": "username1",
        "score": 1000
        },
        {
        "userId": "user2",
        "username": "username2",
        "score": 950
        },
        // ... (up to 10 entries)
    ]
    ``` 
    -   500 Internal Server Error: Server-side issues or unexpected errors.


-   `POST /api/scores/increase`

    Method: POST

    Description: Increases the user's score after performing an action.

    Request Body:

    ```json 
    {
      "userId": "string",
      "actionType": "string"
    }
    ```

    Response:

    -   200 OK: Score updated successfully.

    ```json 
     [
        {
        "userId": "user1",
        "username": "username1",
        "score": 1000
        },
        {
        "userId": "user2",
        "username": "username2",
        "score": 950
        },
        // ... (up to 10 entries)
    ]
    ```

    -   401 Unauthorized: User not authorized.
    -   404 Not Found: User not found.

Data Structures
---------------

### User

-   `id` (string): Unique identifier for the user.
-   `username` (string): User's username.

### Score

-   `userId` (string): User's ID.
-   `score` (integer): User's score.

Authentication and Authorization
--------------------------------

To prevent malicious users from increasing scores without authorization, the following measures will be implemented:

-   All requests to the `POST /api/score/increase` endpoint must include a valid user ID and an action type.
-   The user ID will be validated against the user database to ensure the user exists.
-   Authorization checks will be performed to verify that the user has permission to update their score based on the provided action type.
-   Unauthorized requests will receive a 401 Unauthorized response.

Error Handling
--------------

In case of errors, the Scoreboard API module will return appropriate HTTP status codes and error messages to the client. Errors can occur due to invalid requests, unauthorized access, or server issues. The following HTTP status codes will be used for error responses:

-   400 Bad Request: Invalid request format or missing parameters.
-   401 Unauthorized: Unauthorized access or authentication failure.
-   404 Not Found: User not found.
-   500 Internal Server Error: Server-side issues or unexpected errors.


Additional Comments:
-----------------

Ensure that this endpoint efficiently retrieves and returns the top 10 scores to minimize server load, especially if the user base is large. Implementing proper indexing in your database can help improve query performance.

Consider implementing caching mechanisms to reduce the load on your server when frequent requests are made for the top 10 scores.

For real-time updates, you can integrate this endpoint with a WebSocket-based solution (such as Socket.IO) to push updates to clients whenever scores change. This way, the scoreboard remains up-to-date without clients needing to poll the endpoint frequently (HTTP Long-Polling).

Conclusion
----------

The Scoreboard API module is responsible for real-time score updates and user authorization. It ensures the security and integrity of user scores on our website. The provided documentation will serve as a reference for the backend engineering team during the implementation process.


<!-- MARKDOWN LINKS & IMAGES -->
[flow-diagram]: flow-diagram.png