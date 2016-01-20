function createDoc(){
	
	var entrydate = $("#entrydate").val();
	var enddate = $("#enddate").val();
	var status = $("#status").val();
	var desc = $("#desc").val();
	var prio = $("#prio").val();
	
	var doc = {};
	
	doc.entrydate = entrydate;
	doc.enddate = enddate;
	doc.status = status;
	doc.desc = desc;
	doc.prio = prio;
	var json = JSON.stringify(doc);
		
	$.ajax({
		type:	'POST',
		url:	'../../',
		data:	json,
		contentType:	'application/json',
		async:	true,
		success:function(data){
			buildOutput();
		},
		error:	function(XMLHttpRequest, textStatus, errorThrown){
			console.log(errorThrown);
		}
	});
}

function getDoc(){
	var id = $("#id").val();
	var html = "";
	$.ajax({
		type:		"GET",
		url:		"../../" + id,
		async:		true,
		success:	function(data){
			var arr = JSON.parse(data).rows;
			html += arr;
			$('#output').html(html);
		},
		error:		function(XMLHttpRequest, textStatus, errorThrown){
			console.log(errorThrown);
		}
	});
}

function buildOutput(){
	var html = "<table>";
	$.ajax({
		type:		"GET",
		url:		"../../_all_docs?include_docs=true",
		async:		true,
		success:	function(data){
			var arr = JSON.parse(data).rows;
			for(var i=0; i<arr.length; i++){
				if(arr[i].id.indexOf('_design') == -1){
					var doc = arr[i].doc;
					html += "<tr><td>" + doc.entrydate + "</td><td>" + doc.enddate + "</td><td>" + doc.prio + "</td><td>" + doc.desc + "</td><td>" + doc.status + "</td></tr>";
				}
			}
			
			html += "</table>";
			$('#output').html(html);
		},
		error:		function(XMLHttpRequest, textStatus, errorThrown){
			console.log(errorThrown);
		}
	});
}