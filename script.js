function handleYes() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="content">
            <h1>💖 Thank You! 💖</h1>
            <p>
                I can't promise to make you smile every single day, but I will always stand by your side, 
                weather every storm with you, and celebrate your joy every single day.
            </p>
            <h2>You mean the world to me. 🌎❤️</h2>
            <button class="back-button" onclick="goBack()">Go Back</button>
        </div>
    `;
}

function handleNo() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="content">
            <h1>💔 I Understand 💔</h1>
            <p>
                I respect your decision. I will wait, and if you ever change your mind, I’ll still be here, ready to hold your hand.  
            </p>
            <h2>You’ll always have a special place in my heart. ❤️</h2>
            <button class="back-button" onclick="goBack()">Go Back</button>
        </div>
    `;
}

function goBack() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="content">
            <h1>Will You Be Mine? 💖</h1>
            <p>
                I’ve been meaning to tell you this for a while now, and I know I should’ve said it sooner.  
                But I didn’t want to risk complicating things between us.
            </p>
            <p>
                The truth is, I’ve fallen for you. All I do know is that I can’t stop thinking about you.  
                I’ve tried to push it aside, but it’s impossible. You’ve taken over my mind, and I can’t ignore it anymore.  
                So, before someone else sweeps you off your feet, let me claim the title...
            </p>
            <h2>💌 Please be mine?</h2>
            <div class="button-container">
                <button class="yes-button" onclick="handleYes()">Yes, I Will! ❤️</button>
                <button class="no-button" onclick="handleNo()">No, Sorry 💔</button>
            </div>
        </div>
    `;
}