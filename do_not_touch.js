// Place the ornaments on the tree
const pos = [[600,350],[1200,460],[900,700],[600,900],[1200,1000],[500,1300],[900,1400],[650,1700],[700,1600],[1000,1700],[500,1800],[900,1900],[1200,2000],[600,2100],[1000,2200]];

document.querySelectorAll(".ornament").forEach((item, index) => {
    item.style.left = pos[index][0] + "px";
    item.style.top  = pos[index][1] + "px";
});

// Add active class when clicked to all the ornaments
document.querySelectorAll(".ornament").forEach((item, index) => {
    item.addEventListener("click", e => {
        e.currentTarget.classList.toggle("active");
        e.stopPropagation();
    }, false);
});
