// Cars Array with detailed info
const cars = [
  {
    id: 1,
    brand: "ferrari",
    name: "Ferrari F80",
    price: "$330,000",
    image: "./images/ferrari-f80.jpg",
    type: "sport",
    specs: {
      engine: "V12 Twin-Turbo",
      horsepower: "900 HP",
      acceleration: "2.5s 0-60 mph",
      topspeed: "250 mph",
      seats: "2",
      description: "The Ferrari F80 is a hypercar that pushes the boundaries of performance and design."
    }
  },
  {
    id: 2,
    brand: "lambo",
    name: "Lamborghini Aventador",
    price: "$400,000",
    image: "./images/Lamborghini-Aventador.avif",
    type: "sport",
    specs: {
      engine: "V12 Natural Aspirated",
      horsepower: "770 HP",
      acceleration: "2.9s 0-60 mph",
      topspeed: "217 mph",
      seats: "2",
      description: "The Aventador represents the pinnacle of Lamborghini's design and engineering."
    }
  },
  {
    id: 3,
    brand: "porsche",
    name: "Porsche 911 Turbo S",
    price: "$205,000",
    image: "./images/porshe.jpg",
    type: "sport",
    specs: {
      engine: "Flat-6 Twin-Turbo",
      horsepower: "640 HP",
      acceleration: "2.6s 0-60 mph",
      topspeed: "205 mph",
      seats: "4",
      description: "The iconic 911 Turbo S combines everyday usability with track-ready performance."
    }
  },
];

document.addEventListener("DOMContentLoaded", function() {
  // ---------- Dynamic Generation of Car Cards ----------
  const modelsGrid = document.getElementById("modelsGrid");
  modelsGrid.innerHTML = "";
  cars.forEach(car => {
    const card = document.createElement("div");
    card.classList.add("model-card");
    card.innerHTML = `
      <div class="model-image">
        <img src="${car.image}" alt="${car.name}" />
        <div class="model-overlay">
          <h3>${car.name}</h3>
          <p>${car.specs.description}</p>
          <div class="model-specs-hover">
            <span><strong>Engine:</strong> ${car.specs.engine}</span>
            <span><strong>HP:</strong> ${car.specs.horsepower}</span>
            <span><strong>0-60:</strong> ${car.specs.acceleration}</span>
            <span><strong>Top Speed:</strong> ${car.specs.topspeed}</span>
            ${ car.specs.range ? `<span><strong>Range:</strong> ${car.specs.range}</span>` : "" }
            <span><strong>Seats:</strong> ${car.specs.seats}</span>
            <span><strong>Price:</strong> ${car.price}</span>
          </div>
        </div>
      </div>
      <div class="model-info">
        <h3>${car.name}</h3>
        <div class="model-specs">
          <span>${car.specs.acceleration}</span>
          <span>${car.specs.horsepower}</span>
          <span>${car.specs.engine}</span>
        </div>
      </div>
    `;
    modelsGrid.appendChild(card);
  });

  // ---------- Existing Functionalities ----------
  // (Contact form, dropdown hover, login modal, etc.)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Thank you for contacting us! We will get back to you soon.");
      contactForm.reset();
    });
  }

  const menu = document.querySelector('.menu');
  const dropdown = document.querySelector('.dropdown');
  if (menu && dropdown) {
    menu.addEventListener('mouseenter', function() {
      dropdown.style.display = 'block';
    });
    menu.addEventListener('mouseleave', function() {
      dropdown.style.display = 'none';
    });
  }

  const loginLink = document.getElementById("loginLink");
  const loginOverlay = document.getElementById("loginOverlay");
  const loginForm = document.getElementById("loginForm");
  const closeBtn = document.getElementById("closeBtn");
  if (loginLink && loginOverlay) {
    loginLink.addEventListener("click", function(e) {
      e.preventDefault();
      loginOverlay.style.display = "flex";
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", function() {
      loginOverlay.style.display = "none";
    });
  }
  window.addEventListener("click", function(e) {
    if (e.target === loginOverlay) {
      loginOverlay.style.display = "none";
    }
  });
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      alert("Logged in successfully with email: " + email);
      loginOverlay.style.display = "none";
      window.location.href = "index.html";
    });
  }

  // ---------- Consultation Modal Functionality ----------
  const bookConsultationBtn = document.getElementById('bookConsultationBtn');
  const consultationOverlay = document.getElementById('consultationOverlay');
  const closeConsultationBtn = document.getElementById('closeConsultationBtn');
  const consultationForm = document.getElementById('consultationForm');
  if (bookConsultationBtn && consultationOverlay) {
    bookConsultationBtn.addEventListener('click', function(e) {
      e.preventDefault();
      consultationOverlay.classList.add('active');
    });
  }
  if (closeConsultationBtn) {
    closeConsultationBtn.addEventListener('click', function() {
      consultationOverlay.classList.remove('active');
    });
  }
  consultationOverlay.addEventListener('click', function(e) {
    if (e.target === consultationOverlay) {
      consultationOverlay.classList.remove('active');
    }
  });
  if (consultationForm) {
    consultationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for booking a consultation! We will contact you soon.');
      consultationOverlay.classList.remove('active');
      consultationForm.reset();
    });
  }

  // ---------- Contact Us Modal Functionality ----------
  const contactUsBtn = document.getElementById('contactUsBtn');
  const contactUsOverlay = document.getElementById('contactUsOverlay');
  const closeContactUsBtn = document.getElementById('closeContactUsBtn');
  const contactUsForm = document.getElementById('contactUsForm');
  if (contactUsBtn && contactUsOverlay) {
    contactUsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      contactUsOverlay.classList.add('active');
    });
  }
  if (closeContactUsBtn) {
    closeContactUsBtn.addEventListener('click', function() {
      contactUsOverlay.classList.remove('active');
    });
  }
  contactUsOverlay.addEventListener('click', function(e) {
    if (e.target === contactUsOverlay) {
      contactUsOverlay.classList.remove('active');
    }
  });
  if (contactUsForm) {
    contactUsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting us! We will get back to you soon.');
      contactUsOverlay.classList.remove('active');
      contactUsForm.reset();
    });
  }

  // ---------- Book Appointment Modal Functionality ----------
  const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
  const bookAppointmentOverlay = document.getElementById('bookAppointmentOverlay');
  const closeBookAppointmentBtn = document.getElementById('closeBookAppointmentBtn');
  const bookAppointmentForm = document.getElementById('bookAppointmentForm');
  if (bookAppointmentBtn && bookAppointmentOverlay) {
    bookAppointmentBtn.addEventListener('click', function(e) {
      e.preventDefault();
      bookAppointmentOverlay.classList.add('active');
    });
  }
  if (closeBookAppointmentBtn) {
    closeBookAppointmentBtn.addEventListener('click', function() {
      bookAppointmentOverlay.classList.remove('active');
    });
  }
  bookAppointmentOverlay.addEventListener('click', function(e) {
    if (e.target === bookAppointmentOverlay) {
      bookAppointmentOverlay.classList.remove('active');
    }
  });
  if (bookAppointmentForm) {
    bookAppointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for booking an appointment! We will contact you soon.');
      bookAppointmentOverlay.classList.remove('active');
      bookAppointmentForm.reset();
    });
  }
});
