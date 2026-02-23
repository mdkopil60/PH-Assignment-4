const jobs = [
  { id:1,
    company:"Google",
    position:"Frontend Developer",
    location:"Dhaka",
    type:"Remote",
    salary:"80,000 BDT",
    description:"React and Tailwind developer required.",
    status:"all" },

  { id:2,
    company:"Microsoft",
    position:"Backend Developer",
    location:"Chittagong",
    type:"Full-time",
    salary:"90,000 BDT",
    description:"Node.js and database expert.",
    status:"all" },

  { id:3,
    company:"Amazon",
    position:"UI Designer",
    location:"Remote",
    type:"Contract",
    salary:"70,000 BDT",
    description:"Figma and UX experience needed.",
    status:"all" },

  { id:4,
    company:"Tesla",
    position:"Software Engineer",
    location:"Dhaka",
    type:"Full-time",
    salary:"100,000 BDT",
    description:"Strong JavaScript knowledge required.",
    status:"all" },

  { id:5,
    company:"Meta",
    position:"Mobile App Developer",
    location:"Sylhet",
    type:"Remote",
    salary:"85,000 BDT",
    description:"Flutter experience required.",
    status:"all" },

  { id:6,
    company:"Spotify",
    position:"QA Engineer",
    location:"Khulna",
    type:"Full-time",
    salary:"60,000 BDT",
    description:"Manual and automation testing.",
    status:"all" },

  { id:7,
    company:"Netflix",
    position:"DevOps Engineer",
    location:"Dhaka",
    type:"Full-time",
    salary:"95,000 BDT",
    description:"AWS and CI/CD pipeline knowledge.",
    status:"all" },

  { id:8, 
    company:"Adobe",
    position:"UX Researcher",
    location:"Remote",
    type:"Contract",
    salary:"75,000 BDT",
    description:"User behavior research expert.",
    status:"all" }
];

let currentTab = "all";

const container = document.getElementById("jobContainer");
const emptyMessage = document.getElementById("emptyMessage");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const totalCount = document.getElementById("totalCount");
const tabCount = document.getElementById("tabCount");

function getStatusBadge(status){
  if(status === "interview"){
    return `<span class="badge badge-success">INTERVIEW</span>`;
  }
  else if(status === "rejected"){
    return `<span class="badge badge-error">REJECTED</span>`;
  }
  else{
    return `<span class="badge badge-info">NOT APPLIED</span>`;
  }
}

function renderJobs() {

  container.innerHTML = "";
  const filtered = jobs.filter(job =>
    currentTab === "all" ? true : job.status === currentTab
  );

  tabCount.textContent = filtered.length + " Jobs";

  if(filtered.length === 0){
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");
  }

  filtered.forEach(job => {

    const card = document.createElement("div");
    card.className = "card bg-base-100 shadow relative";

    card.innerHTML = `
    <div class="card-body">

      <!-- Delete Button Top Right -->
      <button 
        class="btn btn-neutral btn-outline absolute top-3 right-3"
        onclick="deleteJob(${job.id})">
        Delete
      </button>
      ${getStatusBadge(job.status)}

      <h2 class="card-title">${job.company}</h2>
      <p><strong>Position:</strong> ${job.position}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <p>${job.description}</p>

      <div class="card-actions flex gap-2 mt-4">
        <button class="btn btn-outline btn-success"
        onclick="updateStatus(${job.id}, 'interview')">
        Interview
        </button>

        <button class="btn btn-outline btn-error"
        onclick="updateStatus(${job.id}, 'rejected')">
        Rejected
        </button>
      </div>

    </div>`;

    container.appendChild(card);
  });

  updateDashboard();
}

function updateStatus(id, status){
  const job = jobs.find(j => j.id === id);
  job.status = status;
  renderJobs();
}

function deleteJob(id){
  const index = jobs.findIndex(j => j.id === id);
  jobs.splice(index,1);
  renderJobs();
}

function updateDashboard(){
  const interview = jobs.filter(j => j.status === "interview").length;
  const rejected = jobs.filter(j => j.status === "rejected").length;

  interviewCount.textContent = interview;
  rejectedCount.textContent = rejected;
  totalCount.textContent = jobs.length;
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", function(){
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("tab-active"));
    this.classList.add("tab-active");
    currentTab = this.dataset.tab;
    renderJobs();
  });
});

renderJobs();