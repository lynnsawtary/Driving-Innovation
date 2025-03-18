// Sample car model data (extendable)
const modelsData = {
    1: {
        title: "Model 1",
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=1200:*",
        description: "A powerful sports car that combines speed and luxury.",
        specs: [
            "Engine: 3.0L V6",
            "Horsepower: 400 HP",
            "Top Speed: 200 mph",
            "0-60 mph: 3.5 seconds"
        ]
    },
    2: {
        title: "Model 2",
        image: "https://www.bmw-me.com/content/dam/bmw/common/all-models/m-series/m760e-xdrive/2023/navigation/bmw-7-series-i7-m70-modelfinder.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1681391222527.png",
        description: "Experience the perfect blend of comfort and performance.",
        specs: [
            "Engine: 2.5L V4",
            "Horsepower: 250 HP",
            "Top Speed: 180 mph",
            "0-60 mph: 6 seconds"
        ]
    },
    3: {
        title: "Model 3",
        image: "https://modenamotorsgmbh.com/64790-thickbox_default/mercedes-benz-g500-amg-my2025.jpg",
        description: "A luxury sedan offering unmatched style and elegance.",
        specs: [
            "Engine: 3.5L V6",
            "Horsepower: 300 HP",
            "Top Speed: 160 mph",
            "0-60 mph: 5.5 seconds"
        ]
    }
};

// Modal functionality
const modelCards = document.querySelectorAll('.model-card');
const modal = document.getElementById('modelModal');
const closeModal = document.getElementById('closeModal');

// Show modal with car details
modelCards.forEach(card => {
    card.addEventListener('click', function() {
        const modelId = card.getAttribute('data-model');
        const model = modelsData[modelId];

        document.getElementById('modalTitle').textContent = model.title;
        document.getElementById('modalImage').src = model.image;
        document.getElementById('modalDescription').textContent = model.description;

        const modalSpecsList = document.getElementById('modalSpecs');
        modalSpecsList.innerHTML = '';
        model.specs.forEach(spec => {
            const li = document.createElement('li');
            li.textContent = spec;
            modalSpecsList.appendChild(li);
        });

        modal.style.display = 'block';
    });
});

// Close modal functionality
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Filter functionality
const filterSelect = document.getElementById('filter');
filterSelect.addEventListener('change', function() {
    const filterValue = filterSelect.value;

    modelCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {

   

    // ⏳ Set a timeout to transition after 4 seconds (3s fade-in + 1s fade-out)

    setTimeout(() => {

        // 🎬 Hide the logo section after animation ends

        document.querySelector(".logo-container").style.display = "none";

       

        // 🚀 Show the main content after the logo disappears

        document.querySelector(".main-content").style.display = "block";

       

        // 🌑 Change the background color for the main content

        document.body.style.backgroundColor = "#111"; // Dark gray background

    }, 4000); // 4 seconds total (animation time)

});