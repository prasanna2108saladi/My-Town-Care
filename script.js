// Sample issues data - stored in JavaScript array for dynamic rendering
const sampleIssues = [
    {
        id: 1,
        title: "Pothole on Main Street",
        description: "Large pothole causing traffic issues and potential damage to vehicles. Located near the intersection of Main St and Oak Ave.",
        category: "Roads",
        status: "In Progress",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        date: "2024-01-15",
        location: "Main Street & Oak Avenue"
    },
    {
        id: 2,
        title: "Broken Streetlight",
        description: "Streetlight not working on the corner of Pine Street. Creates safety concerns for pedestrians at night.",
        category: "Streetlights",
        status: "Pending",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        date: "2024-01-20",
        location: "Pine Street Corner"
    },
    {
        id: 3,
        title: "Garbage Overflow",
        description: "Public trash bin overflowing with garbage. Needs immediate attention to maintain cleanliness.",
        category: "Sanitation",
        status: "Resolved",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        date: "2024-01-10",
        location: "Central Park Entrance"
    },
    {
        id: 4,
        title: "Sidewalk Damage",
        description: "Cracked and uneven sidewalk tiles creating tripping hazards for pedestrians.",
        category: "Roads",
        status: "Pending",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        date: "2024-01-18",
        location: "Elm Street Sidewalk"
    },
    {
        id: 5,
        title: "Traffic Sign Missing",
        description: "Stop sign knocked down at the intersection. Creates dangerous traffic conditions.",
        category: "Others",
        status: "In Progress",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        date: "2024-01-22",
        location: "Maple & Cedar Intersection"
    },
    {
        id: 6,
        title: "Drainage Issue",
        description: "Blocked storm drain causing water accumulation during rain. Needs cleaning and maintenance.",
        category: "Sanitation",
        status: "Resolved",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        date: "2024-01-12",
        location: "Riverside Drive"
    }
];

// Function to get status badge class
function getStatusBadgeClass(status) {
    switch(status) {
        case 'Pending':
            return 'badge-pending';
        case 'In Progress':
            return 'badge-progress';
        case 'Resolved':
            return 'badge-resolved';
        default:
            return 'badge-secondary';
    }
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to render issue cards
function renderIssueCard(issue) {
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <img src="${issue.image}" class="card-img-top" alt="${issue.title}">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title">${issue.title}</h5>
                        <span class="badge ${getStatusBadgeClass(issue.status)}">${issue.status}</span>
                    </div>
                    <p class="card-text text-muted">${issue.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">
                            <i class="bi bi-geo-alt me-1"></i>${issue.location}
                        </small>
                        <small class="text-muted">
                            <i class="bi bi-calendar me-1"></i>${formatDate(issue.date)}
                        </small>
                    </div>
                </div>
                <div class="card-footer bg-transparent">
                    <span class="badge bg-light text-dark">${issue.category}</span>
                </div>
            </div>
        </div>
    `;
}

// Function to load sample issues on home page
function loadSampleIssues() {
    const sampleIssuesContainer = document.getElementById('sampleIssues');
    if (sampleIssuesContainer) {
        // Show only first 3 issues on home page
        const homePageIssues = sampleIssues.slice(0, 3);
        sampleIssuesContainer.innerHTML = homePageIssues.map(renderIssueCard).join('');
    }
}

// Function to load all issues on issues page
function loadAllIssues() {
    const issuesContainer = document.getElementById('allIssues');
    if (issuesContainer) {
        issuesContainer.innerHTML = sampleIssues.map(renderIssueCard).join('');
    }
}

// Function to handle image preview
function handleImagePreview(input) {
    const preview = document.getElementById('imagePreview');
    const file = input.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none';
    }
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const issueData = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        location: formData.get('location'),
        image: formData.get('image')
    };
    
    // Show success message
    showAlert('Issue reported successfully! Thank you for helping improve our community.', 'success');
    
    // Reset form
    event.target.reset();
    document.getElementById('imagePreview').style.display = 'none';
    
    // Log to console for now (would be sent to backend in real app)
    console.log('New issue reported:', issueData);
}

// Function to handle contact form submission
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Show success message
    showAlert('Message sent successfully! We\'ll get back to you soon.', 'success');
    
    // Reset form
    event.target.reset();
    
    // Log to console for now (would be sent to backend in real app)
    console.log('Contact form submitted:', contactData);
}

// Function to show alerts
function showAlert(message, type = 'info') {
    const alertContainer = document.createElement('div');
    alertContainer.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertContainer.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    alertContainer.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertContainer);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertContainer.parentNode) {
            alertContainer.remove();
        }
    }, 5000);
}

// Function to initialize page-specific functionality
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            loadSampleIssues();
            break;
        case 'issues.html':
            loadAllIssues();
            break;
        case 'report.html':
            // Add image preview functionality
            const imageInput = document.getElementById('issueImage');
            if (imageInput) {
                imageInput.addEventListener('change', function() {
                    handleImagePreview(this);
                });
            }
            
            // Add form submission handler
            const reportForm = document.getElementById('reportForm');
            if (reportForm) {
                reportForm.addEventListener('submit', handleFormSubmission);
            }
            break;
        case 'contact.html':
            // Add contact form submission handler
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', handleContactForm);
            }
            break;
    }
}

// Function to add smooth scrolling to navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Function to add navbar scroll effect
function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
}

// Function to add loading animation to buttons
function initializeButtonLoading() {
    const submitButtons = document.querySelectorAll('button[type="submit"]');
    submitButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.form && this.form.checkValidity()) {
                const originalText = this.innerHTML;
                this.innerHTML = '<span class="loading me-2"></span>Submitting...';
                this.disabled = true;
                
                // Reset after 2 seconds (simulating submission)
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    initializeSmoothScrolling();
    initializeNavbarScroll();
    initializeButtonLoading();
    
    // Add animation to cards when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.card, .feature-card').forEach(card => {
        observer.observe(card);
    });
});

// Add some utility functions for future backend integration
const CivicConnect = {
    // Function to add new issue (for future backend integration)
    addIssue: function(issueData) {
        // This would make an API call to add the issue
        console.log('Adding new issue:', issueData);
        return Promise.resolve({ success: true, id: Date.now() });
    },
    
    // Function to get all issues (for future backend integration)
    getIssues: function() {
        // This would make an API call to get issues
        console.log('Fetching all issues');
        return Promise.resolve(sampleIssues);
    },
    
    // Function to update issue status (for future backend integration)
    updateIssueStatus: function(issueId, newStatus) {
        // This would make an API call to update the issue
        console.log(`Updating issue ${issueId} status to ${newStatus}`);
        return Promise.resolve({ success: true });
    }
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CivicConnect;
}
