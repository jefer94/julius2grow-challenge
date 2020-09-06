#!/bin/node

const mongoose = require('mongoose')

function clearCollections() {
  console.log(mongoose.connection.collections)
  for (var collection in mongoose.connection.collections) {
    console.log(`delete ${collection}...`)
    mongoose.connection.collections[collection].remove(function() {})
  }
  console.log('done!')
}

/** Database connection. */
function db(connection = 'mongodb://localhost/choco') {
  mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) throw err
    return clearCollections()
  })
}


db()
