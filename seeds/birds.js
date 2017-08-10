
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        {id: 1, name: 'Kea', description: 'Who we are.', country_id: 1, imageUrl: 'https://c1.staticflickr.com/8/7286/8730294351_06704c2ecf_b.jpg'},
        {id: 2, name: 'Kiwi', description: 'A flightless bird.', country_id: 1, imageUrl: 'http://activeadventures.com/images/content/New_Zealand/Kiwi-bird-page.jpg'},
        {id: 3, name: 'Kakapo', description: 'I am green bird.', country_id: 1, imageUrl: 'https://a-z-animals.com/media/animals/images/original/kakapo.jpg'},
        {id: 4, name: 'Sea Gull', description: 'I live by the sea.', country_id: 2, imageUrl: 'https://cdn.pixabay.com/photo/2014/03/23/23/59/seagull-293699_960_720.jpg'},
        {id: 5, name: 'Crow', description: 'I am scared of straw men.', country_id: 2, imageUrl: 'http://thescienceexplorer.com/sites/thescienceexplorer.com/files/styles/content_image__large/public/blog/125572741_0c012a89b4_b.jpg?itok=aUdykJrb&timestamp=1449858596'},
        {id: 6, name: 'Falcon', description: 'Faster than a cheetah.', country_id: 2, imageUrl: 'https://lh5.ggpht.com/wUZJy3qQH6-PloQ3QVNSE9ZmxCu2ySdlyUZlGORvpmKntgjhIaP1hupAkCTcMOE-6NA=h900'},
        {id: 7, name: 'Starling', description: 'Has short and pointed wings.', country_id: 3, imageUrl: 'http://www.birddatabase.com/birdimages/800/2015072517122167.jpg'},
        {id: 8, name: 'Curlew', description: 'Long slender bill.', country_id: 3, imageUrl: 'http://greennews.ie/wp3/wp-content/uploads/2016/05/curlew_tcm9-137707.jpg'},
        {id: 9, name: 'Red kite', description: 'Is an elegant bird.', country_id: 3, imageUrl: 'http://www.surfbirds.com/media/gallery_photos/20050818090536.jpg'}
      ]);
    });
};
