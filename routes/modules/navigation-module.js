module.exports = {
    /**
     * Gets the member login bar
     * @param  {Object} client - The mysql connection
     * @param  {requestCallback} callback - (error, data)
     */
    getLoginNavigation: function (client, callback) {
        // TODO: add login check
        var loggedIn = true;
        var navigation = [];
        if (loggedIn) {
            navigation.push( {link: "logout", href: "/logout", micon: "directions_run"} );
            navigation.push( {link: "wiki", href: "/wiki", micon: "language"} );

            // TODO: add admin check
            var isAdmin = true;
            if (isAdmin) {
                navigation.push( {link: "admin", href: "/admin", micon: "build"} );
            }
        } else {
            navigation.push( {link: "login", href: "/login", micon: "exit_to_app"} );
        }
        
        callback(null, navigation);
    }
};
    