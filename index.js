const {app} = require('./server');
const liveMatchRoutes = require('./routes/liveMatch.routes');

app.get('/api/v1', (req,res)=>res.status(200).send('test express server is running...'));;
app.use('/api/v1/liveMatch', liveMatchRoutes);
