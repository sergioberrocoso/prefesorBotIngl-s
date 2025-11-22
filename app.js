// English Learning Bot - Main Application
// Zero-cost, browser-based English learning for graphic arts business

// ============================================================
// DATA: Vocabulary, Email Templates, and Conversation Scenarios
// ============================================================

const vocabularyData = {
    printing: [
        { word: "Offset printing", translation: "Impresión offset", example: "We use offset printing for large orders." },
        { word: "Lithography", translation: "Litografía", example: "Our lithography services are top quality." },
        { word: "Print run", translation: "Tirada", example: "What's the print run for this order?" },
        { word: "Color separation", translation: "Separación de color", example: "We need color separation for this design." },
        { word: "Proof", translation: "Prueba de imprenta", example: "Please approve the proof before printing." },
        { word: "Bleed", translation: "Sangre", example: "Add 3mm bleed to the design." },
        { word: "Binding", translation: "Encuadernación", example: "What type of binding do you prefer?" },
        { word: "Plate", translation: "Plancha", example: "The printing plates are ready." }
    ],
    materials: [
        { word: "Paper stock", translation: "Papel (tipo)", example: "Which paper stock would you like?" },
        { word: "Cardboard", translation: "Cartón", example: "We print on thick cardboard too." },
        { word: "Ink", translation: "Tinta", example: "We use eco-friendly ink." },
        { word: "Coating", translation: "Recubrimiento", example: "Do you want glossy coating?" },
        { word: "Laminate", translation: "Laminado", example: "The laminate protects the print." },
        { word: "Varnish", translation: "Barniz", example: "UV varnish adds a nice finish." },
        { word: "Substrate", translation: "Sustrato", example: "This substrate is perfect for outdoor use." },
        { word: "Matte finish", translation: "Acabado mate", example: "The client prefers a matte finish." }
    ],
    processes: [
        { word: "Die cutting", translation: "Troquelado", example: "Die cutting costs extra." },
        { word: "Embossing", translation: "Estampado en relieve", example: "Embossing adds a luxury feel." },
        { word: "Perforation", translation: "Perforación", example: "We can add perforation to the tickets." },
        { word: "Folding", translation: "Plegado", example: "The folding must be precise." },
        { word: "Scoring", translation: "Hendido", example: "Scoring helps with clean folds." },
        { word: "Collating", translation: "Intercalar", example: "Collating is done automatically." },
        { word: "Trimming", translation: "Recorte", example: "Final trimming to exact size." },
        { word: "Quality control", translation: "Control de calidad", example: "All orders go through quality control." }
    ],
    business: [
        { word: "Quote", translation: "Presupuesto", example: "Could you send me a quote?" },
        { word: "Purchase order", translation: "Orden de compra", example: "Please confirm the purchase order." },
        { word: "Deadline", translation: "Fecha límite", example: "What's the deadline for this project?" },
        { word: "Delivery", translation: "Entrega", example: "Delivery is scheduled for Monday." },
        { word: "Invoice", translation: "Factura", example: "The invoice is attached." },
        { word: "Unit price", translation: "Precio unitario", example: "What's the unit price for 1000 copies?" },
        { word: "Bulk discount", translation: "Descuento por volumen", example: "We offer bulk discounts." },
        { word: "Payment terms", translation: "Condiciones de pago", example: "Our payment terms are 30 days net." }
    ]
};

