// Project data
const projects = [
    {
        id: 1,
        title: "Social Network",
        tags: ["go", "javascript", "websockets", "docker"],
        description: "Réseau social complet développé en Go avec frontend en JS Framework (Vue/Angular).",
        features: [
            "Authentification sécurisée via cookies & sessions",
            "Base relationnelle SQLite avec migrations", 
            "Relations complexes : followers, groupes, notifications",
            "WebSockets pour chat + notifications en temps réel",
            "Frontend dynamique avec JS framework",
            "Docker multi-conteneur (backend + frontend)"
        ],
        skills: [
            "Développement backend robuste en Go",
            "Gestion de sessions vs JWT",
            "WebSockets et communication temps réel",
            "Docker (images vs containers, communication inter-conteneurs)",
            "Conception BDD relationnelle et migrations"
        ]
    },
    {
        id: 2,
        title: "Mini-Framework",
        tags: ["javascript"],
        description: "Création d'un mini-framework JS maison pour comprendre le fonctionnement de React/Vue.",
        features: [
            "Inversion de contrôle (framework vs librairie)",
            "Abstraction DOM (Virtual DOM ou templating maison)",
            "Routing basé sur l'URL (SPA)",
            "Gestion d'état global entre composants",
            "Event handling custom (sans addEventListener)",
            "Démo avec TodoMVC + documentation claire"
        ],
        skills: [
            "Compréhension profonde des frameworks modernes",
            "DOM manipulation optimisée",
            "Routing côté frontend",
            "Gestion d'état global",
            "Architecture logicielle (IoC, modularité)"
        ]
    },
    {
        id: 3,
        title: "Bomberman-DOM",
        tags: ["javascript", "websockets"],
        description: "Jeu Bomberman multi-joueurs en JS pur avec framework maison.",
        features: [
            "Game loop optimisée avec requestAnimationFrame (60 FPS)",
            "DOM rendering sans Canvas/WebGL",
            "Synchronisation temps réel des joueurs (bombes, power-ups, vies)",
            "Chat multi-user via WebSockets",
            "Gestion d'état partagé entre joueurs"
        ],
        skills: [
            "Programmation de jeux dans le navigateur",
            "Optimisation DOM et animations fluides",
            "WebSockets pour temps réel",
            "Conception d'un moteur de jeu simple mais robuste",
            "Gestion d'état distribué (multi-joueur)"
        ]
    },
    {
        id: 4,
        title: "0-Shell",
        tags: ["rust"],
        description: "Développement d'un mini-shell Unix en Rust avec commandes basiques.",
        features: [
            "Parsing de commandes",
            "Implémentation de ls, cd, pwd, cat, etc.",
            "Gestion des processus via syscalls (fork, execve)",
            "Gestion d'erreurs robuste (commande inconnue, EOF, Ctrl+D, SIGINT)"
        ],
        skills: [
            "Programmation système bas niveau en Rust",
            "Sécurité mémoire avec Rust",
            "Manipulation des processus Unix",
            "Gestion des signaux (SIGINT, EOF)",
            "Implémentation de commandes internes/externes"
        ]
    },
    {
        id: 5,
        title: "Net-Cat",
        tags: ["go", "networking"],
        description: "Recréation de l'outil NetCat (chat réseau en Go).",
        features: [
            "Serveur TCP multi-clients (max 10), écoute sur un port (8989)",
            "Messages horodatés + identifiés par username",
            "Historique envoyé aux nouveaux clients",
            "Notifications d'entrées/sorties des utilisateurs",
            "Validation obligatoire du nom d'utilisateur"
        ],
        skills: [
            "Réseau bas niveau avec TCP/UDP en Go",
            "Concurrence avec goroutines, channels, mutexes",
            "Gestion de l'état partagé et propagation en temps réel",
            "Formatage structuré des messages"
        ]
    },
    {
        id: 6,
        title: "Smart-Road",
        tags: ["rust", "simulation"],
        description: "Simulation d'intersection intelligente pour véhicules autonomes (AVs).",
        features: [
            "Simulation de véhicules autonomes (vitesse, distance, temps)",
            "Gestion de distance de sécurité et évitement de collisions",
            "Animation réaliste des véhicules (rotation, déplacement)",
            "Commandes clavier pour générer véhicules et trafic aléatoire",
            "Statistiques : vitesse max/min, temps max/min, nb véhicules, quasi-accidents"
        ],
        skills: [
            "Rust + SDL2 pour animation et simulation temps réel",
            "Algorithmique pour gestion de trafic et sécurité",
            "Math appliquée (v = d / t, distances, collisions)",
            "Conception interactive avec événements clavier",
            "Optimisation et structuration du code de simulation"
        ]
    },
    {
        id: 7,
        title: "Push-Swap",
        tags: ["algorithms"],
        description: "Implémentation d'un algorithme de tri optimisé en utilisant deux piles.",
        features: [
            "Algorithme de tri avec piles (stack A et stack B)",
            "Opérations prédéfinies (sa, pb, ra, etc.)",
            "Optimisation du nombre d'opérations",
            "Gestion de différentes tailles de données"
        ],
        skills: [
            "Algorithmique et optimisation",
            "Manipulation de structures de données (piles, listes)",
            "Analyse de complexité et réduction du nombre d'opérations",
            "Programmation bas niveau et gestion mémoire"
        ]
    },
    {
        id: 8,
        title: "Lem-in",
        tags: ["algorithms", "pathfinding"],
        description: "Simulation de fourmis traversant une carte de salles reliées par des tunnels.",
        features: [
            "Algorithmes de pathfinding pour fourmis",
            "Optimisation des flux et chemins multiples",
            "Parsing de cartes complexes",
            "Visualisation des déplacements"
        ],
        skills: [
            "Algorithmes de graphes (BFS, DFS, Dijkstra)",
            "Optimisation des flux et gestion de chemins multiples",
            "Parsing et validation de données complexes",
            "Visualisation/simulation de déplacements"
        ]
    },
    {
        id: 9,
        title: "Real-Time Forum",
        tags: ["go", "websockets"],
        description: "Forum en temps réel développé en Go.",
        features: [
            "Système d'authentification complet",
            "Création de threads et messages",
            "Notifications instantanées",
            "Interface temps réel"
        ],
        skills: [
            "Développement backend en Go",
            "WebSockets pour forum temps réel",
            "Gestion d'utilisateurs et sessions",
            "Architecture client-serveur robuste"
        ]
    },
    {
        id: 10,
        title: "GraphQL API",
        tags: ["go", "javascript", "api"],
        description: "Mise en place d'une API GraphQL pour gérer des données de manière flexible.",
        features: [
            "Requêtes personnalisées (query, mutation)",
            "Schémas flexibles",
            "Optimisation des requêtes",
            "Sélection de champs dynamique"
        ],
        skills: [
            "Différences REST vs GraphQL",
            "Conception de schémas (types, resolvers)",
            "Optimisation des requêtes et sélection de champs",
            "Sécurité et validation côté serveur"
        ]
    },
    {
        id: 11,
        title: "01-Shell",
        tags: ["unix", "scripts"],
        description: "Collection de scripts Shell Unix de base.",
        features: [
            "Scripts d'automatisation",
            "Commandes Unix essentielles",
            "Gestion de fichiers et processus",
            "Pipelines et redirections"
        ],
        skills: [
            "Maîtrise des commandes Unix (ls, grep, awk, sed…)",
            "Automatisation avec scripts Bash",
            "Gestion des fichiers, droits et processus",
            "Introduction au scripting système"
        ]
    },
    {
        id: 12,
        title: "Wget Clone",
        tags: ["go", "networking"],
        description: "Recréation simplifiée de l'outil wget.",
        features: [
            "Téléchargement HTTP/HTTPS",
            "Gestion des en-têtes",
            "Support des redirections",
            "Interface en ligne de commande"
        ],
        skills: [
            "Protocoles HTTP/HTTPS et sockets",
            "Parsing d'URL et gestion des requêtes réseau",
            "Lecture/écriture de fichiers",
            "Gestion des erreurs réseau et résilience"
        ]
    }
];

