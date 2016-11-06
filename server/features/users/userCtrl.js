import User from "./User";

module.exports = {
	getUser(req, res, next) {
		User.findOne({sub: req.body.user_id}, (err, user) => {
			console.log("Error in getUser: ", err)
			console.log("User in getUser: ", user)
			if (err) return res.status(500).json(err);
			if (user) return res.status(200).json(user)
			next();
		})
	}

	, saveUser(req, res) {
		new User({
			sub: req.body.user_id
			, family_name: req.body.family_name
			, given_name: req.body.given_name
			, name: req.body.name
			, nickname: req.body.nickname
			, gender: req.body.gender
			, email: req.body.email
			, email_verified: req.body.email_verified
			, picture: req.body.picture
			, created_at: req.body.created_at
			, updated_at: req.body.updated_at
		}).save((err, user) => {
			if (err) return res.status(700).json(err);
			return res.status(200).json(user); 
		})
	}
}