## START SERVER
Use ```foreman start```

## TO FETCH DEVELOPERS USE

(/api/v1/developers)

## TO FETCH BOOKING FOR A SPECIFIC DEVELOPER USE

(/api/v1/bookings)

## TO POST DATA FOR THE DEVELOPER API ENSURE IT HAS THE FOLLOWING FORMAT

{
"name": "John Doe",
"email": "john@gmail.com",
"phone": "08012345678",
"city": "Lagos",
"bio": "I am a developer",
"github": "kell",
"photo": "https://res.cloudinary.com/kell/image/upload/v1570628989/developers/developer_1.jpg"
}

## TO POST DATA FOR THE BOOKING API ENSURE IT HAS THE FOLLOWING FORMAT

{
"developer_id": 1,
"date": "2019-10-10",
"time": "10:00",
"city": "Lagos",
}

Enjoy!
