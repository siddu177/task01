app.controller('ListOptionsController', listOptionsController);
    function listOptionsController($timeout) {
        var self = this;
        self.items = [
            {
                name : "leaderBoard",
                icon : "2.jpg"
            },
            {
                name : "mark As favorite",
                icon : "2.jpg"
            }
        ];
        SpatialNavigation.add({
            selector: '.focusable'
        });

        $timeout (function () {SpatialNavigation.makeFocusable();},300);
        // Make the *currently existing* navigable elements focusable.

        $timeout (function () {SpatialNavigation.focus();},600);

    }