User.destroy_all
Developer.destroy_all
Booking.destroy_all
users = User.create([
                      { name: 'John', email: 'john@gmail.com', password: '123456', password_confirmation: '123456' },
                      { name: 'Jane', email: 'jane@gmail.com', password: '123456', password_confirmation: '123456' },
                      { name: 'Admin', email: 'Admin@gmail.com', password: '123456', password_confirmation: '123456',role: 'admin' }

                    ])

developers = Developer.create([

                                { name: 'Grayce', email: 'grayce@gmail.com', phone: '+23498023432', city: 'Nairobi', bio: 'I am a Javascript developer',
                                  github: 'https://github.com/Graycemuthui', photo: 'https://avatars.githubusercontent.com/u/95374858?v=4' },
                                { name: 'Kell', email: 'kell@gmail.com', phone: '+23232324234', city: 'New York', bio: 'I am a Ruby developer',
                                  github: 'https://github.com/CrystallineButterfly', photo: 'https://avatars.githubusercontent.com/u/95975209?v=4' },
                                { name: 'Said', email: 'said@gmail.com', phone: '+2323423444', city: 'Texas', bio: 'I am a Node developer',
                                  github: 'https://github.com/SaidRasinlic', photo: 'https://avatars.githubusercontent.com/u/57558480?v=4' },
                                { name: 'Rich', email: 'Rich@gmail.com', phone: '+4343422322', city: 'Ghana', bio: 'I am a Java developer',
                                  github: 'https://github.com/assadounto', photo: 'https://avatars.githubusercontent.com/u/95765079?v=4' },
                                { name: 'Micheal', email: 'micheal@gmail.com', phone: '+2344945834', city: 'New York', bio: 'I am a C++ developer',
                                  github: 'https://github.com/MICHAELMUNAVU83', photo: 'https://avatars.githubusercontent.com/u/86654131?v=4' }

                              ])

bookings = Booking.create([
                            { user_id: 1, developer_id: 1, date: '2021-10-10' },
                            { user_id: 2, developer_id: 2, date: '2021-10-10' }

                          ])
