app.controller('SeeAllController', seeAllController);
    function seeAllController($scope) {
        var self =  this;
        console.log('console');
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
                gameName : "abc1",
                gameThumb : "10.jpg",
                gameID : 10
            },
            {
                gameName : "abc2",
                gameThumb : "11.jpg",
                gameID : 11
            },
            {
                gameName : "abc2",
                gameThumb : "12.jpg",
                gameID : 12
            },
            {
                gameName : "abc3",
                gameThumb : "13.jpg",
                gameID : 13
            },
            {
                gameName : "abc4",
                gameThumb : "14.jpg",
                gameID : 14
            },
            {
                gameName : "abc5",
                gameThumb : "15.jpg",
                gameID : 15
            },
            {
                gameName : "abc5",
                gameThumb : "15.jpg",
                gameID : 15
            },
            {
                gameName : "abc6",
                gameThumb : "16.jpg",
                gameID : 16
            },
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
                    $('.back-button').click()

                });
        });
    }