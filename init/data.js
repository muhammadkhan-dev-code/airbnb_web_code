const mongoose = require('mongoose');

const sampleListings = [
  // Lahore Listings
  {
    title: "Apartment in Lahore",
    description: "Modern apartment in the heart of Lahore, perfect for a comfortable stay.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1389747277952780100/original/8e15fa32-904f-4ee6-952e-3d1e2484082c.jpeg?im_w=1200",
      filename: "Lahore_Apartment_1.jpeg"
    },
    price: 89,
    location: "Lahore",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Condo in Lahore",
    description: "Stylish condo offering a cozy ambiance and all essential amenities.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4MzQyNTIwOTg1NjM5MDU5OA%3D%3D/original/f6390132-f2bf-4564-86a7-4d7b6e7f5da8.jpeg?im_w=1200",
      filename: "Lahore_Condo_1.jpeg"
    },
    price: 63,
    location: "Lahore",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Home in Lahore",
    description: "Spacious home with a contemporary design and secure surroundings.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1411688940582540706/original/e9904950-e0d0-47ab-a584-912046826b78.jpeg?im_w=1200",
      filename: "Lahore_Home_1.jpeg"
    },
    price: 204,
    location: "Lahore",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Lahore",
    description: "Charming apartment with a peaceful vibe and scenic view.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1333984342007307222/original/51d6e969-95e3-4c06-a653-e4a93fc22dd4.jpeg?im_w=1200",
      filename: "Lahore_Apartment_2.jpeg"
    },
    price: 57,
    location: "Lahore",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Condo in Lahore",
    description: "Luxury condo with plush interiors and excellent lighting.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-835399638206443101/original/d5bc61d9-3e58-4320-acc5-6653fc42e363.jpeg?im_w=1200",
      filename: "Lahore_Condo_2.jpeg"
    },
    price: 110,
    location: "Lahore",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Condo in Lahore",
    description: "Elegant and well-decorated condo ideal for relaxing stays.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1414694237606953184/original/e8ba0e63-3357-4d5e-a798-41d41ffbe6f3.jpeg?im_w=720",
      filename: "Lahore_Condo_3.jpeg"
    },
    price: 41,
    location: "Lahore",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  // Karachi Listings
  {
    title: "Apartment in Karachi",
    description: "Modern apartment with a cozy lounge and entertainment setup.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1346357742979863786/original/50e075cc-9290-4195-8385-bceb119ef484.jpeg?im_w=1200",
      filename: "Karachi_Apartment_1.jpeg"
    },
    price: 109,
    location: "Karachi",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Karachi",
    description: "Stylish green-themed interior with elegant lighting.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1069617195159068035/original/16f75726-0ac0-4ee6-a568-36fbad72b9bf.jpeg?im_w=1200",
      filename: "Karachi_Apartment_2.jpeg"
    },
    price: 132,
    location: "Karachi",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Condo in Karachi",
    description: "Artistic space with a large wall painting and indoor plants.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1257682100579478788/original/b5061198-dd5d-4805-bf91-d983d6459851.jpeg?im_w=1200",
      filename: "Karachi_Condo_1.jpeg"
    },
    price: 105,
    location: "Karachi",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Place to stay in Karachi",
    description: "Simple and cozy bed space with monochrome rug design.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-38830813/original/02ebeb8b-3b5d-4a96-83e8-c002cc8b8230.jpeg?im_w=1200",
      filename: "Karachi_Place_to_stay_1.jpeg"
    },
    price: 65,
    location: "Karachi",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Apartment in Karachi",
    description: "Colorful apartment with creative wall art and comfortable seating.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1305293947573592876/original/9ff95d0b-a629-49f6-9808-dd5dfd35d5f7.jpeg?im_w=1200",
      filename: "Karachi_Apartment_3.jpeg"
    },
    price: 89,
    location: "Karachi",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Karachi",
    description: "Compact space with a patterned bed and stylish décor.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1239988024606070255/original/03052c0a-0649-4ea7-bbc2-ff0def27c differing: .jpeg?im_w=1200",
      filename: "Karachi_Apartment_4.jpeg"
    },
    price: 50,
    location: "Karachi",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  // Islamabad Listings
  {
    title: "Apartment in Islamabad",
    description: "Comfortable apartment with a homely feel in a peaceful neighborhood.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1367251379067875385/original/c231a24f-3cdb-42c6-9b35-11ed03d81e9a.jpeg?im_w=1200",
      filename: "Islamabad_Apartment_1.jpeg"
    },
    price: 66,
    location: "Islamabad",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Islamabad",
    description: "Well-lit apartment with modern furniture and a quiet atmosphere.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1304933741466095217/original/ba05d182-d725-412a-aae8-226f7fb50818.jpeg?im_w=1200",
      filename: "Islamabad_Apartment_2.jpeg"
    },
    price: 50,
    location: "Islamabad",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Condo in Islamabad",
    description: "Open-plan condo with natural lighting and elegant wooden flooring.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-581703137932548906/original/5c6a4213-116c-45a2-b127-d83ce9d98d5e.jpeg?im_w=1200",
      filename: "Islamabad_Condo_1.jpeg"
    },
    price: 71,
    location: "Islamabad",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Room in Islamabad",
    description: "Neat and clean private room suitable for solo travelers or couples.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1347807633986764701/original/8aed2320-f3f3-44a8-aacb-940e9d2de3be.jpeg?im_w=1200",
      filename: "Islamabad_Room_1.jpeg"
    },
    price: 58,
    location: "Islamabad",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Apartment in Islamabad",
    description: "Colorful and bright apartment ideal for short family trips.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1329162294001129420/original/e160f107-ee7c-49c6-a10b-c65d98ea01ce.jpeg?im_w=1200",
      filename: "Islamabad_Apartment_3.jpeg"
    },
    price: 51,
    location: "Islamabad",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Islamabad",
    description: "Scenic apartment with a balcony overlooking greenery.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1378942976815135905/original/29efc4c3-f61c-4bba-a936-5e15e6082eea.jpeg?im_w=1200",
      filename: "Islamabad_Apartment_4.jpeg"
    },
    price: 57,
    location: "Islamabad",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  // Rawalpindi Listings
  {
    title: "Apartment in Rawalpindi",
    description: "Cozy and modern apartment perfect for small groups and couples.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1404327516316400536/original/1a04cf85-4b7f-4a81-8f3a-9f2c379f0403.jpeg?im_w=1200",
      filename: "Rawalpindi_Apartment_1.jpeg"
    },
    price: 39,
    location: "Rawalpindi",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Rawalpindi",
    description: "Luxurious apartment with striking lighting and elegant decor.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1156891957521972173/original/60e95a1f-ae62-4cdd-ba5a-771fb16dfb4f.jpeg?im_w=1200",
      filename: "Rawalpindi_Apartment_2.jpeg"
    },
    price: 39,
    location: "Rawalpindi",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Home in Rawalpindi",
    description: "Spacious home with a king-size bed and soft lighting.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1377377110355434240/original/b1304007-55d3-48fb-9de9-1df97c54708b.jpeg?im_w=1200",
      filename: "Rawalpindi_Home_1.jpeg"
    },
    price: 54,
    location: "Rawalpindi",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Rawalpindi",
    description: "Modern black-themed apartment with plush sofas and smart TV.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzNzY4ODEwMzQwNDM0Mjk2Nw%3D%3D/original/aa3368cf-462f-4c7e-8d65-aa791cc85602.jpeg?im_w=1200",
      filename: "Rawalpindi_Apartment_3.jpeg"
    },
    price: 94,
    location: "Rawalpindi",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Apartment in Rawalpindi",
    description: "Curtained apartment with trendycian seating.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1329162294001129420/original/e160f107-ee7c-49c6-a10b-c65d98ea01ce.jpeg?im_w=1200",
      filename: "Rawalpindi_Apartment_4.jpeg"
    },
    price: 41,
    location: "Rawalpindi",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Home in Rawalpindi",
    description: "Stylish and colorful home with entertainment system and modern design.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1340235753040120334/original/1e95d73e-48af-4202-a185-d337aff348d3.jpeg?im_w=720",
      filename: "Rawalpindi_Home_2.jpeg"
    },
    price: 114,
    location: "Rawalpindi",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  // Dubai Listings
  {
    title: "Apartment in Downtown Dubai",
    description: "Luxurious view with skyline poolside and sunset ambiance.",
    image: {
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1025775067818659597/original/b3b95513-afa5-493b-8960-d455fc33702c.jpeg?im_w=1200",
      filename: "Downtown_Dubai_Apartment_1.jpeg"
    },
    price: 230,
    location: "Downtown Dubai",
    country: "UAE",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Downtown Dubai",
    description: "Warm interior with elegant furniture and ample lighting.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1150606883542942522/original/e7946478-2221-40c3-b796-105c0461b9f3.jpeg?im_w=1200",
      filename: "Downtown_Dubai_Apartment_2.jpeg"
    },
    price: 38,
    location: "Downtown Dubai",
    country: "UAE",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Home in Al-Quoz",
    description: "Comfortable living and dining area with warm lighting.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1406917288374532257/original/2ea4dae9-273c-4f99-bc0e-90741b6d4aac.jpeg?im_w=1200",
      filename: "Al_Quoz_Home_1.jpeg"
    },
    price: 102,
    location: "Al-Quoz",
    country: "UAE",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Al-Jafiliya",
    description: "Classic bed with soft colors and spacious setting.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwOTg0NDgzOTM4NTM2MDMzNw%3D%3D/original/c8dfa0f3-e949-4b12-8ce1-c5d9d929aced.png?im_w=1200",
      filename: "Al_Jafiliya_Apartment_1.png"
    },
    price: 98,
    location: "Al-Jafiliya",
    country: "UAE",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Apartment in Downtown Dubai",
    description: "Night view from a high-rise in the heart of Dubai.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1300908187532581909/original/452b0bd5-8409-4c02-a900-bfc59760da04.jpeg?im_w=1200",
      filename: "Downtown_Dubai_Apartment_3.jpeg"
    },
    price: 215,
    location: "Downtown Dubai",
    country: "UAE",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Downtown Dubai",
    description: "Modern white interior with open dining and lounge setup.",
    image: {
      url: "https://a0.muscache.com/im/pictures/airflow/Hosting-1322298014258145192/original/b3ad9040-1566-468c-b40f-f4b29dfe429d.jpg?im_w=1200",
      filename: "Downtown_Dubai_Apartment_4.jpg"
    },
    price: 164,
    location: "Downtown Dubai",
    country: "UAE",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  // London Listings
  {
    title: "Room in London",
    description: "Bright and airy room with minimal decor, perfect for a quiet stay.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-831694031910494701/original/2757dc34-b7c9-4329-b22d-91f4744bdf45.jpeg?im_w=1200",
      filename: "London_Room_1.jpeg"
    },
    price: 84,
    location: "London",
    country: "UK",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Room in Shadwell",
    description: "Cozy and colorful room with comfy seating and decor.",
    image: {
      url: "https://a0.muscache.com/im/pictures/f6269e52-511a-402f-a3a8-77261cefdfd4.jpg?im_w=1200",
      filename: "Shadwell_Room_1.jpg"
    },
    price: 147,
    location: "Shadwell",
    country: "UK",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Room in London",
    description: "Modern kitchen and spacious layout in shared accommodation.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-8922182/original/5b0800a7-c587-4a4a-8078-1e5d765d8370.jpeg?im_w=1200",
      filename: "London_Room_2.jpeg"
    },
    price: 112,
    location: "London",
    country: "UK",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Room in London",
    description: "Simple and clean room with a desk for work or study.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1339353315686220876/original/b4e5d850-9ff1-4e7f-93a8-18a34d08feae.jpeg?im_w=1200",
      filename: "London_Room_3.jpeg"
    },
    price: 235,
    location: "London",
    country: "UK",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Room in Plaistow South",
    description: "Stylish loft room with sloped ceiling and soft lighting.",
    image: {
      url: "https://a0.muscache.com/im/pictures/86fb12ed-5e0c-49e1-9e90-fe2b9364a14c.jpg?im_w=1200",
      filename: "Plaistow_South_Room_1.jpg"
    },
    price: 123,
    location: "Plaistow South",
    country: "UK",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Room in Wandsworth",
    description: "Bright and elegant room with cozy bedding and soft tones.",
    image: {
      url: "https://a0.muscache.com/im/pictures/c1254db7-f3aa-49cc-a9d7-69527807011f.jpg?im_w=1200",
      filename: "Wandsworth_Room_1.jpg"
    },
    price: 183,
    location: "Wandsworth",
    country: "UK",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Room in Greenwich",
    description: "Spacious classic room with vintage furniture and charm.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1082342780924186421/original/30e09746-2fa8-4849-b0b5-4e8b53e47b2c.jpeg?im_w=1200",
      filename: "Greenwich_Room_1.jpeg"
    },
    price: 154,
    location: "Greenwich",
    country: "UK",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  // Malaysia Listings
  {
    title: "Apartment in Bukit Bintang",
    description: "Skyline night view with iconic city lights of Kuala Lumpur.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-54372276/original/18d60769-2a7c-404f-90f4-462ea6dfe7c0.jpeg?im_w=1200",
      filename: "Bukit_Bintang_Apartment_1.jpeg"
    },
    price: 71,
    location: "Bukit Bintang",
    country: "Malaysia",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Place to stay in Cheras",
    description: "Artistic and budget-friendly room with creative wall shelves.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-769454552597427567/original/cc37897f-39f3-4e76-8f11-d834df0e7430.jpeg?im_w=1200",
      filename: "Cheras_Place_to_stay_1.jpeg"
    },
    price: 44,
    location: "Cheras",
    country: "Malaysia",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Kampung Bahru",
    description: "Stunning view from modern high-rise with glass walls.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1050640214490822608/original/2536b828-a28f-40d5-968d-409fb8159967.jpeg?im_w=1200",
      filename: "Kampung_Bahru_Apartment_1.jpeg"
    },
    price: 143,
    location: "Kampung Bahru",
    country: "Malaysia",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Place to stay in Bukit Bintang",
    description: "Bright blue themed room with neat and clean surroundings.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1062128118153284593/original/88905517-ca4d-4a18-bfe9-86d84c4108c9.jpeg?im_w=1200",
      filename: "Bukit_Bintang_Place_to_stay_1.jpeg"
    },
    price: 44,
    location: "Bukit Bintang",
    country: "Malaysia",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Bukit Bintang",
    description: "Infinity pool view with KLCC towers in sight.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1022878043254411977/original/5063c709-7c65-4770-9752-e87a94a01d35.jpeg?im_w=1200",
      filename: "Bukit_Bintang_Apartment_2.jpeg"
    },
    price: 91,
    location: "Bukit Bintang",
    country: "Malaysia",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Condo in Bukit Bintang",
    description: "White themed stylish room with practical working area.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-613038902962886128/original/a89a5377-52b0-47e4-82ce-f1f8f6f64cb1.jpeg?im_w=1200",
      filename: "Bukit_Bintang_Condo_1.jpeg"
    },
    price: 64,
    location: "Bukit Bintang",
    country: "Malaysia",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Condo in Bukit Bintang",
    description: "Luxurious condo with dark sofa and balcony view.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1115750586465386775/original/5d89fb27-42f2-4905-967c-07906a6cb1f9.jpeg?im_w=1200",
      filename: "Bukit_Bintang_Condo_2.jpeg"
    },
    price: 90,
    location: "Bukit Bintang",
    country: "Malaysia",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  // Ayubia Listings
  {
    title: "Home in Ayubia",
    description: "A cozy home in Ayubia with stunning views of nature.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODk5ODI1MjU3NDQzNjQyNQ%3D%3D/original/a100b2a2-daba-4751-847e-a6134340cf47.jpeg?im_w=1200",
      filename: "Ayubia_Home_1.jpeg"
    },
    price: 474,
    location: "Ayubia",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Dunga Gali",
    description: "Modern apartment in Dunga Gali, perfect for a peaceful getaway.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-50219745/original/b670194c-884e-4281-b386-d41e7068c0fe.jpeg?im_w=1440",
      filename: "Dunga_Gali_Apartment_1.jpeg"
    },
    price: 126,
    location: "Dunga Gali",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Apartment in Dunga Gali",
    description: "Stylish apartment in Dunga Gali with great amenities.",
    image: {
      url: "https://a0.muscache.com/im/pictures/caac8ddf-68a1-44d1-a621-56420c199c60.jpg?im_w=1200",
      filename: "Dunga_Gali_Apartment_2.jpg"
    },
    price: 134,
    location: "Dunga Gali",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Condo in Murree",
    description: "Luxurious condo in the heart of Murree with scenic views.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1301427139684864958/original/b81ff6a4-c04e-44bd-97df-6f950e12abec.jpeg?im_w=1200",
      filename: "Murree_Condo_1.jpeg"
    },
    price: 70,
    location: "Murree",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Home in Ayubia",
    description: "Spacious home in Ayubia, ideal for family vacations.",
    image: {
      url: "https://a0.muscache.com/im/pictures/a963d050-8f68-45c2-95eb-d54d43367fd3.jpg?im_w=1200",
      filename: "Ayubia_Home_2.jpg"
    },
    price: 274,
    location: "Ayubia",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Murree",
    description: "Elegant apartment in Murree with modern furnishings.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMwNzc0Mjg4MDIwMjU4MjE4NA==/original/9c5a3a57-dd3b-4077-b4de-32f6957b03e4.jpeg?im_w=1200",
      filename: "Murree_Apartment_1.jpeg"
    },
    price: 132,
    location: "Murree",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Apartment in Murree",
    description: "Comfortable apartment in Murree with a cozy ambiance.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1391439759270181889/original/c3754889-7661-4c3d-abf0-b19d9da30a7b.jpeg?im_w=1200",
      filename: "Murree_Apartment_2.jpeg"
    },
    price: 126,
    location: "Murree",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Murree",
    description: "Charming apartment in Murree, perfect for a relaxing stay.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1353694329077466185/original/aaedc813-8edc-4fdb-8f40-af29aeefd5b8.jpeg?im_w=1440",
      filename: "Murree_Apartment_3.jpeg"
    },
    price: 126,
    location: "Murree",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Condo in Murree",
    description: "Modern condo in Murree with all the comforts of home.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1206679182836385793/original/a6162a1c-fb0a-4ebd-9d91-e593b2ae3679.jpeg?im_w=1200",
      filename: "Murree_Condo_2.jpeg"
    },
    price: 252,
    location: "Murree",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Murree",
    description: "Well-furnished apartment in Murree with great views.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1329798744329355093/original/6bff6bba-8175-413a-81f0-356e09c23ee8.jpeg?im_w=1200",
      filename: "Murree_Apartment_4.jpeg"
    },
    price: 252,
    location: "Murree",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Apartment in Jhika Gali",
    description: "Cozy apartment in Jhika Gali with a modern design.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1202868257457765492/original/ff299a76-8aa7-4c3b-9c11-6364cba063e9.jpeg?im_w=1200",
      filename: "Jhika_Gali_Apartment_1.jpeg"
    },
    price: 119,
    location: "Jhika Gali",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  },
  {
    title: "Apartment in Lower Topa",
    description: "Elegant apartment in Lower Topa with serene surroundings.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1253648695376130305/original/e92ba291-113e-48be-870f-5bb00f4cf482.jpeg?im_w=1200",
      filename: "Lower_Topa_Apartment_1.jpeg"
    },
    price: 130,
    location: "Lower Topa",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f92ce1e7930a6ef05871')
  },
  {
    title: "Condo in Bhurban",
    description: "Luxury apartment in Murree, ideal for a getaway.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1134164806028662540/original/39c08757-406d-464c-bdcb-3d9bc7856937.jpeg?im_w=1200",
      filename: "Bhurban_Condo_1.jpeg"
    },
    price: 398,
    location: "Murree",
    country: "Pakistan",
    owner: new mongoose.Types.ObjectId('6864f6e6e1e7930a6ef05855')
  }
];

module.exports = { data: sampleListings };