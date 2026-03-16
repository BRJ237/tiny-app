const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('
    <!DOCTYPE html>
    <html>
    <head>
        <title>Simple Animation Test</title>
        <style>
            body { margin: 0; overflow: hidden; background: black; }
            .ball {
                width: 50px;
                height: 50px;
                background: red;
                border-radius: 50%;
                position: absolute;
                animation: bounce 2s infinite;
            }
            @keyframes bounce {
                0% { left: 0; top: 0; }
                25% { left: 500px; top: 0; }
                50% { left: 500px; top: 500px; }
                75% { left: 0; top: 500px; }
                100% { left: 0; top: 0; }
            }
        </style>
    </head>
    <body>
        <div class="ball"></div>
        <h1 style="color: white; position: absolute; bottom: 20px; left: 20px;">If you see this moving red ball, it works!</h1>
    </body>
    </html>
  ');
});

app.listen(port, () => {
  console.log(Test server running at http://localhost:);
});
