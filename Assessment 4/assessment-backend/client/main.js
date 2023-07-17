const complimentBtn = document.getElementById("complimentButton")

// Get
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)


// 
const destinationBtn = document.getElementById("destinationButton")
const getDestination= () => {
    axios.get("http://localhost:4000/api/destination/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
destinationBtn.addEventListener('click', getDestination)

const fortuneBtn = document.getElementById("fortuneButton")
const getFortune= () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
fortuneBtn.addEventListener('click', getFortune)

// create compliment 
const createCompliment = document.getElementById("name")
const createCompliment = () => {
    axios.post("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
name.addEventListener('click', name)

// create destination
const createDestinationBtn = document.getElementById("createDestination")
const createDestination = () => {
    axios.post("http://localhost:4000/api/destination/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
createDestinationBtn.addEventListener('click', createDestination)


// create fortune 
const createFortuneButton = document.getElementById("name");
const createFortune = () => {
    axios.post("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

createFortuneButton.addEventListener('click', createFortune);




// Update compliments
const updateComplimentsButton = document.getElementById("name");
const updateCompliments = () => {
    axios.put("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

updateComplimentsButton.addEventListener('click', updateCompliments);


// update destination
const updateDestinationsButton = document.getElementById("name");
const updateDestinations = () => {
    axios.put("http://localhost:4000/api/destination/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

updateDestinationsButton.addEventListener('click', updateDestinations);

// update fortune 
const updateFortunesButton = document.getElementById("name");
const updateFortunes = () => {
    axios.put("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

updateFortunesButton.addEventListener('click', updateFortunes);

// delete compliment
const deleteComplimentsButton = document.getElementById("name");
const deleteCompliments = () => {
    axios.delete("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

deleteComplimentsButton.addEventListener('click', deleteCompliments);

// delete destination
const deleteDestinationsButton = document.getElementById("name");
const deleteDestinations = () => {
    axios.delete("http://localhost:4000/api/destination/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

deleteDestinationsButton.addEventListener('click', deleteDestinations);

// delete fortune 
const deleteFortunesButton = document.getElementById("name");
const deleteFortunes = () => {
    axios.delete("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

deleteFortunesButton.addEventListener('click', deleteFortunes);



