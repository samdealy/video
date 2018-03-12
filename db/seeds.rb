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

video_url_1 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/Boys+Latin_1_4.mp4"
video_url_2 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/Boys+Latin+(2%3A4).mp4"
video_url_3 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/Boys+Latin+(3%3A4).mp4"
video_url_4 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/Boys+Latin+(4%3A4).mp4"

Video.create([
    { title: "Boys Latin (1/4)", uploader_id: User.first.id, clip: video_url_1 },
    # { title: "Boys Latin (2/4)", uploader_id: User.first.id, clip: video_url_2 },
    # { title: "Boys Latin (3/4)", uploader_id: User.first.id, clip: video_url_3 },
    # { title: "Boys Latin (4/4)", uploader_id: User.first.id, clip: video_url_4 }
  ])
