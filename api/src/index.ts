import { createServer } from './server'

const port = 3100
const baseUrl = `http://localhost:${port}`

;async () => {
  const server = await createServer()
  server.listen(port)
  server.on('error', (error) => {
    console.log('error')
  })
}

// import { restClient } from '@polygon.io/client-js';
// const key = ''
// const rest = restClient(key);
// function test() {
//     rest.stocks.aggregates("AAPL", 1, "day", "2023-01-01", "2023-04-14").then((data) => {
//         console.log(data);
//     }).catch(e => {
//         console.error('An error happened:', e);
//     });
// }

// function main(){
//     test()
// }

// main()
