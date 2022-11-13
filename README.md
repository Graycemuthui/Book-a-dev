<!-- ## START SERVER
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

Enjoy! -->

## BOOK A DEVELOPER

Full stack website for users to book developers for a project.

## Built With

-Ruby
-Ruby on Rails
-PostgreSQL
-Heroku

## Getting Started

To get a local copy up and running follow these simple example steps. In your terminal, navigate to your current directory and run this code

git clone https://github.com/Graycemuthui/Book-a-dev.git

Then run:

cd Book-a-dev
Open in your preferred text editor. Run code . to open VScode.

## Setup

This guide assumes you have already installed the necessary dependencies to use a postgreSQL database and Ruby on Rails.

Change the ruby version in your gemfile to the version you have installed on your machine.
Add your credentials to the database.yml file.

Run:
`bundle install`
`npm install `
`rails db:create`
`rails db:migrate`
`rails db:seed`
`foreman start`

## API Endpoints

| Endpoint | Functionality |

To create a new developer, send a POST request to http://localhost:3000/api/v1/developers with the following body:

`{ "name": "John Doe", "email": "john@gmail.com", "phone": "08012345678", "city": "Lagos", "bio": "I am a developer", "github": "kell", "photo": "https://res.cloudinary.com/kell/image/upload/v1570628989/developers/developer_1.jpg" } `

To create a new booking, send a POST request to http://localhost:3000/api/v1/bookings with the following body:

`{ "developer_id": 1, "date": "2019-10-10", "time": "10:00", "city": "Lagos" } `

To get all developers, send a GET request to http://localhost:3000/api/v1/developers

The response will be an array of all developers.

` [

                                { name: 'Grayce', email: 'grayce@gmail.com', phone: '+23498023432', city: 'Nairobi', bio: 'I am a Javascript developer',
                                  github: 'https://github.com/Graycemuthui', photo: 'https://avatars.githubusercontent.com/u/95374858?v=4' },
                                { name: 'Rich', email: 'Rich@gmail.com', phone: '+4343422322', city: 'Ghana', bio: 'I am a Java developer',
                                  github: 'https://github.com/assadounto', photo: 'https://avatars.githubusercontent.com/u/95765079?v=4' },
                              ]`

To get all bookings, send a GET request to http://localhost:3000/api/v1/bookings

The response will be an array of all bookings.

` [

                                { developer_id: 1, date: '2021-10-10', time: '10:00', city: 'Nairobi' },
                                { developer_id: 2, date: '2021-10-10', time: '10:00', city: 'Nairobi' },
                              ]`

To delete a booking, send a DELETE request to http://localhost:3000/api/v1/bookings/:id

Example :

` fetch(`api/v1/bookings/${booking.id}`, { method: "DELETE", headers: { "Content-Type": "application/json", }, });`

To delete a developer, send a DELETE request to http://localhost:3000/api/v1/developers/:id

Example:

` fetch(`/api/v1/developers/${developer.id}`, { method: "DELETE", headers: { "Content-Type": "application/json", }, })`

## Author1

👤 **K42**

- GitHub: [@Crystallinebutterfly](https://github.com/crystallinebutterfly)
- Twitter: [@CrystAlline_k42](https://twitter.com/crystAlline_k42)
- Buy me a coffee: [K42](https://www.buymeacoffee.com/crystallinek42)

## Author2

👤 **MICHAELMUNAVU83**

- GitHub: [@MICHAELMUNAVU83](https://github.com/MICHAELMUNAVU83)
- Twitter: [@MichaelTrance1](https://twitter.com/MichealTrance1)
- LinkedIn: [@micheal-munavu](https://www.linkedin.com/in/michael-munavu/)

## Author3

👤 **GRAYCEMUTHUI**

- GitHub: [@GrayceMuthui](https://github.com/Graycemuthui3)
- Twitter: [@Grayce_Muthui](https://twitter.com/Grayce_Muthui)
- LinkedIn: [@grayce-muthui](https://www.linkedin.com/in/grayce-muthui)

## Author4

👤 **RICHMONDADU-KYERE**

- GitHub: [@assadounto](https://github.com/assadounto)
- Twitter: [@adukyerer](https://twitter.com/adukyerer)
- LinkedIn: [@richmond-adu-kyere](https://www.linkedin.com/in/richmond-adu-kyere-911693236/)

## Author5

👤 **Said Rašinlić**

- GitHub: [@SaidRasinlic](https://github.com/SaidRasinlic)
- Twitter: [@SaidRasinlic](https://twitter.com/SaidRasinlic)
- LinkedIn: [@saidrasinlic](https://www.linkedin.com/in/saidrasinlic/)

## Acknowledgments

The credits of the website design goes to [Murat Korkmaz](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign)

## Show your support

Give a star if you like this project!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Graycemuthui/Book-a-dev/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.
