# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Video.destroy_all

users = User.create([
    {username: "Sam Dealy", email: "me.com", password: '123456'},
    {username: "Joan Didion", email: "joan.com", password: '123456'},
    {username: "Mahershala Ali", email: "ali.com", password: '123456'},
    {username: "Noah Lennox", email: "noah.com", password: '123456'},
    {username: "Joe Buddy", email: "joe.com", password: '123456'},
  ])

first_video_url = "http://s3.amazonaws.com/fsp-video-dev/" +
                  "videos/clips/000/000/050/original/" +
                  "grass_hopper.mp4?1520721819"
fist_video = File.new(first_video_url)

Video.create({ title: "Grass Hopper takes flight", uploader_id: User.first.id,
               asset: first_video })
