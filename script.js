const experiencesArr = [
  {
    year: "2013",
    month: "jun",
    durability: "June 2013 - March 2018",
    company: "Colegio Campestre San Diego",
    role: "Pysics and mathematics teacher",
    project: "High School",
    tags: ["Math", "Physics", "Problem solving"],
  },
  {
    year: "2018",
    month: "dec",
    durability: "June 2013 - March 2018",
    company: "Iacc Ingeniería y Construcciones SAS",
    role: "Resident engineer",
    project: "Tunnel Linner",
    tags: ["Construction", "Excavations", "Project managment"],
  },
  {
    year: "2023",
    month: "jul",
    durability: "July 2023 - present",
    company: "Ada School",
    role: "Fullstack developer & Mentor",
    project: "Ada lms",
    tags: [
      "Create new features",
      "Resolve bugs",
      "API Integration",
      "Frontend Development",
      "Code Maintenance",
      "Backend Architecture",
    ],
  },
];
const educationArr = [
  {
    year: "2015",
    month: "sep",
    durability: "june 2010- September 2015",
    university: "Escuela Colombiana de Ingenieria",
    role: "student",
    degree: "Mechanical engineer",
    tags: ["Calculation", "Project management", "physics", "Soft skills"],
  },
  {
    year: "2022",
    month: "dec",
    durability: "June 2022 - December 2022",
    university: "Ada School",
    role: "student",
    degree: "Java backend",
    tags: ["Backend", "Java", "Springboot", "MySql"],
  },
  {
    year: "2023",
    month: "may",
    durability: "June 2013 - March 2018",
    university: "Digital house",
    role: "student",
    degree: "Certified tech developer",
    tags: ["Backend", "Frontend", "SQL", "MongoDb", "react"],
  },
];

window.onload = function () {
  const timeLineExperience = document.querySelector(
    ".container__timeline-experience"
  );
  const timeLineEducation = document.querySelector(
    ".container__timeline-education"
  );
  const lineEndExperiences = document.createElement("div");
  const lineEndEducation = document.createElement("div");

  const arroWcontainerExperience = document.createElement("div");
  const arroWcontainerEducation = document.createElement("div");
  const arrowRightExperience = document.createElement("div");
  const arrowRightEducation = document.createElement("div");

  experiencesArr.forEach((element) => {
    const line = document.createElement("div");
    const circle = document.createElement("div");
    line.className = "timeline-item";
    circle.className = "timeline-item-circle";
    circle.name = element.role;
    timeLineExperience.appendChild(line);
    timeLineExperience.appendChild(circle);
    circle.innerHTML = `<span name="${element.role}">${element.month}</span><br /><span name="${element.role}">${element.year}</span>`;
    circle.addEventListener("click", (e) => {
      showDetailsExpirience(e);
    });
  });

  educationArr.forEach((element) => {
    const line = document.createElement("div");
    const circle = document.createElement("div");
    line.className = "timeline-item";
    circle.className = "timeline-item-circle";
    circle.name = element.degree;
    timeLineEducation.appendChild(line);
    timeLineEducation.appendChild(circle);
    circle.innerHTML = `<span name="${element.degree}">${element.month}</span><br /><span name="${element.role}">${element.year}</span>`;
    circle.addEventListener("click", (e) => {
      showDetailsEducation(e);
    });
  });

  lineEndExperiences.className = "timeline-item-end"; 
  arroWcontainerExperience.className = "arrow-container";
  arrowRightExperience.className = "arrow-right";

  lineEndEducation.className = "timeline-item-end";
  arroWcontainerEducation.className = "arrow-container";
  arrowRightEducation.className = "arrow-right";

  timeLineExperience.appendChild(lineEndExperiences);
  arroWcontainerExperience.appendChild(arrowRightExperience);
  timeLineExperience.appendChild(arroWcontainerExperience);

  timeLineEducation.appendChild(lineEndEducation);
  arroWcontainerEducation.appendChild(arrowRightEducation);
  timeLineEducation.appendChild(arroWcontainerEducation);

};

function showDetailsExpirience(e) {
  const element = experiencesArr.find((item) => item.role === e.target.name);
  const resumeBlock = document.querySelector(".bottom");
  const oldDiv = document.querySelector(".detail");
  if (oldDiv) {
    oldDiv.remove();
  }
  const resume = document.createElement("div");
  resume.className = "detail";

  const html = `<div class="experiences">
  <div class="experiences__company">
    <div class="experiences__company-header">
      <span class="experiences__company-header-durability">${element.durability}</span>
      <h3 class="experiences__company-header-name">${element.company}</h3>
    </div>

    <div class="experiences__company-project">
      <span class="experiences__company-project-role"
        >${element.role}</span
      >
      <h3 class="experiences__company-project-name">${element.project}</h3>
      
    </div>
  </div>
</div>`;

  resume.innerHTML = html;
  const ul = document.createElement("ul");
  ul.className = "experiences__company-project-responsibilities";
  resume.appendChild(ul);
  element.tags.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    ul.appendChild(li);
  });
  resume.appendChild(ul);
  resumeBlock.appendChild(resume);
}

function showDetailsEducation(e) {
  const element = educationArr.find((item) => item.degree === e.target.name);
  const resumeBlock = document.querySelector(".bottom-education");
  const oldDiv = document.querySelector(".detail");
  if (oldDiv) {
    oldDiv.remove();
  }
  const resume = document.createElement("div");
  resume.className = "detail";

  const html = `<div class="experiences">
  <div class="experiences__company">
    <div class="experiences__company-header">
      <span class="experiences__company-header-durability">${element.durability}</span>
      <h3 class="experiences__company-header-name">${element.university}</h3>
    </div>

    <div class="experiences__company-project">
      <span class="experiences__company-project-role"
        >${element.role}</span
      >
      <h3 class="experiences__company-project-name">${element.degree}</h3>
      
    </div>
  </div>
</div>`;

  resume.innerHTML = html;
  const ul = document.createElement("ul");
  ul.className = "experiences__company-project-responsibilities";
  resume.appendChild(ul);
  element.tags.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    ul.appendChild(li);
  });
  resume.appendChild(ul);
  resumeBlock.appendChild(resume);
}
