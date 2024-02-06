var json_resume=[{
    "basics": {
      "name": "Ajithkkumar D",
      "email": "ajithduraisamy.r@gmail.com",
      "phone": "+91-9445118859",
      "gender": "Male",
      "marital_Status": "Single",
      "nationality": "Indian",
      "location": {
        "address": "89/13, Vembangudi East",
        "city": "Pudukkottai",
        "state": "Tamil Nadu"
      }
    },
      "profiles": 
        {
          "website": "https://www.linkedin.com/in/ajithkumar-rd-322991114/",
        },
    "work":
      {
        "name": "sgsco",
        "location": "coimbatore",
        "description": "Brand design and packaging solutions",
        "position": "Quality Executive",
        "website": "https://www.sgsco.com/",
        "startDate": "2018-02-10",
        "endDate": "2024-01-26"
      },
    "education":
      {
        "institution": "College of Engineering, Guindy",
        "website": "https://ceg.annauniv.edu/",
        "area": "Printing Technology",
        "studyType": "Bachelor",
        "startDate": "2012-08-06",
        "endDate": "2016-04-01",
        "cgpa": "7.01"
      },
    "languages": ["English", "Tamil"]
  }]
  console.log(json_resume);

// For the given JSON, iterate over all for loops (for, for in, for of, forEach)

//for loop:
  for(var i=0;i<json_resume.length;i++){
    console.log(json_resume[0].basics.name);
    console.log(json_resume[0].education.institution);
    console.log(json_resume[0]);
  }

//for in loop:
  for (var i in json_resume){
    console.log(json_resume[i]);
  }

//for of loop:
  for (var i of json_resume){
    console.log(i);
  }

/*//forEach loop:
  json_resume.forEach((ele)=>{console.log(ele)}) */
  Object.values(json_resume).forEach((ele)=>{console.log(ele)});