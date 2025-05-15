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