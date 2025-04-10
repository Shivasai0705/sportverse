function checkAnswer(sport) {
    let correctSport = "football"; // Change dynamically later
    if (sport === correctSport) {
        document.getElementById("result").textContent = "✅ Correct! It's Football!";
    } else {
        document.getElementById("result").textContent = "❌ Try Again!";
    }
}

function checkEquipment(sport) {
    let correctEquipment = "cricket"; // Change dynamically later
    if (sport === correctEquipment) {
        document.getElementById("equipment-result").textContent = "✅ Correct! It's Cricket!";
    } else {
        document.getElementById("equipment-result").textContent = "❌ Try Again!";
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event, sport) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let draggedElement = document.getElementById(data);
    let correctMapping = {
        "rule1": "football",
        "rule2": "badminton",
        "rule3": "cricket"
    };
    if (correctMapping[data] === sport) {
        document.getElementById("drag-result").textContent = "✅ Correct!";
    } else {
        document.getElementById("drag-result").textContent = "❌ Try Again!";
    }
}