const jsonMessage = require('./message');

function allGalleries(galleries, app) {
    app.get('/api/galleries', (req, resp) => {resp.json(galleries)});
}

function galleriesByCountry(galleries, app) {
    app.get('/api/galleries/:country', (req, resp) => {
        const country = req.params.country.toLowerCase();
        const matches = galleries.filter(gallery => gallery.GalleryCountry.toLowerCase() == country);

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Could not find matches with country '${country}'`));
        }
    });
}

module.exports = {
    allGalleries,
    galleriesByCountry
}