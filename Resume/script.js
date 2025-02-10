var hobbiesButton = document.querySelector(".btn-hobbies");
var hobbies = document.querySelector(".hobbies-container");
var languagesButton = document.querySelector(".btn-languages");
var languages = document.querySelector(".languages-container");
hobbiesButton.addEventListener("click", function () {
    if (hobbies.style.display === "none") {
        hobbies.style.display = "block";
    }
    else {
        hobbies.style.display = "none";
    }
});
languagesButton.addEventListener("click", function () {
    console.log(languages.style.display);
    if (languages.style.display === "none") {
        languages.style.display = "block";
    }
    else {
        languages.style.display = "none";
    }
});
var editButton = document.querySelector(".btn-edit");
editButton.addEventListener("click", function () {
    window.location.href = "../index.html";
});
var downloadButton = document.querySelector(".btn-download");
downloadButton.addEventListener("click", function () {
    downloadButton.classList.add("loading");
    var btnContainer = document.querySelector(".btn-container");
    var header = document.querySelector(".header-content");
    var footer = document.querySelector(".footer-content");
    var resume = document.querySelector("#resume");
    btnContainer.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";
    resume.style.height = "80%";
    // Generate PDF
    html2pdf()
        .from(resume)
        .set({
        filename: "resume.pdf",
        margin: 10,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    })
        .save()
        .then(function () {
        btnContainer.style.display = "flex";
        header.style.display = "block";
        footer.style.display = "block";
        resume.style.height = "75%";
        setTimeout(function () {
            window.location.reload();
        }, 2000);
    });
});
var shareButton = document.querySelector(".btn-share");
window.addEventListener("DOMContentLoaded", function () {
    var resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
    console.log("Resume Data:", resumeData);
    var imageElement = document.getElementById("resumeImage");
    if (resumeData.image) {
        console.log("Image found in localStorage:", resumeData.image);
        imageElement.src = resumeData.image;
    }
    else {
        console.log("No image found in localStorage. Using default image.");
        imageElement.src = "../pfp.png"; // Ensure this path is correct
    }
    shareButton.addEventListener("click", function () {
        var shareableURL = "".concat(window.location.origin, "?name=").concat(encodeURIComponent(resumeData.fullName), "?role=").concat(encodeURIComponent(resumeData.jobTitle));
        navigator.clipboard.writeText(shareableURL);
        alert("Copied to clipboard");
    });
    if (resumeData) {
        document.getElementById("name").innerText =
            resumeData.fullName || "Your Name";
        document.getElementById("jobTitle").innerText =
            resumeData.jobTitle || "Your Job Title";
        document.getElementById("address").innerText =
            resumeData.address || "Your Address";
        document.getElementById("phone").innerText =
            "+92 ".concat(resumeData.phoneNumber) || "Your Phone Number";
        document.getElementById("email").innerText =
            resumeData.email || "Your Email";
        document.getElementById("languages").innerText =
            resumeData.languages || "Your Languages";
        document.getElementById("education").innerText =
            resumeData.education || "Your Education";
        document.getElementById("experience").innerText =
            resumeData.experience || "Your Experience";
        document.getElementById("experience-duration").innerText =
            resumeData.experienceDuration || "Your Experience tsDuration";
        var skillsList = document.getElementById("resumeSkills");
        skillsList.innerHTML = resumeData.skillsArray
            .map(function (skill) { return "<li>".concat(skill, "</li>"); })
            .join("");
        var projectsList = document.getElementById("resumeProjects");
        projectsList.innerHTML = resumeData.projectsArray
            .map(function (project) { return "<li>".concat(project, "</li>"); })
            .join("");
        var hobbiesList = document.getElementById("resumeHobbies");
        hobbiesList.innerHTML = resumeData.hobbiesArray
            .map(function (hobby) { return "<li>".concat(hobby, "</li>"); })
            .join("");
    }
});
