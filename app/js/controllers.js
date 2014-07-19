'use strict';

/* Controllers */

var mainCtrl = angular.module('mainCtrl', []);

mainCtrl.controller('HomeCtrl', ['$scope','tradeRouteMap',function($scope,tradeRoute){
    tradeRoute._init($scope);
}]);


mainCtrl.controller('NavigationCtrl', function($scope, $route, $location){
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 30) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	$scope.isActive = function(path) {
		// alert($location.path());
		return path === $location.path();
	};

	$scope.updatePage = function(path){
		if ($location.path === path) {
			$route.reload();
		} else {
			$location.path('/home');
		}
	};
});

mainCtrl.controller('AboutCtrl', function($scope, $window){

});

mainCtrl.controller('ProjectsCtrl', function($scope){
	// $(function() {
 //          $( "#draggable1" ).draggable();
 //        });
 //    $(function() {
 //      $( "#draggable2" ).draggable();
 //    });

	function logLeft(msg) {
		$("<p>", {text: msg}).prependTo("#log");
	}
	function logRight(msg) {
		$("<p>", {text: msg}).prependTo("#log-right");
	}


	$("#draggable1").draggable({
		axis: "x",
		containment: "#container", scroll: false,
	});

	$("#draggable1").bind("drag", function(event, ui){
		logLeft("(" + ui.position.left + "," + ui.position.top + ")");
		// if (dragdrop) {ui.position.left = 800};
	})



	$("#draggable2").draggable({
		axis: "x",
		containment: "#container", scroll: false
	});

	$("#draggable2").bind("drag", function(event, ui){
		logRight("(" + ui.position.left + "," + ui.position.top + ")");
	});



	$("#drop").droppable({
		activeClass: "green",
		hoverClass: "blue",
		drop: function(){
			var drop = $(this);
		    if (confirm("Do you want to drop?") == true) {
		        drop.droppable("disable");
		        drop.addClass("red")
		    } else {
		    }
		    setTimeout(function(){
		    	drop.droppable("enable");

		    }, 1000);
		},
		tolerance: "touch"
	});
});

mainCtrl.controller('PortfolioCtrl', function($scope, $sce) {
	// $(document).ready(function() {
	//   $("#portfolio-slider").owlCarousel({
	//       navigation : true, // Show next and prev buttons
	//       slideSpeed : 300,
	//       paginationSpeed : 400,
	//       singleItem:true

	//       // "singleItem:true" is a shortcut for:
	//       // items : 1, 
	//       // itemsDesktop : false,
	//       // itemsDesktopSmall : false,
	//       // itemsTablet: false,
	//       // itemsMobile : false
	//   });
	// });
	
	$(document).ready(function(){
		$('#slider').slick({
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			slide: '> div',
			cssEase: 'lineaer'
		})
	})
	
	$scope.currentTime = 0;
	$scope.totalTime = 0;
	$scope.state = null;
	$scope.volume = 1;
	$scope.isCompleted = false;
	$scope.API = null;

	$scope.onPlayerReady = function(API) {
		$scope.API = API;
	};

	$scope.onCompleteVideo = function() {
		$scope.isCompleted = true;
	};

	$scope.onUpdateState = function(state) {
		$scope.state = state;
	};

	$scope.onUpdateTime = function(currentTime, totalTime) {
		$scope.currentTime = currentTime;
		$scope.totalTime = totalTime;
	};

	$scope.onUpdateVolume = function(newVol) {
		$scope.volume = newVol;
	};

	$scope.onUpdateSize = function(width, height) {
		$scope.config.width = width;
		$scope.config.height = height;
	};

	$scope.stretchModes = [
		{label: "None", value: "none"},
		{label: "Fit", value: "fit"},
		{label: "Fill", value: "fill"}
	];

	$scope.config = {
		width: 740,
		height: 380,
		autoHide: false,
		autoHideTime: 3000,
		autoPlay: false,
		responsive: false,
		stretch: $scope.stretchModes[1],
		sources: [
			{src: $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=ZkENe6GYv7Y"), type: "video/youtube"},
			{src: $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=6ydv_jfdu1E"), type: "video/youtube"},
			{src: $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=ZkENe6GYv7Y"), type: "video/youtube"}
			//{src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
			//{src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
		],
		transclude: true,
		theme: {
			url: "bower_components/videogular-themes-default/videogular.css"
		},
		plugins: {
			poster: {
				url: "img/videogular.png"
			},
			memeAds: {
				vid:'P9EzRfvqOF'
			}
		}
	};

	$scope.changeSource = function() {
		$scope.config.sources = [
			{src: $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=XslueHBNJYU"), type: "video/youtube"},
			//{src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg"), type: "video/ogg"}
		];
	};
})


mainCtrl.controller('BlogCtrl', function($scope){
    // $(document).ready(function() {
    // 	$("#item_blog").owlCarousel({
    // 		autoPlay: 3000, //Set AutoPlay to 3 seconds
		  //   items : 5,
		  //   itemsDesktop : [1199,5],
		  //   itemsDesktopSmall : [979,3]
  		//   });
  	 //  });

	

    $(document).ready(function() {
     
    var owl = $("#owl-demo");
     
    owl.owlCarousel({
    items : 4, //10 items above 1000px browser width
    itemsDesktop : [1000,5], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,3], // betweem 900px and 601px
    itemsTablet: [600,2], //2 items between 600 and 0
    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
     
    // Custom Navigation Events
    $(".next").click(function(){
    owl.trigger('owl.next');
    })
    $(".prev").click(function(){
    owl.trigger('owl.prev');
    })
    $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
    owl.trigger('owl.stop');
    })
     
    });




});

mainCtrl.factory('tradeRouteMap',function(){
    return {
	_init:function($scope){
	    var mapOptions = {
		zoom: 3,
		center: new google.maps.LatLng(0, -180),
		mapTypeId: google.maps.MapTypeId.TERRAIN
            };
	    
            var myLatlng = new google.maps.LatLng(21.291982, -157.821856);
	    
            var map = new google.maps.Map($("#map")[0],mapOptions);
	    
            var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title:"Hello World!"
            });
	    
            var flightPlanCoordinates = [
		new google.maps.LatLng(37.772323, -122.214897),
		new google.maps.LatLng(21.291982, -157.821856),
		new google.maps.LatLng(-18.142599, 178.431),
		new google.maps.LatLng(-27.46758, 153.027892)
            ];
            var flightPath = new google.maps.Polyline({
		path: flightPlanCoordinates,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
            });
	    
            flightPath.setMap(map);
            marker.setMap(map);
	}
    };
});
