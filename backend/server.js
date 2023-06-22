import express from "express";
import mongoose from "mongoose";
import { Visit } from "./model/visitModel.js";
import "dotenv/config.js";

const app = express();
mongoose.connect(process.env.DB);

const PORT = process.env.PORT || 3006;
app.use(express.json());



// ========= REQUEST VISIT +1  =========

app.get("/visit", async (req, res) => {
    const saveVisitor = async (id) => {
        let visitors = await Visit.findOne({ id });
        if (visitors == null) {
            const startCount = new Visit({
                count: 1
            });
            startCount.save();
            // res.send(`<h2>Visits: ` + 1 + '</h2>')
            // res.send(visitors)

        } else {
            visitors.count++;
            res.send(`${visitors.count}`)
            visitors.save();

        }
    };
    saveVisitor();
    // res.send({ message: "Yeah, ein neuer Besuch!" });
});



// ========= REQUEST ALL VISITS =========

app.get("/visited", async (req, res) => {
    const visits = await Visit.find()
    res.send(visits);
});




app.listen(PORT, () => {
    console.log(`Server läuft hier: ${PORT}`);
});




// import express from "express";
// import fs from "fs-jetpack";
// import cors from "cors";

// const PORT = process.env.PORT || 3006;
// const app = express();

// // Erstelle Absolute URL
// let { pathname } = new URL("./count.json", import.meta.url);
// // Stelle sicher das die Datei existiert
// // wenn nicht erstelle sie (leer)
// fs.file(pathname);
// // Aktueller zählerstand potentiel leerer string
// let counter = fs.read(pathname, "json");

// app.use(cors());

// app.get("/visit", (req, res) => {
//     console.log(req.query);
//     const { site } = req.query;

//     if (!site) {
//         res
//             .status(401)
//             .send({ error: "Use ?site query to specify site you want to track." });
//     }

//     if (!counter[site]) {
//         counter[site] = 0;
//     }

//     counter[site] += 1;
//     res.send();
//     fs.write(pathname, counter);
// });

// app.get("/visited", (req, res) => {
//     const { site } = req.query;
//     if (!site) {
//         return res.send(counter);
//     }

//     res.send(`${counter[site]}`);
// });

// app.listen(PORT, () => {
//     console.log("YO ", PORT);
// });