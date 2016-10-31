import passport from 'passport';
import ensure from 'connect-ensure-login';
import userCtrl from './userCtrl';

module.exports = app => {
  // Passport authentication routes
  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback', passport.authenticate('facebook',
    {successReturnToOrRedirect: '/', failureRedirect: '/'})
  );
  app.get('/auth/facebook/checkUser', userCtrl.checkUser);
  app.get('/api/user', userCtrl.isAuthed, userCtrl.getUser);
  app.get('/api/logout', userCtrl.logoutUser);

}
