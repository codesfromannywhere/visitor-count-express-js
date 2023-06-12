import express from "express";
import mongoose from "mongoose";
import { Visit } from "./model/visitModel.js";
import "dotenv/config.js";

const app = express();
mongoose.connect(process.env.DB);

const PORT = process.env.PORT || 3006;
app.use(express.json());


// ========= REQUESTS  =========

app.get("/visit", async (req, res) => {
    // const visits = await Visit.count()
    const saveVisitor = async (id) => {
        let visitors = await Visit.findOne({ id });
        if (visitors == null) {
            const startCount = new Visit({
                count: 1
            });
            startCount.save();
            res.send(`<h2>Counter: ` + 1 + '</h2>')

        } else {
            visitors.count++;
            visitors.save();
            res.send(`<h2>Counter: ` + visitors.count + '</h2>')

        }
    };

    saveVisitor();
    // res.send({ message: "Yeah, ein neuer Besuch!" });
});

// app.get("/visited", async (req, res) => {
//     res.send({ message: "Yeah, alle Besuche!" });
// });


app.listen(PORT, () => {
    console.log(`Server läuft hier: ${PORT}`);
});