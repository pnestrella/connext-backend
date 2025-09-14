const {app} = require('./app')



const PORT = 3000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Connected to port:${PORT}`);
})


module.exports = app