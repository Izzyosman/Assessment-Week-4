const feelings = [];
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
        const humbled = ["Italy","France","Thailand","Singapore","Pick a random Country" ] 

        let randomIndex1 = Math.floor(Math.random() * destination.length);
        let randomhumbled = destination[randomIndex1];

        res.status(200).send(randomhumbled);

    },
    getFortune: (req, res) => {
        const fortunes = ["All your hard work will soon pay off.", "All your hard work will soon pay off.","A lifetime of happiness lies ahead of you."];
    
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
   
    getsubmit: (req,res) =>{
        const submit = ["You're All Done"]

        res.status(200).send(submit)
    },
    getFeeling: (req,res) => {
        const {title} = req.body 
        
        feelings.push({
            title,
            id: globalID
        });
        globalID++;

        res.status(200).send(feelings)
    }, 
    deleteFeeling: (req,res) => {
        let index = feelings.findIndex(elem => elem.id === +req.params.id)
        feelings.splice(index, 1)
        res.status(200).send(feelings)
    },
    updateFeeling: (req,res) => {
        const {type} = req.body;
        let index = feeling.findindex(elem => elem.id === +req.params.id);
        res.status(200).send(goals);
    }, 
    createfeeling: (req,res) => {
        const {title} = req.body;
        let newFeeling = {
            id:globalID,
            title
        }
        feelings.push(newFeeling);

        globalID++;
        res.status(200).send(feelings)
    }
}


// const empty = document.form1.text1.value;
// if (empty === ""){
//     alert ("Please inpust a value");
// } else {
//     alert ("You submitted your response");
// }