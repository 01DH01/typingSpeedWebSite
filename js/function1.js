const typingText = document.querySelector(".textToType p");
inputField = document.querySelector(".wrapper .input-field");
mistakes = document.querySelector(".mistakes span");
timerObj = document.querySelector(".time span b");
wpmObj = document.querySelector(".wpm span");
cpmObj = document.querySelector(".cpm span");
tryAgainB = document.querySelector("button");


let timer, maximumTime = 60, timeLeft = maximumTime
let charIndex = mstk = 0;
let isTyping = 0;

function randomParagraphsToType()
{
    let randomText = Math.floor(Math.random()*texts.length);
    typingText.innerHTML = "";
    texts[randomText].split("").forEach(span =>
    {
        let spanTag = `<span>${span}</span`;
        typingText.innerHTML +=spanTag;
    });
    document.addEventListener("keydown", ()=>inputField.focus());
    typingText.addEventListener("click", ()=>inputField.focus());
}

function inTyping()
{
    const characters = typingText.querySelectorAll("span");
    let typedChar = inputField.value.split("")[charIndex];
    if(charIndex < characters.length - 1 && timeLeft > 0)
    {
        if(!isTyping)
        {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        //when backspace is clicked, decrement character and if that character contains class "incorrect" - decrement mistake parameter. Also removes either correct or incorrect class from the character we just backspaced
        if(typedChar == null)
        {
            charIndex--;
            if(characters[charIndex].classList.contains("incorrect"))
            {
                mstk--; 
            }
            characters[charIndex].classList.remove("correct", "incorrect");
        }
        else
        {
            if(characters[charIndex].innerText === typedChar)
            {
                characters[charIndex].classList.add("correct");
            }
            else
            {
                mstk++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span=> span.classList.remove("active"));
        characters[charIndex].classList.add("active");
        mistakes.innerText = mstk;
        cpmObj.innerText = charIndex - mstk;
        const inpText = inputField.value.trim();
        const words = inpText.split(/\s+/)/filter(Boolean);
        const wordCount = words.length;
        wpmObj = wordCount;
    }
    else 
    {
        clearInterval(timer);
    }
}

// function wpmIncrement(event)
// {
//     if(event.keyCode === 32 || event.key === " ")
//     {
//         wpmObj.innerText++;
//     }
// }


function initTimer()
{
    if(timeLeft > 0)
    {
        timeLeft--;
        timerObj.innerText = timeLeft;
    }
    else
    {
        clearInterval(timer);
    }
}

//when "try again" button is clicked, all parameters resets. New paragraph is prompted.
 function startTextingAgain()
 {
     randomParagraphsToType();
     inputField.value = "";
     timeLeft = maximumTime;
     clearInterval(timer);
     charIndex = mistakes = isTyping = 0;
     cpmObj.innerText = wpmObj.innerText = 0;
     timerObj.innerText = timeLeft;
 }

randomParagraphsToType();
inputField.addEventListener("input", inTyping);
// document.addEventListener("keydown", wpmIncrement);
tryAgainB.addEventListener("click", startTextingAgain);




