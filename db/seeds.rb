# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Video.destroy_all

dealy_image   = "https://s3.amazonaws.com/fsp-video-dev/videos/avatar_seeds/Dealy_Headshot_MLS.jpg"
didion_image  = "https://s3.amazonaws.com/fsp-video-dev/videos/avatar_seeds/didion.png"
ali_image     = "https://s3.amazonaws.com/fsp-video-dev/videos/avatar_seeds/ali.png"
noah_image    = "https://s3.amazonaws.com/fsp-video-dev/videos/avatar_seeds/noah.png"
larissa_image = "https://s3.amazonaws.com/fsp-video-dev/videos/avatar_seeds/Larissa.png"

users = User.create([
    {username: "Sam Dealy",      email: "me.com",   password: '123456', image: dealy_image},
    {username: "Joan Didion",    email: "joan.com", password: '123456', image: didion_image},
    {username: "Mahershala Ali", email: "ali.com",  password: '123456', image: ali_image },
    {username: "Noah Lennox",    email: "noah.com", password: '123456', image: noah_image},
    {username: "Larissa Jones",  email: "la.com",   password: '123456',  image: larissa_image}
  ])

video_url_1  = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/Boys+Latin_1_4.mp4"
video_url_2  = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/Boys+Latin_2_4.mp4"
video_url_3  = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/Boys+Latin_3_4.mp4"
video_url_4  = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/Boys+Latin_4_4.mp4"
video_url_5  = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/Checking+out+sights.mp4"
video_url_6  = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/C+E+R+A+M+I+C+S.mp4"
video_url_7  = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/City+of+ink.mp4"
video_url_8  = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/Ink+is+Incredible.mp4"
video_url_9  = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/THIS.mp4"
video_url_10 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/The+Writing+on+the+Wall.mp4"
video_url_11 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/crab_pt_1.mp4"
video_url_12 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/crab_pt_2.mp4"
video_url_13 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/crab_pt_3.mp4"
video_url_14 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/face_paint.mp4"
video_url_15 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/grass_hopper.mp4"
video_url_16 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/japanese_rock.mp4"
video_url_17 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/manta_rays.mp4"

Video.create([
    { title: "Boys Latin (1/4)", uploader_id: User.first.id, clip: video_url_1 },
    { title: "Boys Latin (2/4)", uploader_id: User.first.id, clip: video_url_2 },
    { title: "Boys Latin (3/4)", uploader_id: User.first.id, clip: video_url_3 },
    { title: "Boys Latin (4/4)", uploader_id: User.first.id, clip: video_url_4 },
    { title: "Checking out sites", uploader_id: User.first.id, clip: video_url_5 },
    { title: "C E R A M I C S", uploader_id: User.second.id, clip: video_url_6 },
    { title: "City of Ink", uploader_id: User.second.id, clip: video_url_7 },
    { title: "Ink is Incredible", uploader_id: User.second.id, clip: video_url_8 },
    { title: "THIS", uploader_id: User.second.id, clip: video_url_9 }
  ])

#Noah videos
Video.create([
    { title: "The Writing on the W A L L", uploader_id: User.fourth.id, clip: video_url_10 },
    { title: "Pet Crab pt. 1", uploader_id: User.fourth.id, clip: video_url_11 },
    { title: "Pet Crab pt. 2", uploader_id: User.fourth.id, clip: video_url_12 },
    { title: "Pet Crab pt. 3", uploader_id: User.fourth.id, clip: video_url_13 },
    { title: "Father was an artist", uploader_id: User.fourth.id, clip: video_url_14 },
    { title: "G R A S S H O P P E R", uploader_id: User.fourth.id, clip: video_url_15 },
    { title: "ROCKERS", uploader_id: User.fourth.id, clip: video_url_16 },
    { title: "manta rays flying", uploader_id: User.fourth.id, clip: video_url_17,
      description: "who knew that manta rays can fly?" }
  ])
