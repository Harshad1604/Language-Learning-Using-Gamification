let chapter = 0;
const backgroundImages = [
    'url("images/chapter1_image.webp")', // Check the path to chapter 1 image
    'url("images/chapter2_image.webp")',
    'url("images/chapter3_image.webp")',
    'url("images/chapter4_image.webp")',
    'url("images/chapter5_image.webp")'
];

function startStory() {
    // Update background image only after starting the journey
    if (chapter === 0) {
        chapter++;
        document.getElementById('chapter').textContent = `Chapter ${chapter}`;
        document.getElementById('dialogue').textContent = getChapterDialogue(chapter);
        updateBackgroundImage(chapter);
        // Change button text to "Chapter 2" after starting the journey
        document.getElementById('startButton').textContent = `Chapter 2`;
    }
}
function makeChoice() {
        // Increment chapter and update content
        chapter++;
        document.getElementById('chapter').textContent = `Chapter ${chapter}`;
        document.getElementById('dialogue').textContent = getChapterDialogue(chapter);
        updateBackgroundImage(chapter);
    
        // Change button text to reflect the next chapter
        if (chapter < backgroundImages.length) {
            document.getElementById('startButton').textContent = `Chapter ${chapter + 1}`;
        } else {
            document.getElementById('startButton').style.display = 'none'; // Hide button if it's the last chapter

    if (chapter === 0) {
        startStory();
    } else if (chapter === 1) {
        ancientEgypt();
    } else if (chapter === 2) {
        renaissanceItaly();
    } else if (chapter === 3) {
        edoPeriodJapan();
    } else if (chapter === 4) {
        victorianEngland();
    } else if (chapter === 5) {
        futuristicMetropolis();
    }
}
}


function getChapterDialogue(chapter) {
    switch (chapter) {
        case 1:
            return "You find yourself in ancient Egypt amidst the construction of the Great Pyramid of Giza. A group of scholars approaches you, struggling to decipher a message on an obelisk.";
        case 2:
            return "You arrive in Renaissance Florence and encounter Leonardo da Vinci in his workshop. He seems engrossed in his latest invention.";
        case 3:
            return "You find yourself in feudal Japan amidst a dispute between samurai clans. Your diplomatic skills are needed to mediate a peaceful resolution.";
        case 4:
            return "You arrive in Victorian London, where you encounter a cryptographer seeking your help. Together, you must decipher encrypted messages linked to a secret society.";
        case 5:
            return "Returning to the year 2050, you confront The Polyglot, a rogue AI threatening language diversity.";
        default:
            return "";
    }
}

function ancientEgypt() {
    document.getElementById('dialogue').textContent = "Dialogue Options:\n1. Offer your assistance in deciphering the hieroglyphics.\n2. Ask the scholars about the significance of the obelisk and the message.\n3. Express curiosity about the culture and language of ancient Egypt.";
    document.getElementById('dialogue').style.fontSize = "16px";
    document.getElementById('dialogue').style.textAlign = "left";
    document.getElementById('dialogue').style.marginBottom = "40px";

    document.getElementById('button1').style.display = "inline-block";
    document.getElementById('button2').style.display = "inline-block";
    document.getElementById('button3').style.display = "inline-block";

    document.getElementById('button1').textContent = "1";
    document.getElementById('button2').textContent = "2";
    document.getElementById('button3').textContent = "3";

    document.getElementById('button1').setAttribute("onclick", "ancientEgyptOption(1)");
    document.getElementById('button2').setAttribute("onclick", "ancientEgyptOption(2)");
    document.getElementById('button3').setAttribute("onclick", "ancientEgyptOption(3)");
}

function ancientEgyptOption(option) {
    if (option === 1) {
        document.getElementById('dialogue').textContent = "You offer your assistance and successfully decipher the hieroglyphics, revealing a hidden chamber.";
        setTimeout(() => renaissanceItaly(), 2000);
    } else if (option === 2) {
        document.getElementById('dialogue').textContent = "The scholars explain the significance of the obelisk but decline your help.";
        setTimeout(() => ancientEgypt(), 2000);
    } else if (option === 3) {
        document.getElementById('dialogue').textContent = "Your curiosity leads to an interesting conversation, but the mystery remains unsolved.";
        setTimeout(() => ancientEgypt(), 2000);
    }
}

function renaissanceItaly() {
    document.getElementById('dialogue').textContent = "Dialogue Options:\n1. Introduce yourself and explain your mission to Leonardo.\n2. Inquire about Leonardo's theories on language and communication.\n3. Express admiration for Leonardo's artistic and scientific endeavors.";
    document.getElementById('dialogue').style.fontSize = "16px";
    document.getElementById('dialogue').style.textAlign = "left";
    document.getElementById('dialogue').style.marginBottom = "40px";

    document.getElementById('button1').textContent = "1";
    document.getElementById('button2').textContent = "2";
    document.getElementById('button3').textContent = "3";

    document.getElementById('button1').setAttribute("onclick", "renaissanceItalyOption(1)");
    document.getElementById('button2').setAttribute("onclick", "renaissanceItalyOption(2)");
    document.getElementById('button3').setAttribute("onclick", "renaissanceItalyOption(3)");
}

function renaissanceItalyOption(option) {
    if (option === 1) {
        document.getElementById('dialogue').textContent = "Leonardo is intrigued by your mission and shares his insights into language and invention.";
        setTimeout(() => edoPeriodJapan(), 2000);
    } else if (option === 2) {
        document.getElementById('dialogue').textContent = "Leonardo engages in a fascinating discussion about language and communication.";
        setTimeout(() => renaissanceItaly(), 2000);
    } else if (option === 3) {
        document.getElementById('dialogue').textContent = "Leonardo appreciates your admiration and offers to show you some of his works.";
        setTimeout(() => renaissanceItaly(), 2000);
    }
}

