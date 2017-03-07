# Rough outline of video uploading API

## User authentication

### /authenticate
#### Request [GET]
	Accept:	application/json

	{
		"username": "test@example.com",
		"password": "abcd1234"
	}

### Response
	{
		"userId": "123",
		"accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJmZDQ4OGUzMi0xNzIzLTRiOTgtOTNjYi1jYmJjOGFjMzk4NDMiLCJlbWFpbCI6ImRvcm9"
	}



## User info

### /user/{id}
#### Request [GET]
	Accept:	application/json
	x-access-token: eyJ0eXAiOiJKV1QiLCJhbGciOiJ...

### Response
	{
		"userId": "123",
		"firstName": "John",
		"lastName": "Doe",
		"email": "test@example.com",
		"signUpDate": "01/01/2017 01:01:01 PM",
		"numberOfFriends": 1,
		// etc...
	}


### /user/{id}/friends
#### Request [GET]
	Accept:	application/json
	x-access-token: eyJ0eXAiOiJKV1QiLCJhbGciOiJ...


### Response
	{
		"friendsUserIds": [
			{
				"userId:: 001,
				"fullName": "Johnny Appleseed",
				"email": "jappleseed@example.com"
			}
		]
	}



## Uploading and sending videos

### /upload
#### Request [POST]
	Accept: video/mp4
	x-access-token: eyJ0eXAiOiJKV1QiLCJhbGciOiJ...

	// video data

### Response
	{
		"status": "Success",
		"videoId": 00000
	}

### /deliver
#### Request [POST]
	Accept:	application/json
	x-access-token: eyJ0eXAiOiJKV1QiLCJhbGciOiJ...

	{
		"videoId": 0000,
		"sendToUserWithId": [001, 123, 111]
	}

### Response
	{
		"status": "Success"
	}



