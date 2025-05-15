var data = {
  companies: [
    {
      name: "Google",
      employees: [
        {
          name: "SUndar pichai",
          job: "CEO",
          salary: 150,
        },
        {
          name: "Sergy Brin",
          job: "Founder",
          salary: 170,
        },
        {
          name: "Larry page",
          job: "Founder",
          salary: 165,
        },
      ],
    },
    {
        name: "Facebook",
        employees: [
          {
            name: "Mark",
            job: "CEO",
            salary: 190,
          },
          {
            name: "Steave",
            job: "CTO",
            salary: 110,
          },
        ],
    },
  ],
};

//var google = data.companies.find((comp)=>comp.name =="Google")
//var google = data.companies.find((comp)=>comp.name =="Google").employees;
//var google = data.companies.find((comp)=>comp.name =="Google").employees.map((emp)=>emp.name)
//var google = data.companies.find((comp)=>comp.name =="Google").employees.filter((emp)=>emp.job =="Founder").map((emp)=>emp.name)
//var google = data.companies.find((comp)=>comp.name=="Google").employees.filter((emp)=>emp.salary>150)
console.log(google)

var data = {
    states:[
        {
            name:"Gujarat",
            cities:[
                {
                    name:"Ahmedabad",
                    population:32456,
                    AQI:300
                },
                {
                    name:"Surat",
                    population:25687,
                    AQL:280
                }
            ]
        },
        {
            name:"Maharashta",
            cities:[
                {
                    name:"MMumbai",
                    population:45872,
                    AQI:350
                },
                {
                    name:"Pune",
                    population:28000,
                    AQL:290
                }
            ]
        },
    ]
}

//find totaal poluation of gujarat
//find total population of maharashta
//find all cities of india