const liveMatchData = require('../liveData.json');
let a = 0;
let currentData = liveMatchData[a % liveMatchData.length]; 
async function matchData(){
    setInterval(()=>{
        a++; 
        currentData = liveMatchData[a % liveMatchData.length]; 
        // console.log('Updated live data:', currentData);
    }, 1500); 
}

matchData();

exports.liveMatchAPI = async(req, res)=>{
    console.log('Serving live data:', currentData);
    res.status(200).send({
        message : 'live data...',
        data : currentData
    });
}