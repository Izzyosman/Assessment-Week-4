const compliments = [];
const destinations = [];
const fortunes = [];
let globalID = 0;

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["You are so smart!", "You are cool!", "You are funny!"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
         res.status(200).send(randomCompliment);
    },
    getDestination: (req,res)=>{
        const destination = ["Italy","France","Thailand","Singapore","Pick a random Country" ] 

        let randomIndex1 = Math.floor(Math.random() * destination.length);
        let randomDestination = destination[randomIndex1];

        res.status(200).send(randomDestination);

    },
    getFortune: (req, res) => {
        const fortunes = ["All your hard work will soon pay off.", "You will be very successful soon.", "A lifetime of happiness lies ahead of you."];
    
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
   
    getsubmit: (req,res) =>{
        const submit = ["You're All Done"]

        res.status(200).send(submit)
    },
    createCompliment: (req,res) => {
        const {title} = req.body;
        let newCompliment = {
            id:globalID,
            title
        }
        compliments.push(newCompliment);

        globalID++;
        res.status(200).send(compliments)
    },
    createDestination: (req,res) => {
        const {title} = req.body;
        let destination = {
            id:globalID,
            title
        }
        destinations.push(destination);

        globalID++;
        res.status(200).send(destinations)
    },

    createFortune: (req,res) => {
        const {title} = req.body;
        let newFortune = {
            id:globalID,
            title
        }
        fortunes.push(newFortune);

        globalID++;
        res.status(200).send(fortunes)
    },

    deleteCompliments: (req,res) => {
        let index = compliments.findIndex(elem => elem.id === +req.params.id)
        compliments.splice(index, 1)
        res.status(200).send(compliments)
    },
    updateCompliments: (req,res) => {
        const {type} = req.body;
        let index = compliments.findindex(elem => elem.id === +req.params.id);
        compliments[index] = type;
        res.status(200).send(compliments);
    }, 
    deleteDestinations: (req,res) => {
        let index = destinations.findIndex(elem => elem.id === +req.params.id)
        destinations.splice(index, 1)
        res.status(200).send(destinations)
    },
    updateDestinations: (req,res) => {
        const {type} = req.body;
        let index = destinations.findindex(elem => elem.id === +req.params.id);
        destinations[index] = type;
        res.status(200).send(destinations);
    }, 
    deleteFortunes: (req,res) => {
        let index = fortunes.findIndex(elem => elem.id === +req.params.id)
        fortunes.splice(index, 1)
        res.status(200).send(fortunes)
    },
    updateFortunes: (req,res) => {
        const {type} = req.body;
        let index = fortunes.findindex(elem => elem.id === +req.params.id);
        fortunes[index] = type;
        res.status(200).send(fortunes);
    }, 
}


// const empty = document.form1.text1.value;
// if (empty === ""){
//     alert ("Please inpust a value");
// } else {
//     alert ("You submitted your response");
// }