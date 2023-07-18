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

// update destination
const updateDestinationSubmit = document.getElementById("destinationsUpdateForm")
const updateDestinationsPut = (evt) => {
    let destination = document.getElementById("destinationUpdate").value;
    evt.preventDefault();
    let data = {
        destination: destination
    }
    axios.put("http://localhost:4000/api/destination/", data)
        .then(res => {
            const data = res.data;
            document.getElementById("messageDestinationDelete").innerHTML = data;
        });
};
updateDestinationSubmit.addEventListener('submit', updateDestinationsPut)

// create destination
const createDestinationBtn = document.getElementById("destinationsForm")
const createDestination = (evt) => {
    let country = document.getElementById("country").value;
    evt.preventDefault();
    let data = {
        country: country
    }
    axios.post("http://localhost:4000/api/destination", data)
        .then(res => {
            const data = res.data;
            console.log(data)
            // alert(data);
            document.getElementById("messageDestination").innerHTML = "Your selected destinations: " + data;
    });
};
createDestinationBtn.addEventListener('submit', createDestination)


// // create fortune 
// const createFortuneBtn = document.getElementById("destinationsForm")
// const createDestination = (evt) => {
//     let country = document.getElementById("country").value;
//     evt.preventDefault();
//     let data = {
//         country: country
//     }
//     axios.post("http://localhost:4000/api/destination", data)
//         .then(res => {
//             const data = res.data;
//             console.log(data)
//             // alert(data);
//             document.getElementById("messageDestination").innerHTML = "Your selected destinations: " + data;
//     });
// };
// createDestinationBtn.addEventListener('submit', createDestination)




// // Update compliments
// const updateComplimentsButton = document.getElementById("name");
// const updateCompliments = () => {
//     axios.put("http://localhost:4000/api/compliment/")
//         .then(res => {
//             const data = res.data;
//             alert(data);
//     });
// };

// updateComplimentsButton.addEventListener('click', updateCompliments);


// // update destination
// const updateDestinationsButton = document.getElementById("name");
// const updateDestinations = () => {
//     axios.put("http://localhost:4000/api/destination/")
//         .then(res => {
//             const data = res.data;
//             alert(data);
//     });
// };

// updateDestinationsButton.addEventListener('click', updateDestinations);

// // update fortune 
// const updateFortunesButton = document.getElementById("name");
// const updateFortunes = () => {
//     axios.put("http://localhost:4000/api/fortune/")
//         .then(res => {
//             const data = res.data;
//             alert(data);
//     });
// };

// updateFortunesButton.addEventListener('click', updateFortunes);

// // delete compliment
// const deleteComplimentsButton = document.getElementById("name");
// const deleteCompliments = () => {
//     axios.delete("http://localhost:4000/api/compliment/")
//         .then(res => {
//             const data = res.data;
//             alert(data);
//     });
// };

// deleteComplimentsButton.addEventListener('click', deleteCompliments);

// // delete destination
const deleteDestinationsButton = document.getElementById("deleteButton");
const deleteDestinations = () => {
    axios.delete("http://localhost:4000/api/destination/")
        .then(res => {
            const data = res.data;
            document.getElementById("messageDestinationDelete").innerHTML = data;
    });
};
deleteDestinationsButton.addEventListener('click', deleteDestinations);

const getDestinations = (evt) => {
    axios.get("http://localhost:4000/api/destinations/")
    .then(res => {
        document.getElementById("messageDestinationDelete").innerHTML = res.data;
    })
}
window.onload = getDestinations();

// // delete fortune 
// const deleteFortunesButton = document.getElementById("name");
// const deleteFortunes = () => {
//     axios.delete("http://localhost:4000/api/fortune/")
//         .then(res => {
//             const data = res.data;
//             alert(data);
//     });
// };

// deleteFortunesButton.addEventListener('click', deleteFortunes);



