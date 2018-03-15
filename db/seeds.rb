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
video_url_18 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/rothko_1.mp4"
video_url_19 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/rothko_2.mp4"
video_url_20 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/rothko_3.mp4"
video_url_21 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/rothko_4.mp4"
video_url_22 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/seed_timelapse.mp4"
video_url_24 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/sprouting_seed_1.mp4"
video_url_25 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/pea_shoot.mp4"
video_url_26 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/warhol_pt_1.mp4"
video_url_27 = "https://s3.amazonaws.com/fsp-video-dev/videos/video_seeds/warhol_pt_2.mp4"

rothko_descriptions = []
4.times do |i|
  rothko_descriptions << "This is part #{i+1} in a video series about the artist Mark Rothko, the color genius." +
  "  What would a sunday afternoon spent at the Whitney be without a sight of 'Four Darks in Red'?"
end

manta_description = "who knew that manta rays can fly? Or is it that they 'could' fly?"

Video.create([
    { title: "Seed timelapse", uploader_id: User.fifth.id, clip: video_url_22, description: "A cool timelapse I made." },
    { title: "Boys Latin (2/4)", uploader_id: User.first.id, clip: video_url_2 },
    { title: "Boys Latin (4/4)", uploader_id: User.first.id, clip: video_url_4 },
    { title: "ROCKERS", uploader_id: User.fourth.id, clip: video_url_16 },
    { title: "C E R A M I C S", uploader_id: User.second.id, clip: video_url_6 },
    { title: "Ink is Incredible", uploader_id: User.second.id, clip: video_url_8 },
    { title: "Pet Crab pt. 1", uploader_id: User.fourth.id, clip: video_url_11 },
    { title: "The Writing on the W A L L", uploader_id: User.fourth.id, clip: video_url_10 },
    { title: "manta rays flying", uploader_id: User.fourth.id, clip: video_url_17,  description: manta_description },
    { title: "Boys Latin (1/4)", uploader_id: User.first.id, clip: video_url_1 },
    { title: "Pea shoot", uploader_id: User.fifth.id, clip: video_url_24, description: "A wonderful pea makes its way." },
    { title: "Checking out sites", uploader_id: User.first.id, clip: video_url_5 },
    { title: "Pet Crab pt. 2", uploader_id: User.fourth.id, clip: video_url_12 },
    { title: "rothkorothkorothko pt.1", uploader_id: User.third.id, clip: video_url_18, description: rothko_description[0] },
    { title: "Father was an artist", uploader_id: User.fourth.id, clip: video_url_14 },
    { title: "Boys Latin (3/4)", uploader_id: User.first.id, clip: video_url_3 },
    { title: "A seed sprouts", uploader_id: User.fifth.id, clip: video_url_23, description: "A cool timelapse I made." },
    { title: "G R A S S H O P P E R", uploader_id: User.fourth.id, clip: video_url_15 },
    { title: "Warhol? Again?", uploader_id: User.fifth.id, clip: video_url_27, description: "interesting person, no? YES." },
    { title: "rothkorothkorothko pt.3", uploader_id: User.third.id, clip: video_url_20, description: rothko_description[2] },
    { title: "Pet Crab pt. 3", uploader_id: User.fourth.id, clip: video_url_13 },
    { title: "City of Ink", uploader_id: User.second.id, clip: video_url_7 },
    { title: "rothkorothkorothko pt.2", uploader_id: User.third.id, clip: video_url_19, description: rothko_description[1] },
    { title: "THIS", uploader_id: User.second.id, clip: video_url_9 },
    { title: "rothkorothkorothko pt.4", uploader_id: User.third.id, clip: video_url_21, description: rothko_description[3] },
    { title: "Warhol?", uploader_id: User.fifth.id, clip: video_url_26, description: "interesting person, no?" }
])

4.times do |i|
  Following.create([
    { follower_id: User.first.id, leader_id: User.all[i+1].id }
  ])
end

Video.all.each do |video|
  5.times do |i|
    Comment.create(
      { user_id: User.all[i], video_id: video.id, body: Faker::Hipster.paragraph(2)  }
    )
  end
end
