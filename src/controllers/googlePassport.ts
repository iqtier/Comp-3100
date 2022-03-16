const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser((user, callback) => {
  callback(null, user);
});

passport.deserializeUser((user, callback) => {
  callback(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: "39768521817-8sbbq2uojmpnf32anchrm9j0464r3h3m.apps.googleusercontent.com",
      clientSecret: "WmGd6JrzcXBUAqdU7mujdo6w",
      callbackURL: "http://localhost:5500/google/callback",
      passReqToCallback: true,
    },
    (request, accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

export default passport;