const emailTemplates = {
    inquiry: {
        title: "Price Inquiry Email",
        template: `Subject: Price Inquiry for Printing Services

Dear [Supplier Name],

I hope this email finds you well.

I am writing to inquire about your printing services. We are looking for offset printing for a project with the following specifications:

- Quantity: [number] units
- Format: [size]
- Paper stock: [type]
- Colors: [number]
- Delivery deadline: [date]

Could you please provide us with a quote including delivery costs?

I look forward to your response.

Best regards,
[Your Name]
[Your Company]`,
        tips: [
            "Start with a polite greeting",
            "Be specific about quantities and specifications",
            "Ask for a quote clearly",
            "Mention your deadline",
            "End professionally"
        ]
    },
    order: {
        title: "Purchase Order Email",
        template: `Subject: Purchase Order #[Order Number]

Dear [Supplier Name],

Following our previous discussions, I would like to place an order with the following details:

Order Number: [PO-XXXXX]
Item: [Description]
Quantity: [number] units
Unit Price: [price]
Total Amount: [total]

Specifications:
- Format: [details]
- Material: [details]
- Finishing: [details]

Delivery Address: [address]
Required Delivery Date: [date]

Please confirm receipt of this order and the estimated delivery date.

Thank you for your service.

Best regards,
[Your Name]
[Your Company]`,
        tips: [
            "Include a clear order number",
            "List all specifications",
            "State quantities and prices",
            "Confirm delivery details",
            "Request confirmation"
        ]
    },
    budget: {
        title: "Budget Request Email",
        template: `Subject: Request for Quotation - [Project Name]

Dear [Supplier Name],

We are planning a new project and would like to request a detailed quotation.

Project Details:
- Project: [name]
- Type of work: [lithography/printing details]
- Quantity: [number]
- Paper: [specifications]
- Colors: [CMYK/Pantone]
- Finishing: [laminate/varnish/etc]

Could you please provide:
1. Unit price for different quantities
2. Setup costs
3. Delivery timeline
4. Payment terms

Our budget deadline is [date]. We would appreciate receiving your quote before then.

Thank you for your attention.

Best regards,
[Your Name]
[Your Company]`,
        tips: [
            "Be detailed about project requirements",
            "Ask for itemized pricing",
            "Mention your budget deadline",
            "Request payment terms",
            "Show you're comparing options professionally"
        ]
    },
    followup: {
        title: "Follow-up Email",
        template: `Subject: Follow-up: [Previous Subject]

Dear [Name],

I hope you are well.

I am writing to follow up on my previous email from [date] regarding [topic].

I understand you may be busy, but I would appreciate any update you can provide as we need to make a decision by [deadline].

If you need any additional information from my side, please let me know.

Thank you for your time.

Best regards,
[Your Name]
[Your Company]`,
        tips: [
            "Reference the previous email",
            "Be polite and understanding",
            "Mention any time constraints",
            "Offer to provide more information",
            "Keep it brief"
        ]
    }
};

const conversationScenarios = {
    greeting: {
        title: "Greeting Visitors",
        prompts: [
            "Hello! Welcome to our printing facility. How can I help you today?",
            "Good morning! Are you here for a meeting or would you like to see our services?",
            "Have you visited our facility before?",
            "Would you like a tour of our lithography department?",
            "Great! Let me show you around. We specialize in offset printing.",
            "Thank you for visiting! Here's my card if you have any questions."
        ],
        responses: [
            "Good morning! I'm here to...",
            "Yes, I have an appointment with...",
            "I'd love to see your facilities",
            "What services do you offer?",
            "Thank you, that would be great!"
        ]
    },
    phone: {
        title: "Phone Calls",
        prompts: [
            "Good afternoon, [Company Name], this is [Your Name]. How may I help you?",
            "Could I have your name and company please?",
            "Let me check that information for you.",
            "I can send you a quote by email. What's your email address?",
            "Would next Tuesday work for you?",
            "Thank you for calling. Have a great day!"
        ],
        responses: [
            "Hello, I'm calling about...",
            "My name is... from...",
            "Could you check the status of...?",
            "When can you deliver?",
            "That sounds perfect, thank you!"
        ]
    },
    negotiation: {
        title: "Price Negotiation",
        prompts: [
            "Our standard price for that quantity is [X] per unit.",
            "For larger orders, we can offer a better price.",
            "What quantity were you thinking of?",
            "If you increase the order to 5000 units, we can reduce the price by 15%.",
            "Our payment terms are usually 30 days net. Is that acceptable?",
            "Shall I prepare a formal quote with these terms?"
        ],
        responses: [
            "What's your best price for...?",
            "That's above our budget. Can you do better?",
            "What if we order... units instead?",
            "Can you include delivery in that price?",
            "We need better payment terms..."
        ]
    },
    informal: {
        title: "Informal Chat",
        prompts: [
            "So, how's business going for you?",
            "Did you see the trade show last month?",
            "The weather's been great this week, hasn't it?",
            "Are you going to the industry conference next month?",
            "How long have you been in the printing business?",
            "Coffee? We have a machine right here."
        ],
        responses: [
            "Yes, business is good. How about you?",
            "I missed it unfortunately. Was it good?",
            "Yes, perfect weather for...",
            "I'm planning to go, are you?",
            "About... years now.",
            "That'd be great, thank you!"
        ]
    }
};

