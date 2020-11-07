const User = require("../src/models/user")

require("../src/db/mongoose")

// User.findByIdAndUpdate('5f2482c82517507820c5b533', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 }) //return promise and use outside the then braces to handle it with another then
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f2482c82517507820c5b533', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})









