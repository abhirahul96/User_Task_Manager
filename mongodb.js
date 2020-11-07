// //CRUD create read update delete

// // const mongodb = require('mongodb')
// // const MongoClient = mongodb.MongoClient
// // const ObjectID= mongodb.ObjectID

// const { MongoClient, ObjectID } = require('mongodb')



// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'


// // const id = new ObjectID
// // console.log(id.id.length)
// // console.log(id.getTimestamp())
// // console.log(id.toHexString().length)

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log("Unable to connect to the database!")
//     }
//     const db = client.db(databaseName)
//     db.collection('users').deleteMany({
//         age: 25
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })
//     db.collection('tasks').deleteOne({
//         description: Shopping
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })



















//     // const updatePromise = db.collection('users').updateOne({
//     //     _id: new ObjectID("5f218712ed102f6c54c5f2d8")
//     // }, {
//     //     $set: {
//     //         name: "Mike"
//     //     }
//     // })
//     // updatePromise.then((result) => {
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })


//     // db.collection('users').updateOne({
//     //     _id: new ObjectID("5f218712ed102f6c54c5f2d8")
//     // }, {
//     //     $set: {
//     //         name: "Mike"
//     //     }
//     // }).then((result) => {
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })

//     // db.collection('users').updateOne({
//     //     _id: new ObjectID("5f218712ed102f6c54c5f2d8")
//     // }, {
//     //     $inc: {
//     //         age: 1
//     //     }
//     // }).then((result) => {
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })


//     // db.collection('tasks').updateMany({
//     //     completed: false
//     // }, {
//     //     $set: {
//     //         completed: true
//     //     }
//     // }).then((result) => {
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })


















//     // db.collection('users').findOne({ _id: new ObjectID("5f21cab9882581506cd9f5de") }, (error, user) => {
//     //     if (error) {
//     //         return console.log('Unable to fetch!')
//     //     }
//     //     console.log(user)
//     // })

//     // db.collection('users').find({ age: 25 }).toArray((error, users) => {
//     //     console.log(users)
//     // })


//     // db.collection('users').find({ age: 25 }).count((error, count) => {
//     //     console.log(count)
//     // })

//     // db.collection('tasks').findOne({ _id: new ObjectID("5f21cbc924e98c23402d97f7") }, (error, task) => {
//     //     if (error) {
//     //         return console.log("Unable to fetch!")
//     //     }
//     //     console.log(task)
//     // })
//     // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
//     //     if (error) {
//     //         return console.log('Unable to fetch!')
//     //     }
//     //     console.log(tasks)
//     // })





//     // db.collection('users').insertOne({
//     //     name: 'abhi',
//     //     age: 25
//     // }, (error, result) => {
//     //     if (error) {
//     //         return console.log("Unable to insert user")
//     //     }

//     //     console.log(result.ops)
//     // })

//     // db.collection('users').insertOne({
//     //     _id: id,
//     //     name: 'abhi',
//     //     age: 25
//     // }, (error, result) => {
//     //     if (error) {
//     //         return console.log("Unable to insert user")
//     //     }

//     //     console.log(result.ops)
//     // })

//     // db.collection('users').insertMany([
//     //     {
//     //         name: 'Jen',
//     //         age: 27
//     //     },
//     //     {
//     //         name: 'Dave',
//     //         age: 25
//     //     }
//     // ], (error, result) => {
//     //     if (error) {
//     //         return console.log('Unable to insert documents!')
//     //     }
//     //     console.log(result.ops)
//     // })
//     // db.collection('tasks').insertMany([
//     //     {
//     //         description: 'Shopping',
//     //         completed: true
//     //     }, {
//     //         description: 'Car Wash',
//     //         completed: true
//     //     }, {
//     //         description: 'Mow lawn',
//     //         completed: false
//     //     }
//     // ], (error, result) => {
//     //     if (error) {
//     //         return console.log('Unable to insert document!')
//     //     }
//     //     console.log(result.ops)
//     // })
// })