// ============================================================
// STATE MANAGEMENT
// ============================================================

let appState = {
    currentSection: 'vocabulary',
    currentCategory: null,
    currentEmailType: null,
    currentScenario: null,
    currentConversationIndex: 0,
    isListening: false,
    progress: {
        vocabLearned: new Set(),
        emailsPracticed: 0,
        conversationsCompleted: 0
    }
};

// Speech Recognition and Synthesis
let recognition = null;
let synthesis = window.speechSynthesis;

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadProgress();
    setupEventListeners();
    initializeSpeechRecognition();
    
    // Show initial vocabulary
    showVocabulary('printing');
});

function initializeApp() {
    console.log('English Learning Bot initialized');
}

function loadProgress() {
    const saved = localStorage.getItem('englishBotProgress');
    if (saved) {
        const data = JSON.parse(saved);
        appState.progress.vocabLearned = new Set(data.vocabLearned || []);
        appState.progress.emailsPracticed = data.emailsPracticed || 0;
        appState.progress.conversationsCompleted = data.conversationsCompleted || 0;
    }
    updateProgressDisplay();
}

function saveProgress() {
    const data = {
        vocabLearned: Array.from(appState.progress.vocabLearned),
        emailsPracticed: appState.progress.emailsPracticed,
        conversationsCompleted: appState.progress.conversationsCompleted
    };
    localStorage.setItem('englishBotProgress', JSON.stringify(data));
    updateProgressDisplay();
}

function updateProgressDisplay() {
    document.getElementById('vocab-count').textContent = appState.progress.vocabLearned.size;
    document.getElementById('email-count').textContent = appState.progress.emailsPracticed;
    document.getElementById('conv-count').textContent = appState.progress.conversationsCompleted;
}

// ============================================================
// EVENT LISTENERS
// ============================================================

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchSection(e.target.dataset.section);
        });
    });
    
    // Vocabulary
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            showVocabulary(e.target.dataset.category);
        });
    });
    
    // Email
    document.querySelectorAll('.email-type-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            showEmailTemplate(e.target.dataset.type);
        });
    });
    
    document.getElementById('check-email-btn')?.addEventListener('click', checkEmail);
    document.getElementById('speak-email-btn')?.addEventListener('click', speakEmail);
    
    // Conversation
    document.querySelectorAll('.scenario-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            startConversation(e.target.dataset.scenario);
        });
    });
    
    document.getElementById('start-listening-btn')?.addEventListener('click', startListening);
    document.getElementById('stop-listening-btn')?.addEventListener('click', stopListening);
    document.getElementById('play-prompt-btn')?.addEventListener('click', playCurrentPrompt);
    
    // Progress
    document.getElementById('reset-progress-btn')?.addEventListener('click', resetProgress);
}

function switchSection(section) {
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === section);
    });
    
    // Update sections
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.toggle('active', sec.id === section);
    });
    
    appState.currentSection = section;
}

// ============================================================
// VOCABULARY MODULE
// ============================================================

function showVocabulary(category) {
    appState.currentCategory = category;
    const container = document.getElementById('vocabulary-content');
    container.innerHTML = '';
    
    const words = vocabularyData[category];
    if (!words) return;
    
    words.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'vocab-card';
        
        const wordId = `${category}-${index}`;
        const isLearned = appState.progress.vocabLearned.has(wordId);
        
        card.innerHTML = `
            <div class="vocab-word">${item.word} ${isLearned ? '✓' : ''}</div>
            <div class="vocab-translation">${item.translation}</div>
            <div class="vocab-example">"${item.example}"</div>
            <button class="vocab-card-speaker" onclick="speakText('${item.word}. ${item.example}')">
                🔊 Listen
            </button>
        `;
        
        card.addEventListener('click', () => {
            appState.progress.vocabLearned.add(wordId);
            saveProgress();
            showVocabulary(category); // Refresh to show checkmark
        });
        
        container.appendChild(card);
    });
}

