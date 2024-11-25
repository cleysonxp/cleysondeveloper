document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".btn-filter");
    const skillItems = document.querySelectorAll(".skill-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            skillItems.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const backEndButton = document.querySelector('[data-filter="back-end"]');
    backEndButton.classList.add('active');

    filterSkills('back-end');
});

function filterSkills(filter) {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

const filterButtons = document.querySelectorAll('.btn-filter');
filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        filterSkills(button.getAttribute('data-filter'));

        filterButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
    });
});
