var _a, _b;
console.log("Form loaded");
var resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
var fields = [
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
fields.forEach(function (field) {
    var input = document.getElementById(field);
    if (resumeData && input) {
        input.value = resumeData[field] || "";
    }
});
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePhoneNumber(phone) {
    return /^\d{11}$/.test(phone);
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
    var skillsArray = skills.split(",").map(function (skill) { return skill.trim(); });
    var projectsArray = projects.split(",").map(function (project) { return project.trim(); });
    var hobbiesArray = hobbies.split(",").map(function (hobby) { return hobby.trim(); });
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
            saveData();
        };
        reader_1.readAsDataURL(imageFile);
    }
    else {
        saveData();
    }
    function saveData() {
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
    }
});
(_b = document.querySelector(".btn-clear")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    localStorage.removeItem("resumeData");
    fields.forEach(function (field) {
        document.getElementById(field).value = "";
    });
});
