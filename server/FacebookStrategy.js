import {Strategy} from "passport-facebook";
import config from "../config/config";
import User from "./features/users/User";

module.exports = new Strategy({
    clientID: config.facebook.clientId,
    clientSecret: config.facebook.secret,
    callbackURL: config.facebook.cbUrl
},
    (token, refreshToken, profile, done) => {
        process.nextTick(function() {
            User.findOne({ 'facebook_id': profile.id }, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (user) {
                    return done(null, user); 
                } else {
                    const newUser = new User({
                        facebook_id: profile.id
                        , name: profile.displayName
                        , photo: "http://graph.facebook.com/" + profile.id + "/picture?width=9999"
                        , email: profile.email || ""
                    });

                    newUser.save((err, user) => {
                        if (err) throw err;
                        return done(null, user);
                    });
                }
            });
        });
    }
);
