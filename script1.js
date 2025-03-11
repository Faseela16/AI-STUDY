document.addEventListener("DOMContentLoaded", () => {
    addBotMessage("Hello! You can ask me about Math, Science, History, Programming (Java, Python, C, C++), or English.");
});

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    addUserMessage(userInput);
    document.getElementById("user-input").value = "";

    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        addBotMessage(botResponse);
    }, 500);
}

function addUserMessage(message) {
    let chatBox = document.getElementById("chat-box");
    let messageElement = document.createElement("div");
    messageElement.className = "message user-message";
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    let chatBox = document.getElementById("chat-box");
    let messageElement = document.createElement("div");
    messageElement.className = "message bot-message";
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    let lowerInput = userInput.toLowerCase();

    // Math responses
    if (lowerInput.includes("math")) {
        return "Math is the study of numbers, shapes, and patterns. Do you need help with algebra, calculus, or geometry?";
    } else if (lowerInput.includes("2 + 2")) {
        return "2 + 2 = 4";
    } else if (lowerInput.includes("derivative of x^2")) {
        return "The derivative of x^2 is 2x.";
    } else if (lowerInput.includes("integral of x^2")) {
        return "The integral of x^2 is (x^3)/3 + C.";
    } else if (lowerInput.includes("pythagorean theorem")) {
        return "The Pythagorean theorem states that in a right triangle, a^2 + b^2 = c^2, where c is the hypotenuse.";
    
    // Science responses
    } else if (lowerInput.includes("science")) {
        return "Science includes physics, chemistry, and biology. What do you want to learn about?";
    } else if (lowerInput.includes("einstein")) {
        return "Albert Einstein was a physicist known for the theory of relativity.";
    } else if (lowerInput.includes("gravity")) {
        return "Gravity is the force that attracts objects toward each other, discovered by Isaac Newton.";
    } else if (lowerInput.includes("photosynthesis")) {
        return "Photosynthesis is the process by which plants use sunlight to synthesize foods from carbon dioxide and water.";
    } else if (lowerInput.includes("atoms")) {
        return "An atom is the basic unit of matter, consisting of a nucleus surrounded by electrons.";

    // History responses
    } else if (lowerInput.includes("history")) {
        return "History is full of amazing events! Which time period or event are you interested in?";
    } else if (lowerInput.includes("world war 2")) {
        return "World War 2 lasted from 1939 to 1945 and involved many countries.";
    } else if (lowerInput.includes("who was napoleon")) {
        return "Napoleon Bonaparte was a French military leader who became Emperor of France.";
    } else if (lowerInput.includes("the american revolution")) {
        return "The American Revolution (1775-1783) was the war in which the 13 American colonies won independence from Britain.";
    } else if (lowerInput.includes("the roman empire")) {
        return "The Roman Empire was one of the most powerful civilizations in history, lasting from 27 BC to 476 AD.";

    // Programming Language responses
    } else if (lowerInput.includes("java")) {
        return "Java is an object-oriented programming language used for building applications. Want to learn about syntax, loops, or OOP?";
    } else if (lowerInput.includes("python")) {
        return "Python is a powerful, easy-to-learn programming language used for data science and AI.";
    } else if (lowerInput.includes("c++") || lowerInput.includes("c++ language")) {
        return "C++ is widely used for game development and system programming.";
    } else if (lowerInput.includes("c language")) {
        return "C is a foundational programming language used in system development.";
    } else if (lowerInput.includes("for loop in python")) {
        return "In Python, a for loop is used to iterate over a sequence (like a list or range). Example: `for i in range(5): print(i)`.";
    } else if (lowerInput.includes("inheritance in java")) {
        return "Inheritance in Java is a mechanism where one class acquires the properties and behaviors of another class.";

    // English responses
    } else if (lowerInput.includes("english")) {
        return "English is a global language. Do you need help with grammar, vocabulary, or writing?";
    } else if (lowerInput.includes("what is a noun")) {
        return "A noun is a word that represents a person, place, or thing (e.g., 'dog', 'city', 'car').";
    } else if (lowerInput.includes("who wrote romeo and juliet")) {
        return "William Shakespeare wrote 'Romeo and Juliet'.";
    } else if (lowerInput.includes("verb")) {
        return "A verb is a word that expresses an action or state of being (e.g., 'run', 'is', 'jump').";
    } else if (lowerInput.includes("subject and predicate")) {
        return "A sentence has two main parts: the subject (who or what the sentence is about) and the predicate (what is being said about the subject).";

    // Default response
    } else {
        return "I'm still learning! Try asking about Math, Science, History, Programming (Java, Python, C, C++), or English.";
    }
}
function getBotResponse(input) {
    input = input.toLowerCase().trim();

    // Math-related queries
    if (input.includes("2+2") || input.includes("what is 2+2")) {
        return "2 + 2 = 4";
    }
    if (input.includes("square root of 16")) {
        return "The square root of 16 is 4.";
    }
    if (input.includes("pi value")) {
        return "The value of Pi (π) is approximately 3.14159.";
    }
    if (input.includes("solve")) {
        return "I can help with basic math. Try asking something like 'What is 5+3?'.";
    }

    // Science-related queries
    if (input.includes("gravity")) {
        return "Gravity is a force that pulls objects toward the Earth.";
    }
    if (input.includes("speed of light")) {
        return "The speed of light is approximately 299,792,458 meters per second.";
    }
    if (input.includes("water formula")) {
        return "The chemical formula for water is H2O.";
    }
    if (input.includes("who discovered electricity")) {
        return "Electricity was studied by many scientists, but Benjamin Franklin is famous for his experiments with lightning.";
    }

    // Programming-related queries
    if (input.includes("python")) {
        return "Python is a powerful, easy-to-learn programming language.";
    }
    if (input.includes("java")) {
        return "Java is a popular object-oriented programming language used in web and mobile development.";
    }
    if (input.includes("c++")) {
        return "C++ is an extension of C that includes object-oriented features.";
    }
    if (input.includes("best programming language")) {
        return "It depends on your needs! Python is great for beginners, Java is used in enterprise applications, and C++ is powerful for game development.";
    }

    // History-related queries
    if (input.includes("who was einstein")) {
        return "Albert Einstein was a theoretical physicist famous for the theory of relativity.";
    }
    if (input.includes("who discovered america")) {
        return "Christopher Columbus is often credited with discovering America in 1492, though indigenous people were already living there.";
    }
    if (input.includes("world war 2")) {
        return "World War 2 lasted from 1939 to 1945 and involved many countries, including the Allies and Axis powers.";
    }

    // English-related queries
    if (input.includes("define love")) {
        return "Love is an intense feeling of deep affection.";
    }
    if (input.includes("define friendship")) {
        return "Friendship is a relationship of mutual affection between people.";
    }
    if (input.includes("synonym of happy")) {
        return "Some synonyms for 'happy' are joyful, cheerful, delighted, and content.";
    }

    return "I'm still learning! Try asking about Math, Science, History, Programming (Java, Python, C, C++), or English.";
}
