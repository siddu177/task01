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
            id: 'bottomSheetSection',
            selector: '#bottomSheetSection .focusElement',
            restrict: 'self-only',
        });
        $timeout (function () {
            SpatialNavigation.makeFocusable();
            },300);
        $timeout (function () {
            SpatialNavigation.focus();
            },600);

    }