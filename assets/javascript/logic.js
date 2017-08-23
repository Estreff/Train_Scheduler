$(function(){

  // Initialize Firebase
	var config = {
	    apiKey: "AIzaSyDXLNdTzO7HXLy17LsC-9x45Er_hyh80S8",
	    authDomain: "train-schedule-e4574.firebaseapp.com",
	    databaseURL: "https://train-schedule-e4574.firebaseio.com",
	    projectId: "train-schedule-e4574",
	    storageBucket: "train-schedule-e4574.appspot.com",
	    messagingSenderId: "1064809053893"
	};

  	firebase.initializeApp(config);

	firebase.database().ref().on('child_added',function(snapshot){
		var tr = $('<tr>')
		$('#schedule').append(tr);
		tr.append('<td>' + snapshot.val().trainName +'</td>');
		tr.append('<td>' + snapshot.val().destination +'</td>');
		tr.append('<td>' + snapshot.val().startTime +'</td>');
		tr.append('<td>' + snapshot.val().trips +'</td>');
		tr.append('<td>' + snapshot.val().frequency +'</td>');
	})

  	var trainName = "";
  	var destination = "";
  	var startTime;
  	var trips = 0;
  	var	frequency = 0;
	
	$('#newTrain').click(function(){
		trainName = $('#trainName-input').val().trim();
		console.log('Train Name: ', trainName);
		$('#trainName-input').val("");
		destination = $('#destination-input').val().trim();
		console.log('Destination: ', destination);
		$('#destination-input').val("");
		startTime = $('#startTime-input').val();
		console.log('Start Time: ', startTime);
		$('#startTime-input').val("");
		trips = $('#trips-input').val();
			console.log('Trips: ', trips);
		$('#trips-input').val("");
		frequency = $('#frequency-input').val();
		console.log('Frequency: ', frequency);
		$('#frequency-input').val("");

		firebase.database().ref().push({
			trainName: trainName,
			destination: destination,
			startTime: startTime,
			trips: trips,
			frequency: frequency
		})
	});

  	var today;
  	var timeNow;

	function currentTime() {
	  today = new Date();
	  timeNow = today.toLocaleTimeString();
	  $('#currentTime').html(timeNow);
	  t = setTimeout(function() {
	    currentTime()
	  }, 1000);
	}
	currentTime();	

	var time = new Date();
	var hours = time.getHours();
	console.log('Hour: ',hours);
	var minutes = time.getMinutes();
	console.log('Minutes: ', minutes);



	$('#hamburger').click(function(){
		if($('#newTrainSchedule').attr('data-status') === 'hide') {
			$('#newTrainSchedule').attr('data-status', 'show').css({'visibility': 'visible', 'height': '480px'});
		} else {
			$('#newTrainSchedule').attr('data-status', 'hide').css({'visibility': 'hidden', 'height': '0px'});
		}
	});

});


/*var t1 = '12:04'.split(':'), t2 = '3:45'​​​​​​​.split(':');
var d1 = new​ Date(0, 0, 0, t1[0], t1[1]),
var d2 = new Date(0, 0, 0, t2[0], t2[1]);
var diff = new Date(d1 - d2);*/