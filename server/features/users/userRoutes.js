import passport from 'passport';
import ensure from 'connect-ensure-login';
import userCtrl from './userCtrl';

module.exports = app => {
  // Passport authentication routes
  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback', passport.authenticate('facebook',
    {successReturnToOrRedirect: 'http://localhost:5001/home', failureRedirect: '/'})
  );

  app.get('/api/user', ensure.ensureLoggedIn(), userCtrl.getUser);
  app.get('/api/logout', userCtrl.logoutUser);

}
