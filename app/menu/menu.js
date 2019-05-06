
angular.
module('menu').
component('menu', {
    templateUrl: 'menu/menu.html',
    controller: function GreetUserController() {
        this.user = 'world';
        console.log("chamou home");
    }
});