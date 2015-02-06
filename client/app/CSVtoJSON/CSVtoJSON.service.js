'use strict';

angular.module('appfullstackApp')
  .service('CSVtoJSON', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.convertToArray = function (csvString) {              
            var lines=(csvString.trim()).split("\n");
 
			var result = [];

			var previousjobId = "";
			 
			var headers=['ExecutionDateTime','jobid_1','jobid_2','jobid_3','jobid_4','Project','ConnectorName','id_5','VersionNumber','?6','?7','Progress','Status','id_8'];
			 
			for(var i=0;i<lines.length;i++){
			 
			var obj = {};
			var currentline=lines[i].split(";");
			 
			for(var j=0;j<headers.length;j++){
			obj[headers[j]] = currentline[j];
			}

			//remove "begin" lines if "end" line encountered
			if(currentline[1]==previousjobId){ 
				result.pop();
			}

			result.push(obj);

			previousjobId=currentline[1];
			}
			//return result; //JavaScript object
			return result; //JSON 
			    };
  });
