/*
 * Spreed WebRTC.
 * Copyright (C) 2013-2014 struktur AG
 *
 * This file is part of Spreed WebRTC.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
define(['jquery', 'underscore'], function($, _) {

	return ["translation", function(translation) {

		var controller = ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {

			$scope.state = "request";
			$scope.doAccept = function() {
				$scope.state = "accepted";
				$scope.doContact(true);
			};

			$scope.doReject = function() {
				$scope.state = "rejected";			
				$scope.doContact(false);
			};

			$scope.doContact = function(success) {
				var request = $scope.request;
				request.Success = !!success;
				$scope.sendChat($scope.id, "Contact request answer", {
					ContactRequest: request
				});
			};

		}];

		return {
			scope: true,
			restrict: 'EAC',
			controller: controller,
			replace: false
		}

	}];

});
