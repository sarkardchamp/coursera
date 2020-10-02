var teachers = [{
	img: "images/vibha.jpeg",
	Name: "Vibha Kumari",
	Email: "vibhabhu1998@gmail.com",
	Qualification: "Bachelor in Science (Physics)",
	Experience: "Ex-Navodayan"
}, {
	img: "images/abhinandan.jpeg",
	Name: "Abhinandan Kumar",
	Email: "ak6205178871@gmail.com",
	Qualification: "Bachelor in Science (Botany)",
	Experience: "4 years"
}, {
	img: "images/shatrughan.jpeg",
	Name: "Shatrughan Kumar",
	Email: "",
	Qualification: "Bachelor in Arts (History)",
	Experience: "4 years"
}, {
	img: "images/mithilesh.jpeg",
	Name: "Mithilesh Kumar",
	Email: "",
	Qualification: "Bachelor in Science (Chemistry)",
	Experience: "4 years"
}, {
	img: "images/saurabh.jpeg",
	Name: "Saurabh Suman",
	Email: "ssuman1170@gmail.com",
	Qualification: "Intermediate in Science (PCM)",
	Experience: "Fresher"
}];

function teacherTable () {
	var txt = '<table class="table"><tr><th><span class="glyphicon glyphicon-user"></span> ';
	var item;
	for (item in teachers) {
		for (var i = 1; i < 5; i++) {
			txt += teacherTable[item].[i] + ""
		}
	}
}
teacherTable();