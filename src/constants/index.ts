import { BottomTabImagesData, ButtonDataType, PlaceImageDataType } from '../types';

export const buttonData: ButtonDataType[] = [
  {
    id: 1,
    title: 'Most Viewed',
    isActive: true,
  },
  {
    id: 2,
    title: 'Nearby',
    isActive: false,
  },
  {
    id: 3,
    title: 'Viewed',
    isActive: false,
  },
];

export const placeImages: PlaceImageDataType[] = [
  {
    id: 1,
    imgSrc: require('../assets/Images/mountFuji.jpg'),
    isFavourite: false,
    name: 'Mount Fuji',
    location: 'Honshu',
    rating: 4.7,
    price: '200',
    description:
      'Mount Fuji, Japan’s highest peak at 3,776 meters, is an iconic symbol of natural beauty and cultural significance. Located on Honshu Island, this active stratovolcano captivates with its symmetrical cone, often snow-capped, inspiring artists, poets, and pilgrims for centuries. Revered in Shinto and Buddhist traditions, it’s a UNESCO World Heritage Site, drawing climbers and tourists alike. The climbing season, from July to September, offers clear trails and stunning summit views of sunrise, known as “Goraiko.” The Fuji Five Lakes region below provides serene landscapes, with Lake Kawaguchi offering breathtaking reflections of the mountain. Trails like the Yoshida Trail are popular, catering to both novice and experienced hikers. The mountain’s cultural importance extends to festivals like the Fuji Fire Festival, celebrating its spiritual legacy. Climbers prepare for variable weather, as temperatures can drop significantly at higher altitudes. The ascent typically takes 5-7 hours, with a descent of 3-4 hours, making it a rewarding day trip. Mount Fuji’s allure lies in its blend of natural grandeur and spiritual resonance, offering a profound experience for those who venture to its summit or explore its base. Local cuisine, like Hoto noodles, enhances the visit, while nearby hot springs provide relaxation. Whether for adventure or contemplation, Mount Fuji remains a must-visit destination, embodying Japan’s harmony with nature.',
    country: 'Japan',
    temperature: '15 °C',
    time: '7 hours',
  },
  {
    id: 2,
    imgSrc: require('../assets/Images/mountAndes.webp'),
    isFavourite: false,
    name: 'Aconcagua',
    location: 'Andes',
    rating: 4.3,
    price: '500',
    description:
      'Aconcagua, standing at 6,960 meters, is the highest peak in the Andes mountain range and the Southern and Western Hemispheres. Located in the Andes, near the Argentina-Chile border, it’s a magnet for mountaineers seeking to conquer one of the Seven Summits. Its rugged terrain, from the Horcones Valley to the summit’s glaciers, challenges even seasoned climbers. The Normal Route via Plaza de Mulas is popular, offering breathtaking views of the Andes’ vast expanse. The region’s arid climate and high altitude demand careful acclimatization, with temperatures often dipping below freezing at higher elevations. Climbing Aconcagua typically takes 12-18 hours for the summit push, with expeditions lasting 2-3 weeks. The surrounding Aconcagua Provincial Park features diverse flora and fauna, including guanacos and condors. Cultural significance is evident in nearby Incan archaeological sites, adding historical depth to the adventure. The base camp’s vibrant community of climbers fosters camaraderie, while local guides provide expertise. Weather can be unpredictable, with sudden storms posing risks, so preparation is key. Beyond climbing, visitors enjoy trekking in the Andes, exploring Mendoza’s wine region, or relaxing in nearby hot springs. Aconcagua’s majesty lies in its towering presence and the sense of achievement it offers, making it a bucket-list destination for adventurers and nature enthusiasts alike.',
    country: 'Argentina',
    temperature: '10 °C',
    time: '12 hours',
  },
  {
    id: 3,
    imgSrc: require('../assets/Images/mountEverest.jpg'),
    isFavourite: false,
    name: 'Mount Everest',
    location: 'Himalayas',
    rating: 4.2,
    price: '100',
    description:
      'Mount Everest, the world’s highest peak at 8,848 meters, towers over the Himalayas on the Nepal-China border. A beacon for mountaineers, it’s the ultimate challenge among the Seven Summits, drawing adventurers to its formidable slopes. The South Col route from Nepal, via Everest Base Camp, is the most common path, offering stunning views of snow-clad peaks and glaciers. The climb requires extensive preparation, including acclimatization to combat altitude sickness, as oxygen levels drop significantly above 8,000 meters. Sherpa guides play a vital role, providing expertise and cultural insights into the region’s Buddhist heritage. The trek to Base Camp, a popular adventure for non-climbers, takes about 8-10 hours round-trip from Lukla, showcasing Himalayan villages and monasteries. Everest’s allure extends beyond climbing, with its spiritual significance and breathtaking landscapes captivating visitors. The Khumbu Icefall and Hillary Step are iconic features, though environmental concerns like melting glaciers highlight the need for sustainable tourism. Weather is a critical factor, with the May climbing window offering the best conditions. The region’s rich biodiversity, including rare snow leopards, adds to its appeal. For those not summiting, nearby towns like Namche Bazaar offer vibrant markets and cultural experiences. Mount Everest embodies human endurance and nature’s grandeur, making it a profound destination for adventurers and dreamers.',
    country: 'Nepal',
    temperature: '5 °C',
    time: '10 hours',
  },
  {
    id: 4,
    imgSrc: require('../assets/Images/andes.jpg'),
    isFavourite: false,
    name: 'K2',
    location: 'Karakoram',
    rating: 4.1,
    price: '250',
    description:
      'K2, at 8,611 meters, is the second-highest peak in the world, located in the Karakoram Range on the Pakistan-China border. Known as the “Savage Mountain,” it’s a formidable challenge for mountaineers, with steeper slopes and harsher conditions than Everest. The Abruzzi Spur is the most popular climbing route, demanding technical skill and endurance. Climbers face extreme weather, with temperatures plummeting below -30°C at higher altitudes, and avalanches pose significant risks. The ascent to the summit takes 10-14 hours from the highest camp, with expeditions lasting weeks due to acclimatization needs. The surrounding Baltoro Glacier and Concordia offer breathtaking views of jagged peaks, making it a paradise for trekkers. K2 Base Camp treks, taking 8-10 hours one way, are popular for non-climbers, showcasing the region’s stark beauty and remote villages. The mountain holds cultural significance for local Balti communities, with traditions rooted in the harsh landscape. Environmental efforts focus on preserving the fragile ecosystem, as litter and climate change threaten the area. K2’s raw, untamed beauty and extreme challenges make it a legendary destination, attracting those seeking adventure and solitude. Nearby Skardu offers a gateway to explore the region’s culture and cuisine, enhancing the experience.',
    country: 'Pakistan',
    temperature: '8 °C',
    time: '12 hours',
  },
];

export const bottomTabImages: BottomTabImagesData[] = [
  {
    imgSrc: require('../assets/icons/home.png'),
    isActive: true,
  },
  {
    imgSrc: require('../assets/icons/clock.png'),
    isActive: false,
  },
  {
    imgSrc: require('../assets/icons/heart.png'),
    isActive: false,
  },
  {
    imgSrc: require('../assets/icons/user.png'),
    isActive: false,
  },
];