// Typed text animation
const typedTextElement = document.getElementById('typed-text');
const textToType = ['Développeur Full-Stack', 'Expert en Go & Rust', 'Architecte Logiciel', 'Passionné d\'Innovation'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = textToType[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => { isDeleting = true; }, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textToType.length;
    }
    
    setTimeout(typeText, isDeleting ? 50 : 100);
}

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling and active link highlighting
    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

// Theme toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Skills radar animation
function initSkillsAnimation() {
    const radarCharts = document.querySelectorAll('.mv6-01');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const chart = entry.target;
                chart.style.opacity = '1';
                chart.style.transform = 'scale(1)';
            }
        });
    }, { threshold: 0.3 });
    
    radarCharts.forEach(chart => {
        chart.style.opacity = '0';
        chart.style.transform = 'scale(0.8)';
        chart.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(chart);
    });
}

// Projects functionality
function initProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Render projects
    function renderProjects(projectsToShow = projects) {
        projectsGrid.innerHTML = '';
        projectsToShow.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Create project card
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-tags', project.tags.join(' '));
        
        const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
        const featuresHTML = project.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('');
        
        card.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tags">${tagsHTML}</div>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <div class="project-features">
                    <h4>Fonctionnalités principales :</h4>
                    <ul>${featuresHTML}</ul>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openProjectModal(project));
        
        return card;
    }
    
    // Filter projects
    function filterProjects(filter) {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            const tags = card.getAttribute('data-tags');
            if (filter === 'all' || tags.includes(filter)) {
                card.style.display = 'block';
                
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
    
    renderProjects();
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = modal.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    const featuresHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
    const skillsHTML = project.skills.map(skill => `<li>${skill}</li>`).join('');
    
    modalBody.innerHTML = `
        <div class="modal-project">
            <h2>${project.title}</h2>
            <div class="project-tags" style="margin-bottom: 1.5rem;">${tagsHTML}</div>
            
            <div class="modal-section">
                <h3>Description</h3>
                <p>${project.description}</p>
            </div>
            
            <div class="modal-section">
                <h3>Fonctionnalités principales</h3>
                <ul class="modal-list">${featuresHTML}</ul>
            </div>
            
            <div class="modal-section">
                <h3>Compétences démontrées</h3>
                <ul class="modal-list">${skillsHTML}</ul>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Contact form
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.innerHTML = '<div class="loading"></div> Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Merci pour votre message ! Je vous répondrai bientôt.');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(17, 24, 39, 0.98)';
            }
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(17, 24, 39, 0.95)';
            }
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    typeText();
    initNavigation();
    initThemeToggle();
    initSkillsAnimation();
    initProjects();
    initModal();
    initContactForm();
    initNavbarScroll();
    
    // Add smooth reveal animation for sections
    const sections = document.querySelectorAll('section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.6s ease';
        revealObserver.observe(section);
    });
});

// Add some additional CSS for modal sections
const additionalCSS = `
.modal-section {
    margin-bottom: 2rem;
}

.modal-section h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.modal-section p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
}

.modal-list {
    list-style: none;
    padding-left: 0;
}

.modal-list li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border-color);
}

.modal-list li:last-child {
    border-bottom: none;
}

.modal-list li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
}

.modal-project h2 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.8rem;
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);