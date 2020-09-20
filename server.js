import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import routes from "./server/routes";

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(logger("dev"));

routes(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the game portal.',
}));

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})

export default app;