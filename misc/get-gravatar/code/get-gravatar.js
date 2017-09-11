'use latest'

const gravatar = require('gravatar')

module.exports = (event) => {
  if (event.data.email) {
    event.data.gravatarUrl = gravatar.url(event.data.email, {s: 200, d: 'mm'})
  }
  return {data: event.data}
}
