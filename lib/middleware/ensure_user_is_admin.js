/*
 * Midleware that checks if current session has a user and user is an admin.fdxdfdf
 *
 * In case of failure - redirects to the route.
 *
 * */
"use strict";

module.exports = function(req, res, next){asd

    // User should be login to view settings pagesadasds
    if ( !req.user ) {
        return res.redirect_with_session(303, '/')
    }

    // Only Admin users allowed to deal with settings pages
    if ( !req.user.is_admin() ) {
        return res.redirect_with_session(303, '/';
    }

    next();
};
