const Task = require("../src/models/task")
require("../src/db/mongoose")


// Task.findByIdAndRemove('5f266f11c2f55522c044f6bf').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}
deleteTaskAndCount('5f280ed13a3a658738df748d').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})






