import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

// Testing CI
// part 3




const app = express();

app.use(express.json())
app.use(cors());

app.post('/', async (_req, res) => {
    try {
        const keyword = _req.body.keyword;  // Use _req.query for query parameters

        const API : string = process.env.API as string;
        const query = API + keyword;
        console.log("keyword is " + keyword);
        const response = await fetch(query);
        const result = await response.json();

        if (response.ok) {
            // res.send(result);
            const booksCount = Math.min(result.items.length, 10);
            const finalOutput : any[] = [];

            for(let i=0; i<booksCount; i++)
            {
                const item = result.items[i];
                finalOutput.push({
                    "title" : item.volumeInfo.title,
                    "description" : item.volumeInfo.description,
                    "pageCount" : item.volumeInfo.pageCount,
                    "buyLink" : item.saleInfo.buyLink,
                    "thumbnail" : item.volumeInfo.smallThumbnail
                })
            }
            res.send(finalOutput);
        } else {
            res.status(response.status).send(result);
        }
    } catch (err) {
        console.log("Error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

