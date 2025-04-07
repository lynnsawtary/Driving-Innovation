document.addEventListener('DOMContentLoaded', function() {
  // ======================
  // 1. PERFORMANCE PACKAGE TABS (unchanged)
  // ======================
  function showTab(tabId) {
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    const activeBtn = document.querySelector(`.tab-btn[onclick*="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // Hide all tab contents
    document.querySelectorAll('.package-content').forEach(content => {
      content.classList.remove('active');
    });
    
    // Show selected tab content
    const activeContent = document.getElementById(tabId);
    if (activeContent) activeContent.classList.add('active');
  }

  // Initialize tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
      showTab(tabId);
    });
  });

  // ======================
  // 2. MODAL MANAGEMENT SYSTEM (fixed version)
  // ======================
  const modalManager = {
    modals: {},
    currentModal: null,
    isDragging: false,
    dragOffset: { x: 0, y: 0 },
    successBanner: null,
      
    init: function() {
      this.initializeModals();
      this.createSuccessBanner();
      this.setupGlobalListeners();
    },
    
    initializeModals: function() {
      this.modals = {
        maintenance: {
          trigger: document.getElementById('scheduleMaintenanceBtn'),
          modal: document.getElementById('maintenanceModal')
        },
        design: {
          trigger: document.querySelector('.open-design-modal'),
          modal: document.getElementById('designConsultationModal')
        },
        performance: {
          trigger: document.querySelector('.open-performance-modal'),
          modal: document.getElementById('performanceConsultationModal')
        },
        tech: {
          trigger: document.querySelector('.open-tech-modal'),
          modal: document.getElementById('techConsultationModal')
        },
        contact: {
          trigger: document.getElementById('contactUsBtn'),
          modal: document.getElementById('contactUsModal')
        }
      };

      Object.values(this.modals).forEach(modalData => {
        if (!modalData.trigger || !modalData.modal) return;
        
        const dialog = modalData.modal.querySelector('.modal-dialog');
        const header = modalData.modal.querySelector('.modal-header');
        const closeBtn = modalData.modal.querySelector('.close-btn');
        const form = modalData.modal.querySelector('form');
        
        // Make modal draggable
        header.addEventListener('mousedown', (e) => this.startDrag(e, modalData.modal));
        
        // Open modal
        modalData.trigger.addEventListener('click', (e) => {
          e.preventDefault();
          this.openModal(modalData.modal);
        });
        
        // Close modal
        closeBtn.addEventListener('click', () => this.closeModal(modalData.modal));
        
        // Close when clicking outside
        modalData.modal.addEventListener('click', (e) => {
          if (e.target === modalData.modal) {
            this.closeModal(modalData.modal);
          }
        });
        
        // Form submission
        if (form) {
          form.addEventListener('submit', (e) => this.handleFormSubmit(e, form, modalData.modal));
        }
      });
    },
    
    setupGlobalListeners: function() {
      document.addEventListener('mousemove', (e) => this.handleDrag(e));
      document.addEventListener('mouseup', () => this.stopDrag());
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.currentModal) {
          this.closeModal(this.currentModal);
        }
      });
    },
    
    openModal: function(modal) {
      if (!modal) {
        console.error('Tried to open non-existent modal');
        return;
      }
      
      // Close any open modal first
      if (this.currentModal && this.currentModal !== modal) {
        this.closeModal(this.currentModal);
      }
      
      this.currentModal = modal;
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      
      // Center modal
      const dialog = modal.querySelector('.modal-dialog');
      if (dialog) {
        const left = Math.max(20, (window.innerWidth - dialog.offsetWidth) / 2);
        const top = Math.max(20, (window.innerHeight - dialog.offsetHeight) / 3);
        dialog.style.left = left + 'px';
        dialog.style.top = top + 'px';
      }
      
      // Focus first input
      setTimeout(() => {
        const firstInput = modal.querySelector('input, select, textarea');
        if (firstInput) firstInput.focus();
      }, 50);
    },
    
    closeModal: function(modal) {
      if (!modal) return;
      
      modal.style.display = 'none';
      if (this.currentModal === modal) {
        this.currentModal = null;
      }
      document.body.style.overflow = '';
    },
    
    startDrag: function(e, modal) {
      if (e.target.classList.contains('close-btn')) return;
      
      this.isDragging = true;
      this.currentModal = modal;
      const dialog = modal.querySelector('.modal-dialog');
      
      if (dialog) {
        this.dragOffset = {
          x: e.clientX - dialog.getBoundingClientRect().left,
          y: e.clientY - dialog.getBoundingClientRect().top
        };
        dialog.style.cursor = 'grabbing';
      }
      
      document.body.style.userSelect = 'none';
    },
    
    handleDrag: function(e) {
      if (!this.isDragging || !this.currentModal) return;
      
      const dialog = this.currentModal.querySelector('.modal-dialog');
      if (!dialog) return;
      
      const x = e.clientX - this.dragOffset.x;
      const y = e.clientY - this.dragOffset.y;
      const maxX = window.innerWidth - dialog.offsetWidth - 20;
      const maxY = window.innerHeight - dialog.offsetHeight - 20;
      
      dialog.style.left = Math.min(Math.max(20, x), maxX) + 'px';
      dialog.style.top = Math.min(Math.max(20, y), maxY) + 'px';
    },
    
    stopDrag: function() {
      this.isDragging = false;
      if (this.currentModal) {
        const dialog = this.currentModal.querySelector('.modal-dialog');
        if (dialog) dialog.style.cursor = '';
      }
      document.body.style.userSelect = '';
    },
    
    createSuccessBanner: function() {
      if (this.successBanner) return;
      
      const banner = document.createElement('div');
      banner.className = 'success-banner';
      banner.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <p>Your message has been received successfully!</p>
      `;
      document.body.appendChild(banner);
      this.successBanner = banner;
    },
    
    showSuccessBanner: function() {
      if (!this.successBanner) this.createSuccessBanner();
      this.successBanner.classList.add('show');
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        this.successBanner.classList.remove('show');
      }, 5000);
    },
    
    handleFormSubmit: function(e, form, modal) {
      e.preventDefault();
      
      // Reset previous errors
      form.querySelectorAll('.error').forEach(el => {
        el.classList.remove('error');
        const errorMsg = el.querySelector('.error-message');
        if (errorMsg) errorMsg.style.display = 'none';
      });
      
      // Validate required fields
      let isValid = true;
      form.querySelectorAll('[required]').forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          const formGroup = input.closest('.form-group');
          formGroup.classList.add('error');
          
          let errorMsg = formGroup.querySelector('.error-message');
          if (!errorMsg) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            formGroup.appendChild(errorMsg);
          }
          errorMsg.textContent = 'This field is required';
          errorMsg.style.display = 'block';
        }
      });
      
      if (!isValid) return;
      
      // Show loading state
      const submitBtn = form.querySelector('.btn-submit');
      const originalBtnText = submitBtn.textContent;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
      submitBtn.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
        
        this.showSuccessBanner();
        form.reset();
        
        setTimeout(() => {
          this.closeModal(modal);
        }, 1000);
      }, 1500);
    }
  };

  // Initialize modal system
  modalManager.init();

  // ======================
  // 3. MOBILE NAVIGATION (unchanged)
  // ======================
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
  
  // ======================
  // 4. NAVBAR SCROLL EFFECT (unchanged)
  // ======================
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
  });
  
  // ======================
  // 5. SMOOTH SCROLLING (unchanged)
  // ======================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // ======================
  // 6. GALLERY IMAGES (unchanged)
  // ======================
  const galleryContainer = document.querySelector('.gallery-container');
  if (galleryContainer) {
    const galleryImages = [
      'custom1.jpg', 'custom2.jpg',
      'performance1.jpg', 'performance2.jpg',
      'tech1.jpg', 'tech2.jpg',
      'repair1.jpg', 'repair2.jpg'
    ];
    
    galleryImages.forEach(image => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      
      const img = document.createElement('img');
      img.src = `images/${image}`;
      img.alt = 'Our work';
      
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      
      const icon = document.createElement('i');
      icon.className = 'fas fa-search-plus';
      
      overlay.appendChild(icon);
      galleryItem.appendChild(img);
      galleryItem.appendChild(overlay);
      galleryContainer.appendChild(galleryItem);
    });
  }
});