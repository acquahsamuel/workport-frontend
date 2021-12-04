const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/workport-client'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/workport-client/index.html'));
});


const port = process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log(`Server Started on port ${port}`)
})

// @desc  Handle unhandled Rejection
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION Shutting down')
    console.log(err.name, err.stack, err.message)
})
