const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json(
        {
            'employess': [
                'employee1',
                'employee2',
                'employee3',
            ]
        }
    );
});

app.listen(5000, () => { console.log('Server has started on port 5000') });
