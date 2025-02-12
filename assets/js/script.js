const steps = [
    {
        step: 1,
        message: "In a far far kingdom, once lived a princess.",
        image: "https://media.giphy.com/media/l4oZEcyJoTg41Zw4hW/giphy.gif?cid=790b7611vsy76gzf3iml43bxaeyrdy8j2wuqert927mhtwch&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    },
    {
        step: 2,
        message: "This princess was known by all the kingdom as the most gracious creature that had ever walked the land.",
        image: "assets/img/IMG_2021.JPEG",
        width: "500px"
    },
    {
        step: 3,
        message: "To protect her, her father, a malicious king, kept her captive in a dungeon.",
        image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXh1a2dpNTN1dXM1MGpydWg3OGMxaDJqcXQzN3ByYXE2MjI1MTkzbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0G16QOkzZGeXB3Og/giphy.gif"
    },
    {
        step: 4,
        message: "Many knights tried in vain to save her from her torments but every single one of them failed (miserably).",
        image: "https://media.giphy.com/media/3XxGFZSJvOWHI5o9pc/giphy.gif?cid=790b761168aqa9k3ou2mr4yip25n59kzkyidhefe8tsswg7k&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    },
    {
        step: 5,
        message: "That is until…",
        image: "https://media.giphy.com/media/oYtVHSxngR3lC/giphy.gif?cid=790b76114af2j34aulkjg0xej42cnilspdrtk8dlsy3g8j6o&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    },
    {
        step: 6,
        message: "A samouraï arrived in the kingdom. Determined, with his undescribable force, to save the princess.",
        image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm9qbHo3Z2EwMXZoYmNtd29tanVmZXFuNXNkN3J1bzJoYmJhNjJsYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jzHFPlw89eTqU/giphy.gif"
    },
    {
        step: 7,
        message: "He was known as the strongest, the smartest, the most handsome and most importantly, the most humble of all.",
        image: "assets/img/IMG_7219.JPEG",
        width: "500px"
    },
    {
        step: 8,
        message: "With a single jump, he reached the window of the dungeon, something noone else has been able to do before.",
        image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTg1b3E0ZTk2Z2MyMWw4MGM2Y2R4N2IyajRnY2RqYTVuZ2JoNjJiaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AUYhIMdGrg23e/giphy.gif"
    },
    {
        step: 9,
        message: "The princess, amazed by his strength, fell in love immediately and thanked him for saving her.",
        image: "assets/img/IMG_1813.JPEG",
        width: "500px"
    },
    {
        step: 10,
        message: "The samouraï, who had only one goal, then asked her the most important question of all time. He said:",
        image: ""
    },
    {
        step: 11,
        message: "Will you be my valentine baby girl?",
        image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWV0d3Y1dWg1NjYzZHY3M2FpY3diNXQ1cnpqYmZmOTVrYWcydjdkNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5uALZbY4nMHGU/giphy.gif"
    },
    {
        step: 12,
        choice: true,
        message: "Now, princess you can only respond with one answer. Feb 14th 2025 is rapidly coming and your samouraï, Kevin, is eager to know the answser. What will it be?",
        image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5lenZyZHI5OXM2eW95b3pmMG40cWVrMDhtNjVuM3A4dGNxa2g2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif"
    },
];

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Mmmh...",
    "Just think about it!",
    "If you say no, you should review your decision making process...",
    "Come on...",
    "Just say yes to life!",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

let currentStep = 1;

function handleRightArrowClick() {
    if (currentStep >= steps.length)
        return;

    currentStep++;
    updateContent(currentStep);
}

function handleLeftArrowClick() {
    if (currentStep === 1)
        return;

    currentStep--;
    updateContent(currentStep);
}

function updateContent(currentStep) {
    const step = steps.find(step => step.step === currentStep);
    const message = document.querySelector('#message');
    const image = document.querySelector('#image');

    message.textContent = step.message;
    image.src = step.image;

    if (step.width)
        image.style.width = step.width;

    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.style.display = step.choice ? "block" : "none";

    const arrowLeft = document.querySelector('#arrow-left');
    arrowLeft.style.opacity = currentStep === 1 ? 0 : 1;

    const arrowRight = document.querySelector('#arrow-right');
    arrowRight.style.opacity = currentStep >= steps.length ? 0 : 1;
}

updateContent(1);