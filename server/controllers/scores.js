import model from "../models";
import Sequelize  from "sequelize";

const {
    Scores,
    Players,
} = model;


class Score {

    static async fetchLeaderBoard(req, res) {
        
        try {

            const {
                match,
                time,
                limit,
                offset
            } = req.query;

            let scoresData = await Players
            .findAll({
                attributes: ["username"],
                include: [{
                    model: Scores,
                    order: ['Scores.scores','DESC'],
                }],
                group: ['Players.id', 'Scores.id']
            });

            const data = {};
            scoresData = JSON.parse(JSON.stringify(scoresData))
            const scores = scoresData.filter(element => {
                if (element.Scores.length !== 0) {
                    return element;
                }
            })
            .map(item => {
                return {
                    username: item.username,
                    ...item.Scores[0]
                }
            })
            .sort((a, b) => {
                return b.scores - a.scores
            })
            return res.status(200).json(scores);


        } catch (error) {
            console.log(error)
        }
    }

}


export default Score;