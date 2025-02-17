const liveMatchData1 = require('../liveData1.json');
const liveMatchData2 = require('../liveData2.json');
const liveMatchData3 = require('../liveData3.json');
let a = 0;
let currentData1 = liveMatchData1[a % liveMatchData1.length]; 
let currentData2 = liveMatchData1[a % liveMatchData2.length]; 
let currentData3 = liveMatchData1[a % liveMatchData3.length]; 
async function matchData(){
    setInterval(()=>{
        a++; 
        currentData1 = liveMatchData1[a % liveMatchData1.length]; 
        currentData2 = liveMatchData2[a % liveMatchData2.length]; 
        currentData3 = liveMatchData3[a % liveMatchData3.length]; 
        // console.log('Updated live data:', currentData);
    }, 1500); 
}

matchData();

exports.liveMatchAPI = async(req, res)=>{
    console.log('Serving live data:', currentData1);
    res.status(200).send({
        message : 'live data...',
        data : currentData1
    });
}


exports.liveMatches = async(req, res) => {
    let matchData;
    try {
        const matchId=  req.params.id;
        console.log(typeof(matchId));
        switch (matchId) {
            case '1':
                matchData = currentData1
                break;
            case '2':
                matchData = currentData2
                break;
            case '3':
                matchData = currentData3
                break;
            default : 
                matchData = 'no match data available'
                break;
        }
        console.log(matchData);
        res.status(200).send({
            message : 'live data ..',
            data : matchData
        });
    } catch (error) {
        console.log(error);
        res.status(500).json('some fucking error occured');
    }
}