const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const resetBtn = document.getElementById("resetBtn");

// --------------------
// Events
// --------------------

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

resetBtn.addEventListener("click", resetChat);

// --------------------
// Time
// --------------------

function getTime() {

    const now = new Date();

    return now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

}

// --------------------
// Send Message
// --------------------

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") return;

    addUserMessage(message);

    userInput.value = "";

    showTyping(message);

}

// --------------------
// User Message
// --------------------

function addUserMessage(message) {

    chatBody.innerHTML += `

    <div class="message user">

        <div>

            <div class="bubble">

                ${message}

            </div>

            <div class="time">

                ${getTime()}

            </div>

        </div>

    </div>

    `;

    scrollBottom();

}

// --------------------
// Typing Animation
// --------------------

function showTyping(message){

    chatBody.innerHTML += `

    <div class="message bot" id="typingBox">

        <div class="avatar">

            🤖

        </div>

        <div class="typing">

            <span></span>

            <span></span>

            <span></span>

        </div>

    </div>

    `;

    scrollBottom();

    setTimeout(()=>{

        document.getElementById("typingBox").remove();

        botReply(message);

    },1000);

}

// --------------------
// Bot Reply
// --------------------

function botReply(message){

    message = message.toLowerCase();

    let reply = "😔 Sorry! I don't know that yet.";

    if(message.includes("hi") || message.includes("hello")){

        reply = "👋 Hello! Nice to meet you.";

    }

    else if(message.includes("about")){

        reply = "🤖 I am Nova AI created using HTML, CSS, JavaScript and Python Flask.";

    }

    else if(message.includes("project")){

        reply = "🚀 My Projects:\n\n• Mini AI ChatBot\n• Portfolio Website\n• Number Guessing Game";

    }

    else if(message.includes("skill")){

        reply = "💻 Skills:\n\n✔ HTML\n✔ CSS\n✔ JavaScript\n✔ Python\n✔ Flask\n✔ NumPy";

    }

    else if(message.includes("resume")){

        reply = "📄 Resume feature will be added soon.";

    }

    else if(message.includes("github")){

        reply = "🐙 GitHub: https://github.com/amaniyar978-maker";

    }

    else if(message.includes("linkedin")){

        reply = "💼 LinkedIn: https://www.linkedin.com/in/rev-creation-374608300/";

    }

    else if(message.includes("contact")){

        reply = "📞 Email : unikartonline78@gmail.com";

    }

    else if(message.includes("help")){

        reply = "😊 Click the quick buttons or type a keyword.";

    }

    else if(message.includes("bye")){

        reply = "❤️ Goodbye! Have a wonderful day.";

    }

    chatBody.innerHTML += `

    <div class="message bot">

        <div class="avatar">

            🤖

        </div>

        <div>

            <div class="bubble">

                ${reply.replace(/\n/g,"<br>")}

            </div>

            <div class="time">

                ${getTime()}

            </div>

        </div>

    </div>

    `;

    scrollBottom();

}

// --------------------
// Quick Reply
// --------------------

function quickReply(text){

    userInput.value = text;

    sendMessage();

}

// --------------------
// Auto Scroll
// --------------------

function scrollBottom(){

    chatBody.scrollTop = chatBody.scrollHeight;

}

// --------------------
// Reset Chat
// --------------------

function resetChat(){

chatBody.innerHTML = `

<div class="message bot">

<div class="avatar">🤖</div>

<div>

<div class="bubble">

👋 Hello Aman! Welcome to <b>Nova AI</b>.

</div>

<div class="time">

${getTime()}

</div>

</div>

</div>

<div class="message bot">

<div class="avatar">🤖</div>

<div>

<div class="bubble">

Choose any option below or type your own message.

</div>

<div class="time">

${getTime()}

</div>

</div>

</div>

<div class="quick-buttons">

<button onclick="quickReply('About Me')">About Me</button>

<button onclick="quickReply('Projects')">Projects</button>

<button onclick="quickReply('Skills')">Skills</button>

<button onclick="quickReply('Resume')">Resume</button>

<button onclick="quickReply('GitHub')">GitHub</button>

<button onclick="quickReply('LinkedIn')">LinkedIn</button>

<button onclick="quickReply('Contact')">Contact</button>

<button onclick="quickReply('Help')">Help</button>

</div>

`;

}