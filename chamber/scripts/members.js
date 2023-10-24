
document.addEventListener("DOMContentLoaded", function() {
    const gridButton = document.getElementById("grid");
    const listButton = document.getElementById("list");
    const directoryContainer = document.querySelector(".directory-container");

    gridButton.addEventListener("click", function() {
        directoryContainer.classList.remove("list-view");
        directoryContainer.classList.add("grid-view");
        toggleView();
    });

    listButton.addEventListener("click", function() {
        directoryContainer.classList.remove("grid-view");
        directoryContainer.classList.add("list-view");
        toggleView();
    });

    function toggleView() {
        const isGridView = directoryContainer.classList.contains("grid-view");
        const items = document.querySelectorAll(".directory-card");
        items.forEach(item => {
            if (isGridView) {
                item.style.display = "block";
            } else {
                item.style.display = "flex";
            }
        });
    }

    // Function to handle responsive design changes
    function handleResponsiveDesign() {
        const items = document.querySelectorAll(".directory-card");
        if (window.innerWidth < 768) {
            directoryContainer.classList.remove("grid-view", "list-view");
            items.forEach(item => {
                item.style.display = "block";
            });
        } else {
            // Handle grid or list view based on button clicked
            toggleView();
        }
    }

    // Event listener for window resize to handle responsive design changes
    window.addEventListener("resize", handleResponsiveDesign);

    // Initial call to handle responsive design on page load
    handleResponsiveDesign();
});


    // Fetch and display member data from JSON
    fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
        const directoryContainer = document.querySelector(".directory-container");

        data.members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.className = "directory-card directory-list-item"; // Initially, both classes are added
            memberElement.innerHTML = `
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>Tel: ${member.phone}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <img src="${member.image}" alt="${member.name}"> <!-- Use member.image to get the image path -->
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.otherInfo}</p>
            `;
            directoryContainer.appendChild(memberElement);
        });

    toggleView(); // Apply initial view based on button click
})
.catch(error => console.error("Error fetching member data:", error));







