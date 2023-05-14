const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: '7YYLH6tCnu7Tmv8uFSGU'
  }
})