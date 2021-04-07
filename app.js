const exprss = require('express');
const app = epress();

app.get('/usrs/test', (req, es) => {
    res.send({ msg: 'Testing' });
});

app.listen(5000, () => console.log('Running on Port 5000'));
