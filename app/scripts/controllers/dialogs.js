'use strict';

angular.module('iamTheAnswerApp').controller('DialogsCtrl',
		function($scope, $http) {

	
			bindAllTextElements();

			$scope.dialog={};
			$scope.dialogs = [];
			$scope.editDealChecked = true;
			// $scope.delDealChecked = true;

			$scope.getAllDialogs = function(callback) {
				$http.get('/api/dialogs').success(function(dialogs) {
					$scope.dialogs = dialogs;
					callback(dialogs);
				});
			}

			$scope.showAddDialogView = function() {
				$scope.showTable = false;
				$scope.showUpdateBtn = false;
				$scope.showSaveBtn = true;
			}
			
			$scope.saveDialog = function(dialog) {
				$scope.dialog.movie = document.getElementById('dialogMovie').value;
				$scope.dialog.text = document.getElementById('dialogText').value;
				$scope.dialog.genre = $scope.genre;
				if($scope.dialog) {
					$http.post('/api/dialogs', dialog).success(function() {
						$scope.getAllDialogs(function() {
							$scope.showTable = true;
						})
					});
				}
			}

			$scope.goBack = function() {
				$scope.showTable = true;
			};

			$scope.handleSelection = function(dialogId) {

				$http.get('/api/dialogs/' + dialogId).success(function(dialog) {
					$scope.dialog = dialog;
				});

				$scope.editDealChecked = false;
				$scope.delDealChecked = false;
			};

			$http.get('/api/genres').success(function(genres) {
				$scope.genres = genres;
			})

			$scope.getAllDialogs(function() {
				$scope.showTable = true;
			})

		});
