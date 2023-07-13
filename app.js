const express = require('express')
const app = express()

app.use(express.json())
// app.post('/api', (req, res) => {
//     res.send({ msg: 'success' })
//   })
app.use('/api', require('./routes/api/notification'))
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Server Started'))