// ============================================================
// EMAIL MODULE
// ============================================================

function showEmailTemplate(type) {
    appState.currentEmailType = type;
    const template = emailTemplates[type];
    
    if (!template) return;
    
    const templateBox = document.getElementById('email-template-text');
    templateBox.textContent = template.template;
    
    // Clear previous input and feedback
    document.getElementById('email-input').value = '';
    const feedback = document.getElementById('email-feedback');
    feedback.className = 'feedback-box';
    feedback.innerHTML = '';
}

function checkEmail() {
    const input = document.getElementById('email-input').value.trim();
    const feedback = document.getElementById('email-feedback');
    
    if (!input) {
        feedback.className = 'feedback-box show warning';
        feedback.innerHTML = '<strong>⚠️ Please write an email first!</strong>';
        return;
    }
    
    const template = emailTemplates[appState.currentEmailType];
    
    // Simple checks
    const checks = {
        hasSubject: input.toLowerCase().includes('subject:'),
        hasGreeting: /dear|hello|hi/i.test(input),
        hasClosing: /regards|sincerely|best|thank you/i.test(input),
        hasEnoughContent: input.length > 100,
        hasProfessionalTone: !/hey|yeah|gonna|wanna/i.test(input)
    };
    
    const score = Object.values(checks).filter(v => v).length;
    
    let message = `<strong>Email Analysis:</strong><br><br>`;
    message += `✓ Subject line: ${checks.hasSubject ? '✓' : '✗'}<br>`;
    message += `✓ Professional greeting: ${checks.hasGreeting ? '✓' : '✗'}<br>`;
    message += `✓ Professional closing: ${checks.hasClosing ? '✓' : '✗'}<br>`;
    message += `✓ Sufficient content: ${checks.hasEnoughContent ? '✓' : '✗'}<br>`;
    message += `✓ Professional tone: ${checks.hasProfessionalTone ? '✓' : '✗'}<br><br>`;
    
    if (score >= 4) {
        feedback.className = 'feedback-box show success';
        message += `<strong>Excellent work! Your email looks professional.</strong><br><br>`;
        appState.progress.emailsPracticed++;
        saveProgress();
    } else {
        feedback.className = 'feedback-box show info';
        message += `<strong>Good effort! Review the template for improvements.</strong><br><br>`;
    }
    
    message += `<em>Tips for ${template.title}:</em><br>`;
    template.tips.forEach(tip => {
        message += `• ${tip}<br>`;
    });
    
    feedback.innerHTML = message;
}

function speakEmail() {
    const text = document.getElementById('email-input').value;
    if (text) {
        speakText(text);
    }
}

// ============================================================
// CONVERSATION MODULE
// ============================================================

function startConversation(scenario) {
    appState.currentScenario = scenario;
    appState.currentConversationIndex = 0;
    
    const display = document.getElementById('conversation-display');
    display.innerHTML = `<h3>${conversationScenarios[scenario].title}</h3>`;
    
    // Show first prompt
    setTimeout(() => {
        showNextPrompt();
    }, 500);
}

function showNextPrompt() {
    const scenario = conversationScenarios[appState.currentScenario];
    if (!scenario) return;
    
    const prompts = scenario.prompts;
    const index = appState.currentConversationIndex;
    
    if (index >= prompts.length) {
        // Conversation complete
        const display = document.getElementById('conversation-display');
        const msg = document.createElement('div');
        msg.className = 'conversation-message bot';
        msg.innerHTML = `
            <div class="message-label">🎉 Conversation Complete!</div>
            <div class="message-text">Great job! You've completed this conversation scenario.</div>
        `;
        display.appendChild(msg);
        display.scrollTop = display.scrollHeight;
        
        appState.progress.conversationsCompleted++;
        saveProgress();
        return;
    }
    
    const prompt = prompts[index];
    
    const display = document.getElementById('conversation-display');
    const msg = document.createElement('div');
    msg.className = 'conversation-message bot';
    msg.innerHTML = `
        <div class="message-label">🤖 Bot:</div>
        <div class="message-text">${prompt}</div>
    `;
    display.appendChild(msg);
    display.scrollTop = display.scrollHeight;
    
    // Speak the prompt
    speakText(prompt);
}

