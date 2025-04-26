// Questions data
const questions = [
    "Write Program to place Name,AGE and Mobile Number by using Linear Layout (vertical / Horizontal ) / Absolute Layout",
    "Write Program to display 5 Students basic information in Table form using Table Layout",
    "Write Program to create a first display screen of any search engine using Auto Complete Text View",
    "Write Program to create toggle button to display ON/OFF Bluetooth on the display Screen",
    "Write Program to show five checkboxes and toast selected checkboxes",
    "Write Program to select any one radio button from 2 radio button which are without using radio group and create Male and Female Radio Button using Radio Group and display Proper Toast",
    "Write Program to display circular Progress Bar/ show File Downloading Progress Bar",
    "Write Program to display List of subject using List view and Appropriate Toast according to selection of subject",
    "Write Program to display 15 button using Grid View",
    "Write Program to display text view using vertical scroll view",
    "Write Program to display date and time on click of \"Select Date\",\"select Time\" Button respectively",
    "Write Program to create a Activity using all lifecycle methods to display message using Log",
    "Write Program to create a text field and button\"Navigate\",when you enter \"www.google.com\" and press navigate button it should open google page.",
    "Write Program to create button \"start Dialer\",when u click on this button it should open the phone dialer",
    "Write Program to two screen ,first get number and and on second screen display \"Factorial \" of given number using intent",
    "Write Program to start WI-Fi Service",
    "Write Program to demonstrate all the system broadcast message",
    "Write Program to display the list of sensors supported by the mobile device",
    "Write Program to capture image and display it using image view",
    "Write Program to capture video using various camera methods",
    "Write Program to Turn On ,Get visible, Pair device ,Turn off Bluetooth",
    "Write Program to Rotate the image in clockwise /anticlockwise,Zoom In,ZoomOUT,FadeIn,Fade OUT",
    "Write a program to create simple database in SQLite",
    "Write Program to send and receive SMS,make use of following GUI",
    "Write Program to send Mail make use appropriate GUI"
];

// Function to show toast message
function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = isError ? 'toast error-toast' : 'toast';
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showToast('Code copied to clipboard!');
        } else {
            showToast('Failed to copy code. Please try again.', true);
        }
    } catch (err) {
        showToast('Failed to copy code. Please try again.', true);
    }
    
    document.body.removeChild(textarea);
}

// Function to handle code copying
function copyCode(questionNumber, type) {
    const questionCode = codeContent[questionNumber];
    if (questionCode && questionCode[type]) {
        copyToClipboard(questionCode[type]);
    } else {
        showToast('Code not available for this question/type', true);
    }
}

// Function to create question cards
function createQuestionCards() {
    const container = document.getElementById('questions-container');
    questions.forEach((question, index) => {
        const questionNumber = index + 1;
        const card = document.createElement('div');
        card.className = 'question-card';
        
        let buttonHtml = '';
        
        // Special case for Question 15
        if (questionNumber === 15) {
            buttonHtml = `
                ${codeContent[questionNumber].Java1 ? 
                    `<button class="code-button" onclick="copyCode(${questionNumber}, 'Java1')">Java 1</button>` : ''}
                ${codeContent[questionNumber].Java2 ? 
                    `<button class="code-button" onclick="copyCode(${questionNumber}, 'Java2')">Java 2</button>` : ''}
                ${codeContent[questionNumber].XML1 ? 
                    `<button class="code-button" onclick="copyCode(${questionNumber}, 'XML1')">XML 1</button>` : ''}
                ${codeContent[questionNumber].XML2 ? 
                    `<button class="code-button" onclick="copyCode(${questionNumber}, 'XML2')">XML 2</button>` : ''}
            `;
        } else {
            buttonHtml = `
                ${codeContent[questionNumber].Java ? 
                    `<button class="code-button" onclick="copyCode(${questionNumber}, 'Java')">Java</button>` : ''}
                ${codeContent[questionNumber].XML ? 
                    `<button class="code-button" onclick="copyCode(${questionNumber}, 'XML')">XML</button>` : ''}
                ${codeContent[questionNumber].Permissions ? 
                    `<button class="code-button" onclick="copyCode(${questionNumber}, 'Permissions')">Permissions</button>` : ''}
                ${questionNumber === 16 ? 
                    `<button class="code-button" onclick="copyCode(${questionNumber}, 'Service')">Service</button>` : ''}
                ${questionNumber === 22 ? 
                    `<button class="code-button" onclick="copyCode(${questionNumber}, 'Animations')">Animations</button>` : ''}
                ${questionNumber === 23 ? 
                    `<button class="code-button" onclick="copyCode(${questionNumber}, 'DBHelper')">DBHelper</button>` : ''}
                ${questionNumber === 24 ? 
                    `<button class="code-button" onclick="copyCode(${questionNumber}, 'SMSReceiver')">SMSReceiver</button>` : ''}
            `;
        }
        
        card.innerHTML = `
            <div class="question-number">Question ${questionNumber}</div>
            <div class="question-text">${question}</div>
            <div class="code-buttons">
                ${buttonHtml}
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Initialize the page
createQuestionCards(); 