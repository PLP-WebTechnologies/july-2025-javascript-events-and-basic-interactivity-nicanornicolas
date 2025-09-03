// This event listener ensures our code runs only after the HTML document is fully loaded.
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // We select all the necessary HTML elements at the start for efficiency.
    // =================================================================
    const generateBtn = document.getElementById('generateBtn');
    const highlightBtn = document.getElementById('highlightBtn');
    const profileContainer = document.getElementById('profileContainer');


    // =================================================================
    // These functions build reusable blocks of logic.
    // =================================================================

    /**
     * Function 1: Creates an HTML element for the profile card.
     * @param {string} name - The user's name.
     * @param {string} color - The user's favorite color for the card's title.
     * @returns {HTMLElement} - The fully constructed profile card div element.
     */
    function createProfileCard(name, color) {
        const card = document.createElement('div');
        card.className = 'profile-card';
        
        const heading = document.createElement('h2');
        heading.textContent = `Profile: ${name}`;
        heading.style.color = color; // Dynamically set the color!

        const info = document.createElement('p');
        info.textContent = "This card was generated dynamically using JavaScript.";
        
        card.appendChild(heading);
        card.appendChild(info);

        return card;
    }

    /**
     * Function 2: Generates a list of skills using a loop.
     * @returns {HTMLElement} - A UL element containing a list of skills.
     */
    function generateSkillList() {
        const skills = ["HTML", "CSS", "JavaScript Fundamentals", "DOM Manipulation"];
        const ul = document.createElement('ul');
        
        // =================================================================
        // Loop 1: Using forEach to iterate over an array and create list items.
        // =================================================================
        skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            ul.appendChild(li);
        });

        return ul;
    }


    // =================================================================
    // Here we define what happens when the user clicks our buttons.
    // =================================================================

    // --- DOM Interaction 1: Generate Profile Button ---
    generateBtn.addEventListener('click', () => {
        
        // =================================================================
        // Variables, user input (prompt), operators, and conditionals.
        // =================================================================
        const userName = prompt("Please enter your name:");
        const favoriteColor = prompt("What's your favorite color? (e.g., 'lightblue', '#ff6347')");

        // Conditional Logic: Check if the user provided input.
        if (!userName || !favoriteColor) {
            alert("Oops! You must enter both a name and a color. Please try again.");
            return; // Stop the function if input is missing
        }

        console.log(`User Info: Name - ${userName}, Favorite Color - ${favoriteColor}`);

        // Clear any previous profile card
        profileContainer.innerHTML = '';
        
        // --- DOM Interaction 2: Creating and Appending Content ---
        // Use our functions from Part 2 to build the content
        const profileCard = createProfileCard(userName, favoriteColor);
        const skillList = generateSkillList();
        
        // Add the skill list to the card, and the card to the page
        profileCard.appendChild(skillList);
        profileContainer.appendChild(profileCard);
    });

    // --- DOM Interaction 3: Toggle Highlight Button ---
    highlightBtn.addEventListener('click', () => {
        const card = profileContainer.querySelector('.profile-card');
        
        // Conditional check: only toggle if the card exists
        if (card) {
            card.classList.toggle('highlighted');
        } else {
            alert("Please generate a profile card first!");
        }
    });


    // =================================================================
    // Loop 2: A simple 'for' loop to log a message to the console on page load.
    // =================================================================
    console.log("Countdown to launch:");
    for (let i = 3; i > 0; i--) {
        console.log(`${i}...`);
    }
    console.log("Page Initialized! 🚀");

});