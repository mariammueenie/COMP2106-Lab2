import http from 'http';
import axios from 'axios';
//Lab 2 :)
const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    try {
        const apiData = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

        res.write('<h2>Sample API Data</h2>');
        res.write(JSON.stringify(apiData.data));
    } catch (error) {
        res.write('<h2>Sample API Data</h2>');
        res.write('Error retrieving API data');
    }

    res.end();
});

server.listen(4000, () => {
    console.log('Server running at http://localhost:4000');
});