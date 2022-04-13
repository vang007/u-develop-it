const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection({
        host: 'localhost',
        // MySQL username
        user: vang007,
        // MYSQl password
        password: Zuzu2020$,
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// Default response for any other request (Not Found) aka *catchall route*
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});