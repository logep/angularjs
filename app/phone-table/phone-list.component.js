'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('todo').
  component('phoneTable', {
    templateUrl: 'app/phone-table/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
