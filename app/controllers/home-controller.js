app.controller('HomeController', homeController);
    function homeController($scope, $timeout) {
        var self = this;
        self.gamesThumbnail = [
            {
                gameName : "PATTI 3 CHAMP",
                gameThumb : "2.jpg",
                gameID    : 1
            },
            {
                gameName : "LUDO CHAMP",
                gameThumb : "3.png",
                gameID    : 2
            },
            {
                gameName : "MONSTERS UP",
                gameThumb : "4.png",
                gameID    : 3
            },
            {
                gameName : "PATTI 1 CHAMP",
                gameThumb : "5.jpg",
                gameID    : 4
            },
            {
                gameName : "PATTI 2 CHAMP",
                gameThumb : "2.jpg",
                gameID    : 5
            },
            {
                gameName : "LAST CHAMP",
                gameThumb : "5.jpg",
                gameID    : 6
            },
            {
                gameName : "SEE ALL",
                gameThumb : "7.png",
                gameID : 7
            }
        ];
        window.addEventListener('load', function() {
            SpatialNavigation.init();
            SpatialNavigation.add({
                selector: '.focusable',
                // We can define our own filter function.
                navigableFilter: function(elem) {
                    return elem.className.indexOf('filterout') < 0;
                }
            });
            SpatialNavigation.makeFocusable();
            SpatialNavigation.focus();
            $('.focusable')
                .on('SpatialNavigation:enter-down', function () {
                    $('.cssbuttongo').click()

                });
        });

    }