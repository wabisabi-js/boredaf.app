require('dotenv').config()
var Airtable = require('airtable')

const AIRTABLE_KEY = process.env.AIRTABLE_KEY

exports.handler = function(e, context, callback) {
  var base = new Airtable({ apiKey: AIRTABLE_KEY }).base('appqGC4esqWuek05F')
  const event = e.queryStringParameters.activity

  console.log(event)

  base('activities').create({ activity: event }, function(err, record) {
    if (err) {
      callback(err)
      return
    }

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ id: record.getId(), status: 'created' }),
    })
  })
}
