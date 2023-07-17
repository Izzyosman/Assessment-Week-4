const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require("./controller");
const { getsubmit } = require("./controller");
const { getFortune } = require("./controller");
const { getDestination } = require('./controller');
const { createDestination } = require('./controller');
const { createCompliment } = require('./controller');
const { createFortune } = require('./controller');
const { deleteDestinations } = require('./controller');
const { deleteCompliments } = require('./controller');
const { deleteFortunes } = require('./controller');
const { updateDestinations } = require('./controller');
const { updateCompliments } = require('./controller');
const { updateFortunes } = require('./controller');

// Get
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/destination", getDestination);
app.post("/api/submit", getsubmit);

// Create 
app.post('/api/compliment', createCompliment);
app.post('/api/fortune', createFortune);
app.post('/api/destination', createDestination)

// Update 
app.put('/api/compliment', updateCompliments);
app.put('/api/fortune', updateFortunes);
app.put('/api/destination', updateDestinations)


// Delete
app.delete('/api/compliment', deleteCompliments);
app.delete('/api/fortune', deleteFortunes);
app.delete('/api/destination', deleteDestinations)


app.listen(4000, () => console.log("Server running on 4000"));

