import User from '../schema/user-schema.js';


export const addUser = async (req,res) =>{
    const { username, socialId ,sex , age  } = req.body;

    // Find or create a new user and send it as response
    User.findOne({ socialId: socialId })
        .then((foundUser) => {
            if (foundUser) {
                res.json(foundUser);
            } else {
                const newUser = new User({
                    username: username,
                    socialId: socialId,
                    sex: sex,
                    age: age,
                });
                newUser
                    .save()
                    .then(() =>
                        User.findOne({
                            socialId: socialId,
                        }).then((foundNewUser) => res.json(foundNewUser))
                    )
                    .catch((err) => res.status(400).json("Error: " + err));
            }
        })
        .catch((err) => res.status(400).json("Error : " + err));

}