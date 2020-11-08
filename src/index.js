const express = require('express')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')
require('./db/mongoose')

//Setting up express and port number for both local and heroku app
const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('get request are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site under maintanence')
// })




//To recognize the incoming object body as a json object
app.use(express.json())

//Setting up the router
app.use(userRouter)
app.use(taskRouter)

// const router = new express.Router()
// router.get('/test', (req, res) => {
//     res.send('router')
// })
// app.use(router)


const multer = require('multer')
const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})


//Server setup
app.listen(port, () => {
    console.log(`The server is running at port ${port}`)
})


// const bcrypt = require('bcryptjs')

// const myfunction = async () => {
//     const password = 'red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(password, hashedPassword)

//     const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
//     console.log(isMatch)
// }

// myfunction()

// const jwt = require('jsonwebtoken')

// const myfunction = async () => {
//     const token = jwt.sign({ _id: '1234abc' }, 'thisismynewtoken', { expiresIn: '7 days' }) //returns three data separated by dot=head(what type of token),data that was provided,signature to verify the token

//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewtoken')
//     console.log(data)
// }

// myfunction()

// const pet = {
//     name: 'Hal'
// }
// pet.toJSON = function () {
//     // console.log(this)
//     // return this
//     return {}
// }
// console.log(JSON.stringify(pet))

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5f8051bff98f007a901e74d0')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5f80502af98f007a901e74ce')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }
// main()