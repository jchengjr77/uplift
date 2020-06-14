# Uplift

Built for Same Home Different Hacks hackathon (MLH, Devpost).
https://devpost.com/software/uplift-f1jie3

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

Backend: Node.js (express)

Database: Firebase

Deployment: Google Cloud (Firebase)

## Endpoints

GET request for profile:
`GET /profile?uid=123`

GET request for random friend:
`GET /random-friend?self_id=123`

GET request for random other_message:
`GET/random-message?self_id=123`

POST request for self-messages:
`POST /to-self/$self_id {message}`

POST request for other-messages:
`POST /to/$uid {message}`

POST request for adding a friend:
`POST /add-friend/$self_uid {friend_email}`

POST request for removing a friend:
`POST /remove-friend/$self_uid/$friend_uid`

POST request for creating new user:
`POST /new-user {username, email, uid}`

## Key Colors

Off-White: ![#F8F1FF](https://placehold.it/15/F8F1FF/000000?text=+) `#F8F1FF`

Purple: ![#A46DDB](https://placehold.it/15/A46DDB/000000?text=+) `#A46DDB`

Gray: ![#908789](https://placehold.it/15/908789/000000?text=+) `#908789`

Lavender: ![#B8A7CA](https://placehold.it/15/B8A7CA/000000?text=+) `#B8A7CA`

## Design

![home](design/images/home.png)
![profile](design/images/profile.png)
![messages](design/images/messages.png)
