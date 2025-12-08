const jsonMessage = require('./json-message');

function allPaintings(paintings, app) {
    app.get('/api/paintings', (req, resp) => {resp.json(paintings)});
}

function paintingById(paintings, app) {
    app.get('/api/painting/:id', (req, resp) => {
        const id = parseInt(req.params.id);
        const matches = paintings.filter(painting => painting.paintingID == id);

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Could not find matches with id '${id}'`));
        }
    });
}

function paintingByGalleryId(paintings, app) {
    app.get('/api/painting/gallery/:id', (req, resp) => {
        const id = parseInt(req.params.id);
        const matches = paintings.filter(painting => painting.gallery.galleryID == id);

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Could not find matches with id '${id}'`));
        }           
    });
}

function paintingByArtistId(paintings, app) {
    app.get('/api/painting/artist/:id', (req, resp) => {
        const id = parseInt(req.params.id);
        const matches = paintings.filter(painting => painting.artist.artistID == id);
        
        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Could not find matches with id '${id}'`));
        }
    });
}

function paintingByYearRange(paintings, app) {
    app.get('/api/painting/year/:min/:max', (req, resp) => {
        const min = parseInt(req.params.min);
        const max = parseInt(req.params.max);
        const matches = paintings.filter(painting => painting.yearOfWork > min && painting.yearOfWork < max);

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Could not find matches with years between '${min}' to '${max}'`));
        }
    });
}

function paintingByTitle(paintings, app) {
    app.get('/api/painting/title/:text', (req, resp) => {
        const text = req.params.text.toLowerCase();
        const matches = paintings.filter(painting => painting.title.toLowerCase().includes(text));

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Could not find matches with titles including '${text}'`));
        }
    });
}

function paintingByColor(paintings, app) {
    app.get('/api/painting/color/:name', (req, resp) => {
        const name = req.params.name.toLowerCase();
        const matches = paintings.filter(painting => {
            const dominateColors = painting.details.annotation.dominantColors;
            return dominateColors.find(color => color.name.toLowerCase() == name);
        });

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Could not find matches with color '${name}'`));
        }
    });
}

module.exports = {
    allPaintings,
    paintingById,
    paintingByGalleryId,
    paintingByArtistId,
    paintingByYearRange,
    paintingByTitle,
    paintingByColor
}