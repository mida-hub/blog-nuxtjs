const contentful = require('contentful')
const defaultConfig = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  CTF_URL: process.env.CTF_URL
}

module.exports = {
  createClient(config = defaultConfig) {
    return contentful.createClient({
      space: config.CTF_SPACE_ID,
      accessToken: config.CTF_CDA_ACCESS_TOKEN,
      host: config.CTF_URL
    })
  }
}
