var _a, _b;
console.log("Form loaded");
var resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
if (resumeData) {
    document.getElementById("fullName").value =
        resumeData.fullName || "";
    document.getElementById("jobTitle").value =
        resumeData.jobTitle || "";
    document.getElementById("email").value =
        resumeData.email || "";
    document.getElementById("phoneNumber").value =
        resumeData.phoneNumber || "";
    document.getElementById("address").value =
        resumeData.address || "";
    document.getElementById("languages").value =
        resumeData.languages || "";
    document.getElementById("education").value =
        resumeData.education || "";
    document.getElementById("experience").value =
        resumeData.experience || "";
    document.getElementById("experience-duration").value =
        resumeData.experienceDuration || "";
    document.getElementById("projects").value =
        resumeData.projects || "";
    document.getElementById("skills").value =
        resumeData.skills || "";
    document.getElementById("hobbies").value =
        resumeData.hobbies || "";
}
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    var fullName = document.getElementById("fullName").value.trim();
    var jobTitle = document.getElementById("jobTitle").value.trim();
    var email = document.getElementById("email").value.trim();
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
    var address = document.getElementById("address").value.trim();
    var languages = document.getElementById("languages").value.trim();
    var education = document.getElementById("education").value.trim();
    var experience = document.getElementById("experience").value.trim();
    var experienceDuration = document.getElementById("experience-duration").value.trim();
    var projects = document.getElementById("projects").value.trim();
    var skills = document.getElementById("skills").value.trim();
    var hobbies = document.getElementById("hobbies").value.trim();
    var skillsArray = skills
        .split(",")
        .map(function (skill) { return skill.trim(); });
    var projectsArray = projects.split(",").map(function (project) { return project.trim(); });
    var hobbiesArray = hobbies
        .split(",")
        .map(function (hobby) { return hobby.trim(); });
    var imageInput = document.getElementById("image");
    var imageFile = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var image = "";
    if (imageFile) {
        var allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowedImageTypes.includes(imageFile.type)) {
            alert("Please upload a valid image file (JPEG, PNG).");
            return;
        }
        var reader_1 = new FileReader();
        reader_1.onloadend = function () {
            image = reader_1.result;
            var resumeData = {
                fullName: fullName,
                jobTitle: jobTitle,
                email: email,
                phoneNumber: parseInt(phoneNumber),
                address: address,
                languages: languages,
                education: education,
                experience: experience,
                experienceDuration: experienceDuration,
                projects: projects,
                projectsArray: projectsArray,
                skills: skills,
                skillsArray: skillsArray,
                hobbies: hobbies,
                hobbiesArray: hobbiesArray,
                image: image,
            };
            localStorage.setItem("resumeData", JSON.stringify(resumeData));
            window.location.href = "./Resume/resume.html";
        };
        reader_1.readAsDataURL(imageFile);
    }
    else {
        var resumeData_1 = {
            fullName: fullName,
            jobTitle: jobTitle,
            email: email,
            phoneNumber: parseInt(phoneNumber),
            address: address,
            languages: languages,
            education: education,
            experience: experience,
            experienceDuration: experienceDuration,
            projects: projects,
            projectsArray: projectsArray,
            skills: skills,
            skillsArray: skillsArray,
            hobbies: hobbies,
            hobbiesArray: hobbiesArray,
            image: "",
        };
        localStorage.setItem("resumeData", JSON.stringify(resumeData_1));
        window.location.href = "./Resume/resume.html";
    }
});
(_b = document.querySelector(".btn-clear")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    localStorage.removeItem("resumeData");
    document.getElementById("fullName").value = "";
    document.getElementById("jobTitle").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("address").value = "";
    document.getElementById("languages").value = "";
    document.getElementById("education").value = "";
    document.getElementById("experience").value = "";
    document.getElementById("experience-duration").value =
        "";
    document.getElementById("projects").value = "";
    document.getElementById("skills").value = "";
    document.getElementById("hobbies").value = "";
});
