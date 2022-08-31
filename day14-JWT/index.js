
const { application } = require('express');
const express = require('express');
const app = express();
const PORT = 4000;
const jwt = require('jsonwebtoken');
const secret = "Secret";


app.use(express.json());
/*function generateJWTToken(username){
    console.log( jwt.sign(username, secret));

}
data(to be encoded), secret , expiresIn : when token should expire .
*/
function generateJWTToken(username) {
    return jwt.sign({
        data: username,
    },
        "secret",
        {
            expiresIn: 60 * 60
        }
    );
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
   // console.log(req.headers);
    console.log(authHeader);
    //getting only token from bearer
    const token = authHeader.split(' ')[1];
    console.log()
    //checking token existence
    if (authHeader == null) return res.send('No token found');
    // verifying token validity
    const decodedToken = jwt.verify(token, secret, function (err, user) {
        if (err) return res.send({ Error: err }) 
        console.log(user, req.body.user);
        req.body.user = user
    })
    next();
}
app.post('/token', (request, response) => {
   const token = generateJWTToken(request.body.name); 
    response.json(token);
})

app.post('/token', authenticateToken, (request, response) => {
    //const token = generateJWTToken(request.body.name);
    // response.json(token);
    response.json('ok');
})

console.log(generateJWTToken('priya'));
app.listen(PORT, console.log(' Server is running on the port ' + PORT));

