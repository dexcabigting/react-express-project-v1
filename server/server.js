const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json(
        {
            'employees': [
                {
                    'firstName': 'Pedro',
                    'lastName': 'Batumbakal',
                    'position': 'Mafia Boss',
                    'sickLeaveCredits': 4,
                    'vacationLeaveCredits': 2,
                    'hourlyRate': 210
                },
                {
                    'firstName': 'Lex',
                    'lastName': 'Luthor',
                    'position': 'CEO',
                    'sickLeaveCredits': 3,
                    'vacationLeaveCredits': 4,
                    'hourlyRate': 220
                },
                {
                    'firstName': 'Panny',
                    'lastName': 'Macquiao',
                    'position': 'Bakser',
                    'sickLeaveCredits': 2,
                    'vacationLeaveCredits': 7,
                    'hourlyRate': 230
                }
            ]
        }
    );
});

app.listen(5000, () => { console.log('Server has started on port 5000') });
