const jsonMessage = require('./message');

function allArtists(artists, app) {
    app.get('/api/artists', (req, resp) => {resp.json(artists)});
}

function artistsByCountry(artists, app) {
    app.get('/api/artists/:country', (req, resp) => {
        const country = req.params.country.toLowerCase();
        const matches = artists.filter(artist => artist.Nationality.toLowerCase() == country);

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Could not find matches with country '${country}'`));
        }
    });
}

module.exports = {
    allArtists,
    artistsByCountry
}