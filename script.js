// developer data
const developers = [
    {
        name: "Jane Doe",
        role: "Frontend Developer",
        skills: ["HTML", "CSS", "JavaScript"],
        available: true,
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Michael Dort",
        role: "Full Stack Developer",
        skills: ["HTML", "CSS", "JavaScript", "Python", "Node"],
        available: true,
        image: "https://via.placeholder.com/100"
    },
    {
        name: "TJ Williams",
        role: "Backend Developer",
        skills: ["Express", "Ruby", "Mongo"],
        available: true,
        image: "https://via.placeholder.com/100"
    }
];

const container = document.getElementById('cardContainer');
const searchInput = document.getElementById('searchInput');

// renders a single dev card
function renderCard(dev) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <img src="${dev.image}" alt='Profile Picture'/>
    <h2>${dev.name}</h2>
    <p>${dev.role}</p>
    <div class='skills'>
    ${dev.skills.map(skill => `<span>${skill}</span>`).join('')}
    </div>
    <p class= "status ${dev.available ? 'available' : 'unavailable'}">
    ${dev.available ? 'Available for Hire' : 'Not Availble'}
    </p>
    `;

    container.appendChild(card);
};    

// shows all devs on page load
developers.forEach(renderCard);

// search based dev filter
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    // clears cards
    container.innerHTML = ''; 
        
    // name and skill filter
    const filtered = developers.filter(dev => {
        const nameMatch = dev.name.toLowerCase().includes(searchTerm);
        const skillMatch = dev.skills.some(skill => skill.toLowerCase().includes(searchTerm)
        );
        console.log(dev.name, dev.skills);
        console.log(`checking ${dev.name}:`, nameMatch, skillMatch);
        return nameMatch || skillMatch;
    });

    // renders matched cards
    filtered.forEach(renderCard);
})