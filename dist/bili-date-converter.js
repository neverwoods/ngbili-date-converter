(function (angular) {
    'use strict';

    angular.module('BiliDateConverter', [])
        .directive('biliDateConverter', ['$filter', function ($filter) {
            return {
                'restrict': 'A',
                'require': '^ngModel',
                'link': function (scope, element, attrs, ngModelController) {
                    var values = attrs.biliDateConverter,
                        modelFormat, viewFormat;

                    viewFormat = values.split(' to ')[0];
                    modelFormat = values.split(' to ')[1];

                    console.log('modelFormat', modelFormat, 'viewFormat', viewFormat);

                    var convertDate = function (date, format) {
                        var arrDate = date.split('-'),
                            year, month, day;

                        if (isNaN(parseInt(arrDate[0]))) {
                            return null;
                        }

                        if (arrDate[0].length === 4) {
                            year = arrDate[0];
                            day = arrDate[2];
                        } else {
                            year = arrDate[2];
                            day = arrDate[0];
                        }

                        month = arrDate[1];

                        return $filter('date')(new Date(year, month - 1, day), format);
                    };

                    ngModelController.$formatters.push(function (value) {
                        if (value) {
                            console.log('Format this value: ', value);
                            // American date format, convert to EU format
                            return convertDate(value, viewFormat);
                        } else {
                            // EU format, continue.
                            return value;
                        }
                    });

                    ngModelController.$parsers.push(function (value) {
                        if (value) {
                            console.log('Parse this value: ', value, modelFormat, convertDate(value, modelFormat));
                            return convertDate(value, modelFormat);
                        } else {
                            return value;
                        }
                    });
                }
            };
        }]);

} (angular));