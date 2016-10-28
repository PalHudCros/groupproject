import User from "./User";

module.exports = {
	getUser(req, res) {
		User.findById(req.user._id)
		.exec((err, user) => {
			console.log("Get User Error: ", err);
			if (err) return res.status(500).json(err);
			return res.status(200).json(user);
		})
	}

	, logoutUser(req, res) {
      req.logout();
      res.redirect('/');
  }

}