function playCurrentPrompt() {
    const scenario = conversationScenarios[appState.currentScenario];
    if (!scenario) return;
    
    const index = appState.currentConversationIndex;
    if (index < scenario.prompts.length) {
        speakText(scenario.prompts[index]);
    }
}

function addUserMessage(text) {
    const display = document.getElementById('conversation-display');
    const msg = document.createElement('div');
    msg.className = 'conversation-message user';
    msg.innerHTML = `
        <div class="message-label">👤 You:</div>
        <div class="message-text">${text}</div>
    `;
    display.appendChild(msg);
    display.scrollTop = display.scrollHeight;
    
    // Move to next prompt
    appState.currentConversationIndex++;
    setTimeout(() => {
        showNextPrompt();
    }, 1500);
}

// ============================================================
// SPEECH RECOGNITION & SYNTHESIS
// ============================================================

function initializeSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log('Recognized:', transcript);
            
            if (appState.currentSection === 'conversation') {
                addUserMessage(transcript);
                stopListening();
            }
        };
        
        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            const feedback = document.getElementById('speech-feedback');
            feedback.className = 'feedback-box show warning';
            feedback.innerHTML = `<strong>⚠️ Error:</strong> ${event.error}. Please try again.`;
            stopListening();
        };
        
        recognition.onend = () => {
            stopListening();
        };
    } else {
        console.warn('Speech recognition not supported');
        const feedback = document.getElementById('speech-feedback');
        if (feedback) {
            feedback.className = 'feedback-box show info';
            feedback.innerHTML = '<strong>ℹ️ Note:</strong> Speech recognition is not supported in your browser. Try Chrome or Edge.';
        }
    }
}

function startListening() {
    if (!recognition) {
        alert('Speech recognition is not available in your browser. Please use Chrome or Edge.');
        return;
    }
    
    if (!appState.currentScenario) {
        alert('Please select a conversation scenario first!');
        return;
    }
    
    appState.isListening = true;
    document.getElementById('start-listening-btn').disabled = true;
    document.getElementById('stop-listening-btn').disabled = false;
    
    const feedback = document.getElementById('speech-feedback');
    feedback.className = 'feedback-box show info';
    feedback.innerHTML = '<strong>🎤 Listening...</strong> Speak now!';
    
    try {
        recognition.start();
    } catch (e) {
        console.error('Error starting recognition:', e);
        stopListening();
    }
}

function stopListening() {
    appState.isListening = false;
    document.getElementById('start-listening-btn').disabled = false;
    document.getElementById('stop-listening-btn').disabled = true;
    
    if (recognition) {
        try {
            recognition.stop();
        } catch (e) {
            // Already stopped
        }
    }
    
    const feedback = document.getElementById('speech-feedback');
    if (feedback.innerHTML.includes('Listening')) {
        feedback.className = 'feedback-box';
        feedback.innerHTML = '';
    }
}

function speakText(text) {
    if (!synthesis) {
        console.warn('Speech synthesis not available');
        return;
    }
    
    // Cancel any ongoing speech
    synthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Slightly slower for learning
    utterance.pitch = 1;
    
    synthesis.speak(utterance);
}

// Make speakText available globally for inline onclick handlers
window.speakText = speakText;

// ============================================================
// PROGRESS MANAGEMENT
// ============================================================

function resetProgress() {
    if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
        localStorage.removeItem('englishBotProgress');
        appState.progress = {
            vocabLearned: new Set(),
            emailsPracticed: 0,
            conversationsCompleted: 0
        };
        updateProgressDisplay();
        alert('Progress has been reset!');
    }
}
