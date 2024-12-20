import passport from "passport";
import jwtStrategy, { type StrategyOptions } from "passport-jwt";

import { Env } from "../strategies/index";

const opts: StrategyOptions = {
  jwtFromRequest: jwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: Env.JWT_SECRET_KEY,
};

passport.use(
  "jwt",
  new jwtStrategy.Strategy(opts, (user, done) => {
    done(null, user);
  })
);
