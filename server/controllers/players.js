import model from "../models";

const { 
    Players, 
    Scores 
} = model;


class Player {
    static async add(req, res) {

        try {
            const {
                name,
                username
            } = req.body;
    
            const players = await Players
            .create({
                name,
                username
            });

            return res.status(201).json({
                success: true,
                message: "User successfully created",
                players
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                error
            })
        }
    }

    static async submit(req, res) {
        try {
            const {
                scores,
                match_name,
                kills
            } = req.body;

            if (scores === null || scores === "") {
                throw new Error({
                    status: 400,
                    message: "Scores are required"
                })
            }

            if (match_name === null || match_name === "") {
                throw new Error({
                    status: 400,
                    message: "Match name is required"
                })
            }

            if (kills === null || kills === "") {
                throw new Error({
                    status: 400,
                    message: "Kills are required"
                })
            }

            const { playerId } = req.params;
    
            const score = await Scores
            .create({
                scores,
                match_name,
                kills,
                playerId,
                time: new Date()
            });

            return res.status(201).json({
                success: true,
                message: "Scores submitted successfully",
                score
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                error
            })
        }
    }

}


export default Player;