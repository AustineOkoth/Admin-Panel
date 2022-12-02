const express = require('express');
db = require("./database");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/statusview', (req, res) => {
    db.query("SELECT sentToday,deliveredToday,sentYesterday,deliveredYesterday FROM statusview ", (err, result) => {
        if (err) throw err;
        Object.keys(result).forEach((key) => {
            let statusViewData = result[key]
            let statusViewSentToday = statusViewData.sentToday;
            let statusDeliveredToday = statusViewData.deliveredToday;
            let statusViewSentYesterday = statusViewData.sentYesterday;
            let statusViewDeliveredYesterday = statusViewData.deliveredYesterday;

            res.send([`${statusViewSentToday}`, `${statusDeliveredToday}`, `${statusViewSentYesterday}`, `${statusViewDeliveredYesterday}`])
        })
    })
})

app.get('/statusgraph', (req, res) => { 
    db.query("SELECT totalSent,delivered,submitted,rejected,undelivered,dnd,others FROM statusgraph ", (err, result) => {
        if (err) throw err;
        Object.keys(result).forEach((key) => {
            
            let statusGraphData = result[key]
            let statusGraphtotalSent = statusGraphData.totalSent;
            let statusGraphDelivered = statusGraphData.delivered;
            let statusGraphSubmitted = statusGraphData.submitted;
            let statusGraphRejected = statusGraphData.rejected;
            let statusGraphUndelivered = statusGraphData.undelivered;
            let statusGraphDnd = statusGraphData.dnd;
            let statusGraphOther = statusGraphData.others;

            res.send([`${statusGraphtotalSent}`, `${statusGraphDelivered}`, `${statusGraphSubmitted}`,
             `${statusGraphRejected}`,`${statusGraphUndelivered}`,`${statusGraphDnd}`,`${statusGraphOther}`])
        })
    })
})


app.listen(5000, () => {
    console.log("listening on port 5000");
})