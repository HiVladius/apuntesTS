const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.json(
        {
            message: "Hello World!",
            id: 1
        });
    }
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    }
);