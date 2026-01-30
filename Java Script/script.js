console.log("Portfolio Loaded ");

// TYPING EFFECT 
const text = "Web Developer | Portfolio Website ";
let index = 0;
const typingEl = document.getElementById("typing");

function typeEffect() {
    if (typingEl && index < text.length) {
        typingEl.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}
typeEffect();


// NAVBAR HOVER EFFECT
const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "orange";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "";
    });
});

// IMAGE ZOOM 
const profileImg = document.querySelector("#about img");

if (profileImg) {
    profileImg.addEventListener("click", () => {
        profileImg.classList.toggle("zoom");
    });
}


// DARK MODE
const darkBtn = document.createElement("button");
darkBtn.textContent = "Dark Mode";
darkBtn.id = "darkBtn";
document.body.prepend(darkBtn);

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")) () => {
        localStorage.setItem("theme","dark");
        darkBtn.textContent = "Light Mode";
    }
    else{localStorage.setItem("theme","light");
        darkBtn.textContent = "Dark Mode";
}
});

window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        darkBtn.textContent = "Light Mode";
    }
});


// SCROLL REVEAL 
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

//FORM VALIDATION 
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (nameInput.value.trim().length < 3) {
            alert("Name must be at least 3 characters!");
            return;
        }

        if (!emailInput.value.includes("@")) {
            alert("Enter valid email!");
            return;
        }

        alert("Message sent successfully ");
        form.reset();
    });
}

// BACK TO TOP BUTTON 
const topBtn = document.createElement("button");
topBtn.textContent = "back to top";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// SKILL BARS 
const bars = document.querySelectorAll(".bar");
function animateSkills() {
    bars.forEach(bar => {
        bar.style.width = bar.getAttribute("data-level") + "%";
    });
}

window.addEventListener("scroll", animateSkills);



