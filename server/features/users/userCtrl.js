import User from "./User";

module.exports = {
	getUser(req, res) {
		User.findById(req.user._id)
		.exec((err, user) => {
			if (err) return res.status(500).json(err);
			return res.status(200).json(user);
		})
	}

	, isAuthed(req, res, next) {
		if (req.isAuthenticated()) {
			next()
		} else {
			res.redirect('/');
		}
	}

	, checkUser(req, res, next) {
		if (req.user._id) {
			res.redirect('/');
		} else {
			res.redirect('/');
		}

	}

	, logoutUser(req, res) {
		req.logout();
		res.redirect('/');
  }

}