console.log("Form loaded");

interface ResumeData {
  fullName: string;
  jobTitle: string;
  email: string;
  phoneNumber: number;
  address: string;
  languages: string;
  education: string;
  experience: string;
  experienceDuration: string;
  projects: string;
  projectsArray: string[];
  skills: string;
  skillsArray: string[];
  hobbies: string;
  hobbiesArray: string[];
  image: string;
}

const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
const fields = [
  "fullName",
  "jobTitle",
  "email",
  "phoneNumber",
  "address",
  "languages",
  "education",
  "experience",
  "experience-duration",
  "projects",
  "skills",
  "hobbies",
];

fields.forEach((field) => {
  const input = document.getElementById(field) as HTMLInputElement;
  if (resumeData && input) {
    input.value = resumeData[field] || "";
  }
});

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhoneNumber(phone: string): boolean {
  return /^\d{11}$/.test(phone);
}

document
  .getElementById("resumeForm")
  ?.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const fullName = (
      document.getElementById("fullName") as HTMLInputElement
    ).value.trim();
    const jobTitle = (
      document.getElementById("jobTitle") as HTMLInputElement
    ).value.trim();
    const email = (
      document.getElementById("email") as HTMLInputElement
    ).value.trim();
    const phoneNumber = (
      document.getElementById("phoneNumber") as HTMLInputElement
    ).value.trim();
    const address = (
      document.getElementById("address") as HTMLInputElement
    ).value.trim();
    const languages = (
      document.getElementById("languages") as HTMLInputElement
    ).value.trim();
    const education = (
      document.getElementById("education") as HTMLInputElement
    ).value.trim();
    const experience = (
      document.getElementById("experience") as HTMLInputElement
    ).value.trim();
    const experienceDuration = (
      document.getElementById("experience-duration") as HTMLInputElement
    ).value.trim();
    const projects = (
      document.getElementById("projects") as HTMLInputElement
    ).value.trim();
    const skills = (
      document.getElementById("skills") as HTMLInputElement
    ).value.trim();
    const hobbies = (
      document.getElementById("hobbies") as HTMLInputElement
    ).value.trim();

    if (!fullName || !jobTitle || !email || !phoneNumber || !address) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Invalid email format.");
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      alert("Invalid phone number. It should be 11 digits.");
      return;
    }

    const skillsArray = skills.split(",").map((skill) => skill.trim());
    const projectsArray = projects.split(",").map((project) => project.trim());
    const hobbiesArray = hobbies.split(",").map((hobby) => hobby.trim());

    const imageInput = document.getElementById("image") as HTMLInputElement;
    const imageFile = imageInput.files?.[0];
    let image = "";

    if (imageFile) {
      const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedImageTypes.includes(imageFile.type)) {
        alert("Please upload a valid image file (JPEG, PNG).");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = function () {
        image = reader.result as string;
        saveData();
      };
      reader.readAsDataURL(imageFile);
    } else {
      saveData();
    }

    function saveData() {
      const resumeData: ResumeData = {
        fullName,
        jobTitle,
        email,
        phoneNumber: parseInt(phoneNumber),
        address,
        languages,
        education,
        experience,
        experienceDuration,
        projects,
        projectsArray,
        skills,
        skillsArray,
        hobbies,
        hobbiesArray,
        image,
      };
      localStorage.setItem("resumeData", JSON.stringify(resumeData));
      window.location.href = "./Resume/resume.html";
    }
  });

document.querySelector(".btn-clear")?.addEventListener("click", () => {
  localStorage.removeItem("resumeData");
  fields.forEach((field) => {
    (document.getElementById(field) as HTMLInputElement).value = "";
  });
});
