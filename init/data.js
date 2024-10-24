const sampleListings = [
  
    {
      title: "Sushi Platter",
      description: "A variety of sushi rolls and nigiri, featuring fresh fish, rice, and seaweed, served with soy sauce and wasabi.",
      image:{
        filename: "listingimage",
        url: "https://www.foodandwine.com/thmb/INn0EkyNLp_DeBmgo4mzga-YHes=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Frappe-Cocktail-FT-RECIPE0723-5579a77771744d87a58aad5acc56e807.jpg",
      },
      price: 2500,
      location: "Tokyo",
      country: "Japan",
      category: "Savory"
    },
    // {
    //   title: "Penne Alfredo",
    //   description: "A creamy Italian pasta dish made with penne pasta tossed in a rich Alfredo sauce made from butter, cream, and Parmesan cheese.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://carveyourcraving.com/wp-content/uploads/2021/10/paneer-tikka-skewers-480x270.jpg",
    //   },
    //   price: 1200,
    //   location: "Rome",
    //   country: "Italy",
    //   category: "Pasta"
    // },
    {
      title: "French Onion Soup",
      description: "A classic French soup made with caramelized onions in a rich broth, topped with melted Gruyère cheese and served with toasted bread.",
      image:{
        filename: "listingimage",
        url: "https://recipes.net/wp-content/uploads/2024/06/29-Simple-Yet-Elegant-Desserts.jpg",
      },
      price: 900,
      location: "Paris",
      country: "France",
      category: "Starter"
    },
    // {
    //   title: "Pad Thai",
    //   description: "A traditional Thai stir-fried noodle dish with shrimp, tofu, egg, peanuts, bean sprouts, and a tangy tamarind sauce.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },
    //   price: 800,
    //   location: "Bangkok",
    //   country: "Thailand",
    //   category: "Savory"
    // },
    // {
    //   title: "Tacos al Pastor",
    //   description: "Mexican tacos made with marinated pork, pineapple, onions, and cilantro, served on soft corn tortillas.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },
    //   price: 600,
    //   location: "Mexico City",
    //   country: "Mexico",
    //   category: "Savory"
    // },
    // {
    //   title: "Beef Bourguignon",
    //   description: "A traditional French stew made with tender beef braised in red wine with mushrooms, onions, and bacon.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },
    //   price: 1800,
    //   location: "Lyon",
    //   country: "France",
    //   category: "Savory"
    // },
    // {
    //   title: "Moussaka",
    //   description: "A Greek casserole layered with eggplant, ground lamb, potatoes, and a creamy béchamel sauce.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },
    //   price: 1300,
    //   location: "Athens",
    //   country: "Greece",
    //   category: "Savory"
    // },
    // {
    //   title: "Fish and Chips",
    //   description: "A British classic of battered and deep-fried fish served with crispy chips (fries) and a side of tartar sauce.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },
    //   price: 1000,
    //   location: "London",
    //   country: "United Kingdom",
    //   category: "Savory"
    // },
    // {
    //   title: "Chicken Shawarma",
    //   description: "A popular Middle Eastern dish featuring slow-roasted, spiced chicken, served in a pita with garlic sauce, pickles, and vegetables.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },
    //   price: 700,
    //   location: "Beirut",
    //   country: "Lebanon",
    //   category: "Sandwich"
    // },
    // {
    //   title: "Crème Brûlée",
    //   description: "A classic French dessert featuring a rich vanilla custard with a perfectly caramelized sugar crust.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },
    //   price: 600,
    //   location: "Paris",
    //   country: "France",
    //   category: "Dessert"
    // }
  
    // {
    //   title: "Luxury Penthouse with City Views",
    //   description:
    //     "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 3500,
    //   location: "Los Angeles",
    //   country: "United States",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Ski-In/Ski-Out Chalet",
    //   description:
    //     "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 3000,
    //   location: "Verbier",
    //   country: "Switzerland",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Safari Lodge in the Serengeti",
    //   description:
    //     "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 4000,
    //   location: "Serengeti National Park",
    //   country: "Tanzania",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Historic Canal House",
    //   description:
    //     "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 1800,
    //   location: "Amsterdam",
    //   country: "Netherlands",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Private Island Retreat",
    //   description:
    //     "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 10000,
    //   location: "Fiji",
    //   country: "Fiji",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Charming Cottage in the Cotswolds",
    //   description:
    //     "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 1200,
    //   location: "Cotswolds",
    //   country: "United Kingdom",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Historic Brownstone in Boston",
    //   description:
    //     "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 2200,
    //   location: "Boston",
    //   country: "United States",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Beachfront Bungalow in Bali",
    //   description:
    //     "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 1800,
    //   location: "Bali",
    //   country: "Indonesia",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Mountain View Cabin in Banff",
    //   description:
    //     "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 1500,
    //   location: "Banff",
    //   country: "Canada",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Art Deco Apartment in Miami",
    //   description:
    //     "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 1600,
    //   location: "Miami",
    //   country: "United States",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Tropical Villa in Phuket",
    //   description:
    //     "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 3000,
    //   location: "Phuket",
    //   country: "Thailand",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Historic Castle in Scotland",
    //   description:
    //     "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 4000,
    //   location: "Scottish Highlands",
    //   country: "United Kingdom",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Desert Oasis in Dubai",
    //   description:
    //     "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 5000,
    //   location: "Dubai",
    //   country: "United Arab Emirates",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Rustic Log Cabin in Montana",
    //   description:
    //     "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 1100,
    //   location: "Montana",
    //   country: "United States",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Beachfront Villa in Greece",
    //   description:
    //     "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 2500,
    //   location: "Mykonos",
    //   country: "Greece",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Eco-Friendly Treehouse Retreat",
    //   description:
    //     "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 750,
    //   location: "Costa Rica",
    //   country: "Costa Rica",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Historic Cottage in Charleston",
    //   description:
    //     "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 1600,
    //   location: "Charleston",
    //   country: "United States",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Modern Apartment in Tokyo",
    //   description:
    //     "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 2000,
    //   location: "Tokyo",
    //   country: "Japan",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Lakefront Cabin in New Hampshire",
    //   description:
    //     "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 1200,
    //   location: "New Hampshire",
    //   country: "United States",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Luxury Villa in the Maldives",
    //   description:
    //     "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 6000,
    //   location: "Maldives",
    //   country: "Maldives",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Ski Chalet in Aspen",
    //   description:
    //     "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 4000,
    //   location: "Aspen",
    //   country: "United States",
    //   catagory: "Trending"
    // },
    // {
    //   title: "Secluded Beach House in Costa Rica",
    //   description:
    //     "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    //   image:{
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //   },        
    //   price: 1800,
    //   location: "Costa Rica",
    //   country: "Costa Rica",
    //   catagory: "Trending"
    // }
  ];
  
  module.exports = { data: sampleListings };