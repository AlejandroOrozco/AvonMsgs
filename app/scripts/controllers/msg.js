'use strict';

angular.module('avonApp')
  .controller('MsgCtrl', function ($scope) {
  	$scope.selecteds = [];
    $scope.countries = [
      {
      	id : 1,
      	name:"Colombia",
      },{
      	id : 2,
      	name:"España",
      },{
      	id : 3,
      	name:"Venezuela",
      },{
      	id : 4,
      	name:"Mexico",
      },{
      	id : 5,
      	name:"Chile",
      },{
      	id : 6,
      	name:"Brazil",
      },

    ];

    $scope.divisions = [
    	{
    		id:1,
    		name : "Zona 1",
    		country_id : 1
    	},{
    		id:2,
    		name : "Zona 2",
    		country_id : 2
    	},{
    		id:3,
    		name : "Zona 3",
    		country_id : 3
    	},{
    		id:4,
    		name : "Zona 4",
    		country_id : 4
    	},{
    		id:5,
    		name : "Zona 5",
    		country_id : 5
    	},{
    		id:6,
    		name : "Zona 6",
    		country_id : 6
    	},
    ]

    $scope.select = function  () {
    	var item  = $scope.division? $scope.divisions[$scope.division-1].name  : $scope.countries[$scope.country-1].name;
      if ($scope.selecteds.toString().search(item)) {
          $scope.selecteds.push(item);
      };
    }

    $scope.delete = function  (index) {
    	$scope.selecteds.splice(index,1);
    }



  });
