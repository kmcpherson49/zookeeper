const { animals } = require('./data/animals');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    if (query.diet) {
        filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
        filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
        filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
}
// add query.personalityTraits

app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});
app.listen(PORT, () => {
    console.log('API server now on port 3001!');
});

//https://git.heroku.com/shrouded-woodland-55314.git