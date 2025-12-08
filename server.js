const express = require('express');

// create express app 
const app = express();

// set up data
const provider = require('./scripts/dataProvider');
const {artists, galleries, paintings} = provider;

// set up route handling 
const artistRouter = require('./scripts/artists'); 
artistRouter.allArtists(artists, app); 
artistRouter.artistsByCountry(artists, app); 

const galleriesRouter = require('./scripts/galleries'); 
galleriesRouter.allGalleries(galleries, app); 
galleriesRouter.galleriesByCountry(galleries, app); 

const paintingsRouter = require('./scripts/paintings'); 
paintingsRouter.allPaintings(paintings, app); 
paintingsRouter.paintingById(paintings, app); 
paintingsRouter.paintingByGalleryId(paintings, app); 
paintingsRouter.paintingByArtistId(paintings, app); 
paintingsRouter.paintingByYearRange(paintings, app); 
paintingsRouter.paintingByTitle(paintings, app); 
paintingsRouter.paintingByColor(paintings, app); 

// use express to listen to port 
let port = process.env.PORT; 
app.listen(port, () => { 
    console.log(`Server running at port ${port}`);
});