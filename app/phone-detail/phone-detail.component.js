'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'app/phone-detail/phone-detail.template.html',
    controller: ['$stateParams', 'Phone',
    // controller: ['$routeParams', 'Phone',
      function PhoneDetailController($stateParams, Phone) {
        var self = this;
        self.phone = Phone.get({phoneId: $stateParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
