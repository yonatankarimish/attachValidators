angular.module('app', ['ui.grid', 'ui.grid.grouping', 'ui.grid.moveColumns', 'ui.grid.resizeColumns', 'ui.grid.exporter', 'ui.grid.selection', 'ui.grid.saveState', 'ui.grid.edit', 'ui.grid.validate']);

angular.module('app').controller('appController', [function(){
    var ctrl = this;
    ctrl.p1 = 'Lorem ipsum dolor sit amet';
    ctrl.p2 = '12345';
    ctrl.p3 = '';
}]);

angular.module('app').directive('bbValidating', function(){
    return{
        controller: function(){},
        controllerAs: 'bbValidatable',
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel){
            var $validators = { // object with one or more validators
                isNumber: function (modelValue, viewValue) {
                    var value = modelValue || viewValue;
                    return !isNaN(value);
                }
            };
            ngModel.$validators = angular.extend({}, ngModel.$validators, $validators);
            console.log(ngModel);
        },
        restrict: 'A',
        scope: true,
    };
});

