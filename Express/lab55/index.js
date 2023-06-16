const express = require('express');
const authMiddleware = require('./authMiddleware')
const bodyParser = require('body-parser');

const app = express();
const PORT = 3030;

let users = [
 { id: 1, name: 'John Doe' },
 { id: 2, name: 'Jane Doe' },
 { id: 3, name: 'Jack Daniels' },
 ];


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', authMiddleware.authenticateToken, (req, res) => {
 res.send('Hello World!');
});

app.get('/api/users', (req,res) => {
    res.send(users);
})

app.post('/api/users', (req,res) => {
    // const {id} = req.body;
    // const {name} = req.body;
    // let new = {id, name};
    users.push(req.body);
    res.send(users);
})

app.get('/api/users/:id', (req,res) => {
    const id = Number(req.params.id);

    const foundUser = users.find( fuser => fuser.id === id)

    if(foundUser) {
        res.send(foundUser.name);
    } else {
        res.status(404).send('User not found!')
    }
})

app.put('/api/users/:id', (req,res) => {
    const id = Number(req.params.id);

    const {name} = req.body;

    const foundUser = users.find(foundUser => foundUser.id === id);

    if (foundUser) {
        foundUser.name = name || foundUser.name;
        res.send(foundUser)
    } else {
        res.status(404).send('Not Found')
    }
})

app.delete('/api/users/:id', (req,res) =>{
    const id = Number(req.params.id);
    users = users.filter(user => user.id !== id)
    res.send(`User  with id ${id} has been deleted`)
}
)

app.listen(PORT, () => {
 console.log(`Example app listening at http://localhost:${PORT}`);
});
