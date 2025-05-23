const express = require('express');
const router = express.Router();

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',  
        added: new Date()
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date()
    },
];

router.get('/', (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', (req, res) => {
    res.render('form', { title: 'New message' });
});

router.post('/new', (req, res) => {
    const messageUser = req.body.messageUser;
    const messageText = req.body.messageText;
    messages.push({
        text: messageText,
        user: messageUser,
        added: new Date()
    });
    res.redirect('/');
})

router.get('/message/:id', (req, res) => {
    const message = messages[req.params.id];
    if(message) {
        res.render('message', {title: "Message Detail", message});
    } else {
        res.status(404).render('error', {title: "Error", message: "Message not found"});
    }
});

module.exports = router;