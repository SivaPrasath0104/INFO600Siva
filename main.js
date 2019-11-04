/* script to calculate and display odd or even by looping user input  number */
	function AddRecords()
	{
		if(document.myform.fullName.value == "")
		{
			alert("Please enter your full name to proceed");
		}
		else
		{
			if(document.myform.major.value == "")
			{
				alert("Please enter your major to proceed");
			}
			else
			{
				if(document.myform.startYear.value == "")
				{
					alert("Please enter your major to proceed");
				}
				else
				{
					CheckYear();
				}
			}
		}
	}
/* script to calculate the year and check if its below 2000  */
	function CheckYear()
	{
		var Year = parseInt(document.myform.startYear.value);
		if(Year < 2000)
		{
			alert("Incorrect Year : " + Year);
		}
		else
		{
			PrintRecord();
		}
	}
/* script to print the record in the page */
	function PrintRecord()
	{
		var time = new Date();
		time = time.getHours() + ":" + time.getMinutes();


		var fullName = document.myform.fullName.value;
		var major = document.myform.major.value;
		var startYear = document.myform.startYear.value;

		var addRecords = time + '&nbsp;' + document.myform.fullName.value + '&nbsp;' + document.myform.major.value + '&nbsp;' + document.myform.startYear.value + "<br />";

		/*var records = time + fullName + major + startYear;*/
		/*var records = time + '&nbsp;' + fullName + '&nbsp;' + major + '&nbsp;' +startYear;*/
		document.getElementById("Records").innerHTML += addRecords;

		ClearData();
	}
/* script to clear the data after successfull record */
	function ClearData()
	{
		document.myform.fullName.value = "";
		document.myform.major.value = "";
		document.myform.startYear.value = "";
		return true;
	}
