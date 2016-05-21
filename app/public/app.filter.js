angular.module('app').filter('yesNo', function() {
    return function(input) {
        return input ? 'YES' : 'NO';
    }
})