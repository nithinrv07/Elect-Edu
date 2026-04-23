// Mock database of Indian states and their election data
const stateElectionData = {
    "Andhra Pradesh": { dates: "13 May 2024", seats: "175", ls: "25", status: "Recent Election", type: "recent" },
    "Bihar": { dates: "20 October - 07 November 2025", seats: "243", ls: "40", status: "Upcoming 2025", type: "upcoming" },
    "Delhi": { dates: "08 February 2025", seats: "70", ls: "7", status: "Upcoming 2025", type: "upcoming" },
    "Gujarat": { dates: "01 & 05 December 2027", seats: "182", ls: "26", status: "Completed (2022)", type: "recent" },
    "Karnataka": { dates: "10 May 2028", seats: "224", ls: "28", status: "Completed (2023)", type: "recent" },
    "Kerala": { dates: "06 April 2026", seats: "140", ls: "20", status: "Upcoming 2026", type: "upcoming" },
    "Madhya Pradesh": { dates: "17 November 2028", seats: "230", ls: "29", status: "Completed (2023)", type: "recent" },
    "Maharashtra": { dates: "20 November 2024", seats: "288", ls: "48", status: "Current/Upcoming", type: "upcoming" },
    "Tamil Nadu": { dates: "14 April 2026", seats: "234", ls: "39", status: "Upcoming 2026", type: "upcoming" },
    "Uttar Pradesh": { dates: "10 Feb - 07 Mar 2027", seats: "403", ls: "80", status: "Completed (2022)", type: "recent" },
    "West Bengal": { dates: "21 April - 29 April 2026", seats: "294", ls: "42", status: "Upcoming 2026", type: "upcoming" },
    "Andaman and Nicobar Islands": { dates: "19 April 2024 (LS)", seats: "0", ls: "1", status: "Upcoming", type: "upcoming" },
    "Arunachal Pradesh": { dates: "19 April 2024", seats: "60", ls: "2", status: "Recent Election", type: "recent" },
    "Assam": { dates: "March-April 2026", seats: "126", ls: "14", status: "Upcoming 2026", type: "upcoming" },
    "Chandigarh": { dates: "01 June 2024 (LS)", seats: "0", ls: "1", status: "Recent Election", type: "recent" },
    "Chhattisgarh": { dates: "Nov 2028", seats: "90", ls: "11", status: "Completed (2023)", type: "recent" },
    "Dadra and Nagar Haveli and Daman and Diu": { dates: "07 May 2024 (LS)", seats: "0", ls: "2", status: "Recent Election", type: "recent" },
    "Goa": { dates: "Feb 2027", seats: "40", ls: "2", status: "Completed (2022)", type: "recent" },
    "Haryana": { dates: "Oct 2024", seats: "90", ls: "10", status: "Current/Upcoming", type: "upcoming" },
    "Himachal Pradesh": { dates: "Nov 2027", seats: "68", ls: "4", status: "Completed (2022)", type: "recent" },
    "Jammu and Kashmir": { dates: "Sept-Oct 2024", seats: "90", ls: "5", status: "Current/Upcoming", type: "upcoming" },
    "Jharkhand": { dates: "Nov-Dec 2024", seats: "81", ls: "14", status: "Current/Upcoming", type: "upcoming" },
    "Ladakh": { dates: "20 May 2024 (LS)", seats: "0", ls: "1", status: "Recent Election", type: "recent" },
    "Lakshadweep": { dates: "19 April 2024 (LS)", seats: "0", ls: "1", status: "Recent Election", type: "recent" },
    "Manipur": { dates: "Feb-March 2027", seats: "60", ls: "2", status: "Completed (2022)", type: "recent" },
    "Meghalaya": { dates: "Feb 2028", seats: "60", ls: "2", status: "Completed (2023)", type: "recent" },
    "Mizoram": { dates: "Nov 2028", seats: "40", ls: "1", status: "Completed (2023)", type: "recent" },
    "Nagaland": { dates: "Feb 2028", seats: "60", ls: "1", status: "Completed (2023)", type: "recent" },
    "Odisha": { dates: "May-June 2024", seats: "147", ls: "21", status: "Recent Election", type: "recent" },
    "Puducherry": { dates: "April 2026", seats: "30", ls: "1", status: "Upcoming 2026", type: "upcoming" },
    "Punjab": { dates: "Feb 2027", seats: "117", ls: "13", status: "Completed (2022)", type: "recent" },
    "Rajasthan": { dates: "Nov 2028", seats: "200", ls: "25", status: "Completed (2023)", type: "recent" },
    "Sikkim": { dates: "19 April 2024", seats: "32", ls: "1", status: "Recent Election", type: "recent" },
    "Telangana": { dates: "Nov 2028", seats: "119", ls: "17", status: "Completed (2023)", type: "recent" },
    "Tripura": { dates: "Feb 2028", seats: "60", ls: "2", status: "Completed (2023)", type: "recent" },
    "Uttarakhand": { dates: "Feb 2027", seats: "70", ls: "5", status: "Completed (2022)", type: "recent" }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Navigation Toggle ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (mobileToggle) {
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- 2. Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's a stats counter, trigger animation
                if (entry.target.classList.contains('stats-container') || entry.target.closest('.stats-container')) {
                    triggerCounters();
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
    
    // Also trigger stats specifically if needed
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        revealObserver.observe(statsContainer);
    }

    // --- 3. Animated Counters ---
    let countersTriggered = false;
    function triggerCounters() {
        if (countersTriggered) return;
        countersTriggered = true;
        
        const counters = document.querySelectorAll('.stat-value');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target + suffix;
                }
            };
            
            updateCounter();
        });
    }

    // --- 4. Interactive State Selector Logic ---
    const stateSelect = document.getElementById('state-select');
    const stateInfoPanel = document.getElementById('state-info-panel');
    const statePlaceholder = document.getElementById('state-placeholder');
    
    // Initialize Select2 Auto-Complete
    if ($ && $('#state-select').length) {
        $('#state-select').select2({
            placeholder: "-- Search or Choose your State --",
            width: '100%',
            dropdownAutoWidth: true
        });
    }
    
    const stName = document.getElementById('st-name');
    const stStatus = document.getElementById('st-status');
    const stDates = document.getElementById('st-dates');
    const stSeats = document.getElementById('st-seats');
    const stLs = document.getElementById('st-ls');

    if (stateSelect) {
        // Use jQuery listener for select2 events
        $('#state-select').on('select2:select', function (e) {
            const selectedState = e.params.data.id;
            const data = stateElectionData[selectedState];

            if (data) {
                // Hide placeholder, show panel
                statePlaceholder.style.display = 'none';
                stateInfoPanel.style.display = 'block';
                
                // Update text
                stName.innerText = selectedState;
                stDates.innerText = data.dates;
                stSeats.innerText = data.seats + " Constituencies";
                stLs.innerText = data.ls + " Members";
                
                // Update badge
                stStatus.innerText = data.status;
                stStatus.className = 'st-badge ' + data.type;
                
                // Randomize active steps in timeline for visual effect
                const steps = document.querySelectorAll('.st-step');
                steps.forEach(s => s.classList.remove('active'));
                
                if (data.type === 'recent') {
                    steps[0].classList.add('active');
                    steps[1].classList.add('active');
                    steps[2].classList.add('active');
                    steps[3].classList.add('active');
                } else {
                    steps[0].classList.add('active');
                }
            }
        });
    }



    // --- 5. FAQ Accordion ---
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            this.classList.toggle('active');
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
            
            accordionBtns.forEach(otherBtn => {
                if (otherBtn !== this && otherBtn.classList.contains('active')) {
                    otherBtn.classList.remove('active');
                    otherBtn.nextElementSibling.style.maxHeight = null;
                }
            });
        });
    });

    // --- 6. Interactive Quiz Logic (Indian Context) ---
    const quizData = [
        {
            question: "Who conducts the Lok Sabha and Vidhan Sabha elections in India?",
            options: [
                "The Supreme Court of India",
                "Election Commission of India (ECI)",
                "The Prime Minister's Office",
                "State Election Commissions"
            ],
            correct: 1 // Index 1
        },
        {
            question: "What does EVM stand for?",
            options: [
                "Election Voting Module",
                "Electronic Vote Mechanism",
                "Electronic Voting Machine",
                "Electoral Validator Machine"
            ],
            correct: 2
        },
        {
            question: "How many members are directly elected in the Lok Sabha?",
            options: [
                "250",
                "543",
                "300",
                "403"
            ],
            correct: 1
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const progressText = document.getElementById('quiz-progress');
    const quizBody = document.getElementById('quiz-body');

    function loadQuestion() {
        if (!optionsContainer) return;
        
        nextBtn.disabled = true;
        optionsContainer.innerHTML = '';
        
        const qData = quizData[currentQuestionIndex];
        questionText.innerText = qData.question;
        progressText.innerText = `${currentQuestionIndex + 1} / ${quizData.length}`;
        
        qData.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');
            btn.innerText = opt;
            btn.addEventListener('click', () => selectOption(index, btn));
            optionsContainer.appendChild(btn);
        });
    }

    function selectOption(selectedIndex, btnElement) {
        const allBtns = optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(btn => btn.disabled = true);
        
        const qData = quizData[currentQuestionIndex];
        
        if (selectedIndex === qData.correct) {
            btnElement.classList.add('correct');
            score++;
        } else {
            btnElement.classList.add('wrong');
            allBtns[qData.correct].classList.add('correct');
        }
        
        nextBtn.disabled = false;
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                showResults();
            }
        });
    }

    function showResults() {
        quizBody.innerHTML = `
            <div class="text-center">
                <i class="fa-solid fa-trophy" style="font-size: 3rem; color: #f59e0b; margin-bottom: 1rem;"></i>
                <h3>Quiz Completed!</h3>
                <p style="font-size: 1.2rem; margin-bottom: 1rem;">You scored ${score} out of ${quizData.length}.</p>
                <button class="btn btn-primary" style="margin-top: 2rem;" onclick="location.reload()">Retake Quiz</button>
            </div>
        `;
        nextBtn.style.display = 'none';
        progressText.innerText = "Done";
    }

    if (questionText) {
        loadQuestion();
    }
});