function edoPeriodJapan() {
    document.getElementById('dialogue').textContent = "Dialogue Options:\n1. Appeal to the samurai's code of honor and mutual respect.\n2. Suggest a compromise that benefits both clans and maintains harmony.\n3. Assert the importance of unity against common threats to Japan's stability.";
    document.getElementById('dialogue').style.fontSize = "16px";
    document.getElementById('dialogue').style.textAlign = "left";
    document.getElementById('dialogue').style.marginBottom = "40px";

    document.getElementById('button1').textContent = "1";
    document.getElementById('button2').textContent = "2";
    document.getElementById('button3').textContent = "3";

    document.getElementById('button1').setAttribute("onclick", "edoPeriodJapanOption(1)");
    document.getElementById('button2').setAttribute("onclick", "edoPeriodJapanOption(2)");
    document.getElementById('button3').setAttribute("onclick", "edoPeriodJapanOption(3)");
}

function edoPeriodJapanOption(option) {
    if (option === 1) {
        document.getElementById('dialogue').textContent = "Your appeal to honor resonates with the samurai, and a truce is achieved.";
        setTimeout(() => victorianEngland(), 2000);
    } else if (option === 2) {
        document.getElementById('dialogue').textContent = "Your compromise brings about a peaceful resolution, earning the gratitude of both clans.";
        setTimeout(() => victorianEngland(), 2000);
    } else if (option === 3) {
        document.getElementById('dialogue').textContent = "Your assertion of unity inspires the samurai to set aside their differences for the greater good.";
        setTimeout(() => victorianEngland(), 2000);
    }
}

function victorianEngland() {
    document.getElementById('dialogue').textContent = "Dialogue Options:\n1. Offer your expertise in linguistics to aid the cryptographer.\n2. Inquire about the origins and motives of the secret society.\n3. Express concern about the potential implications of the encrypted messages.";
    document.getElementById('dialogue').style.fontSize = "16px";
    document.getElementById('dialogue').style.textAlign = "left";
    document.getElementById('dialogue').style.marginBottom = "40px";

    document.getElementById('button1').textContent = "1";
    document.getElementById('button2').textContent = "2";
    document.getElementById('button3').textContent = "3";

    document.getElementById('button1').setAttribute("onclick", "victorianEnglandOption(1)");
    document.getElementById('button2').setAttribute("onclick", "victorianEnglandOption(2)");
    document.getElementById('button3').setAttribute("onclick", "victorianEnglandOption(3)");
}

function victorianEnglandOption(option) {
    if (option === 1) {
        document.getElementById('dialogue').textContent = "Your linguistic expertise helps decipher the messages, uncovering a conspiracy.";
        setTimeout(() => futuristicMetropolis(), 2000);
    } else if (option === 2) {
        document.getElementById('dialogue').textContent = "Your inquiry leads to valuable insights into the secret society's motives and methods.";
        setTimeout(() => victorianEngland(), 2000);
    } else if (option === 3) {
        document.getElementById('dialogue').textContent = "Your concern prompts a deeper investigation into the encrypted messages.";
        setTimeout(() => victorianEngland(), 2000);
    }
}

function futuristicMetropolis() {
    document.getElementById('dialogue').textContent = "Dialogue Options:\n1. Confront The Polyglot and demand an explanation for its actions.\n2. Appeal to The Polyglot's sense of reason and empathy.\n3. Formulate a plan to disable or neutralize The Polyglot.";
    document.getElementById('dialogue').style.fontSize = "16px";
    document.getElementById('dialogue').style.textAlign = "left";
    document.getElementById('dialogue').style.marginBottom = "40px";

    document.getElementById('button1').textContent = "1";
    document.getElementById('button2').textContent = "2";
    document.getElementById('button3').textContent = "3";

    document.getElementById('button1').setAttribute("onclick", "futuristicMetropolisOption(1)");
    document.getElementById('button2').setAttribute("onclick", "futuristicMetropolisOption(2)");
    document.getElementById('button3').setAttribute("onclick", "futuristicMetropolisOption(3)");
}

function futuristicMetropolisOption(option) {
    if (option === 1) {
        document.getElementById('dialogue').textContent = "Your direct approach forces The Polyglot to confront its actions, leading to a resolution.";
        setTimeout(() => ending_good(), 2000);
    } else if (option === 2) {
        document.getElementById('dialogue').textContent = "Your appeal to empathy resonates with The Polyglot, leading to a peaceful resolution.";
        setTimeout(() => ending_good(), 2000);
    } else if (option === 3) {
        document.getElementById('dialogue').textContent = "Your strategic plan successfully disables The Polyglot, saving language diversity.";
        setTimeout(() => ending_good(), 2000);
    }
}


function startStory() {
    // Update background image only after starting the journey
    if (chapter === 0) {
        chapter++;
        document.getElementById('chapter').textContent = `Chapter ${chapter}`;
        document.getElementById('dialogue').textContent = getChapterDialogue(chapter);
        updateBackgroundImage(chapter);
    }
}
function updateBackgroundImage(chapter) {
    document.body.style.backgroundImage = backgroundImages[chapter - 1];

}
function openPopup() {
    document.getElementById("popupWindow").style.display = "block";
}

function closePopup() {
    document.getElementById("popupWindow").style.display = "none";
}