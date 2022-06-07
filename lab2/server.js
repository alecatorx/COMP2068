//import connect and all that
const connect = require('connect');

const app = connect();

console.log('running at http://localhost:3000');

const urlParams = new URLSearchParams(req.url.replace("/?", ""));

//calculator function
function calculator(req, res) {

    //variables
    const method = urlParams.get("method");
    const x = urlParams.get("x");
    const y = urlParams.get("y");
    res.end(req.url);

    //parse for the parameter, do the math, output
    switch(method.toLowerCase){
        case "add":
            console.log("+");
            console.log(x, "+", y, "=", (x + y));
            break;
        case "subtract":
            console.log("-");
            console.log(x, "-", y, "=", (x - y));
            break;
        case "multiply":
            console.log("*");
            console.log(x, "*", y, "=", (x * y));
            break;
        case "divide":
            console.log("/");
            console.log(x, "/", y, "=", (x / y));
            break;
        default:
            console.log("Input invalid: please enter a valid method");
            break;

    }

}

app.use("/lab2", calculator);

app.listen(3000);

