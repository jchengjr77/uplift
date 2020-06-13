# Uplift

Built for Same Home Different Hacks hackathon (MLH, Devpost).

## Team

Anna Lulushi - [alulushi1026](https://github.com/alulushi1026)

Jeff Li - [voidJeff](https://github.com/voidJeff)

[Sean Prendi](https://www.seanprendi.me/#/) - [seanprendi](https://github.com/seanprendi)

[JJ Cheng](https://jjcheng.me) - [jchengjr77](https://github.com/jchengjr77)

## Intro

Uplift is a support platform designed to encourage and showcase you and your friends. Write something nice about yourself and one other person every day.

The Ultimate Self Love Platform.

## Tech Stack

Frontend: React

Backend: Flask (Python)

Database: Firebase

Deployment: Google Cloud (Firebase)

## Endpoints

GET request for self-messages:
`GET /self`

GET request for other-messages:
`GET /other`

GET request for friends:
`GET /friends`

GET request for random friend:
`GET /random-friend`

GET request for random other-message:
`GET/random-message`

POST request for self-messages:
`POST /to-self {message}`

POST request for other-messages:
`POST /to/$uid {message}`

POST request for adding a friend:
`POST /add-friend/$self-uid/$friend-uid`

POST request for removing a friend:
`POST /remove-friend/$self-uid/$friend-uid`

POST request for creating new user:
`POST /new-user {username, email}`

## Key Colors

Off-White: ![#F8F1FF](https://placehold.it/15/F8F1FF/000000?text=+) `#F8F1FF`

Lavender: ![#A46DDB](https://placehold.it/15/A46DDB/000000?text=+) `#A46DDB`

Periwinkle: B8A7CA

## Design

![home](design/images/home.png)
![profile](design/images/profile.png)
![messages](design/images/messages.png)
