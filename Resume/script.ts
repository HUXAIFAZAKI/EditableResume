let hobbiesButton = document.querySelector(".btn-hobbies") as HTMLButtonElement;
let hobbies = document.querySelector(".hobbies-container") as HTMLElement;

let languagesButton = document.querySelector(
  ".btn-languages"
) as HTMLButtonElement;
let languages = document.querySelector(".languages-container") as HTMLElement;

hobbiesButton.addEventListener("click", () => {
  if (hobbies.style.display === "none") {
    hobbies.style.display = "block";
  } else {
    hobbies.style.display = "none";
  }
});

languagesButton.addEventListener("click", () => {
  console.log(languages.style.display);

  if (languages.style.display === "none") {
    languages.style.display = "block";
  } else {
    languages.style.display = "none";
  }
});

const editButton = document.querySelector(".btn-edit") as HTMLButtonElement;

editButton.addEventListener("click", function () {
  window.location.href = "../index.html";
});

const downloadButton = document.querySelector(
  ".btn-download"
) as HTMLButtonElement;

downloadButton.addEventListener("click", function () {
  const btnContainer = document.querySelector(".btn-container") as HTMLElement;
  const headerText = document.querySelector(".header-text") as HTMLElement;
  const footerText = document.querySelector(".footer-text") as HTMLElement;
  const resume = document.querySelector("#resume") as HTMLElement;
  btnContainer.style.display = "none";
  headerText.style.display = "none";
  footerText.style.display = "none";
  resume.style.height = "80%";
  window.print();
  setTimeout(() => {
    btnContainer.style.display = "flex";
    headerText.style.display = "block";
    footerText.style.display = "block";
    resume.style.height = "75%";
  }, 1000);
});

const shareButton = document.querySelector(".btn-share") as HTMLButtonElement;

window.addEventListener("DOMContentLoaded", () => {
  const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
  console.log(resumeData);

  shareButton.addEventListener("click", function () {
    const shareableURL = `${window.location.origin}?name=${encodeURIComponent(
      resumeData.fullName
    )}?role=${encodeURIComponent(resumeData.jobTitle)}`;
    navigator.clipboard.writeText(shareableURL);
    alert("Copied to clipboard");
  });

  if (resumeData) {
    (document.getElementById("name") as HTMLElement).innerText =
      resumeData.fullName || "Your Name";
    (document.getElementById("jobTitle") as HTMLElement).innerText =
      resumeData.jobTitle || "Your Job Title";
    (document.getElementById("address") as HTMLElement).innerText =
      resumeData.address || "Your Address";
    (document.getElementById("phone") as HTMLElement).innerText =
      resumeData.phoneNumber || "Your Phone Number";
    (document.getElementById("email") as HTMLElement).innerText =
      resumeData.email || "Your Email";
    (document.getElementById("languages") as HTMLElement).innerText =
      resumeData.languages || "Your Languages";
    (document.getElementById("education") as HTMLElement).innerText =
      resumeData.education || "Your Education";
    (document.getElementById("experience") as HTMLElement).innerText =
      resumeData.experience || "Your Experience";
    (document.getElementById("experience-duration") as HTMLElement).innerText =
      resumeData.experienceDuration || "Your Experience Duration";

    const skillsList = document.getElementById("resumeSkills") as HTMLElement;
    skillsList.innerHTML = resumeData.skillsArray
      .map((skill: string) => `<li>${skill}</li>`)
      .join("");

    const projectsList = document.getElementById(
      "resumeProjects"
    ) as HTMLElement;
    projectsList.innerHTML = resumeData.projectsArray
      .map((project: string) => `<li>${project}</li>`)
      .join("");

    const hobbiesList = document.getElementById("resumeHobbies") as HTMLElement;
    hobbiesList.innerHTML = resumeData.hobbiesArray
      .map((hobby: string) => `<li>${hobby}</li>`)
      .join("");

    const imageElement = document.getElementById(
      "resumeImage"
    ) as HTMLImageElement;
    if (resumeData.image) {
      imageElement.src = resumeData.image;
    }
  }
});
