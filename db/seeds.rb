# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

users = User.create([
                      { name: 'John', email: 'john@gmail.com', password: '123456', password_confirmation: '123456' },
                      { name: 'Jane', email: 'jane@gmail.com', password: '123456', password_confirmation: '123456' },
                      { name: 'Jack', email: 'jack@gmail.com', password: '123456', password_confirmation: '123456' }

                    ])

developers = Developer.create([
                                { name: 'Kell', email: 'kell@gmail.com', phone: '1234567890', city: 'New York', bio: 'I am a developer',
                                  github: 'kell', photo: 'https://i.imgur.com/3ZQZ9Zm.jpg' },
                                { name: 'Said', email: 'Said@gmail.com', phone: '1234567890', city: 'New York', bio: 'I am a developer',
                                  github: 'said', photo: 'https://i.imgur.com/3ZQZ9Zm.jpg' }

                              ])

bookings = Booking.create([
                            { user_id: 1, developer_id: 1, date: '2021-10-10' },
                            { user_id: 2, developer_id: 2, date: '2021-10-10' }

                          ])
