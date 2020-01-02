// Place the ornaments on the tree
const pos = [[600,350],[1200,460],[900,700],[600,900]];

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