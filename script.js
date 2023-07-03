const screen = document.querySelector(".main-screen");
screen.style.textAlign = "right";
const allButtons = document.querySelectorAll("button");
let var1 = null;
let var2 = null;
let chosenOp = null;

function operator(var1, chosenOp, var2) {
    if (chosenOp == "/") {
        return var1 / var2;
    }

    else if (chosenOp == "x") {
        return var1 * var2;
    }

    else if (chosenOp == "-") {
        return var1 - var2;
    }

    else if (chosenOp == "+") {
        return var1 + var2;
    }
}

allButtons.forEach((button) => button.addEventListener("click", () => {
    if (button.className == "/" || button.className == "x" || button.className == "-" || button.className == "+") {
        var1 = parseFloat(var1);
        chosenOp = button.className;
    }

    else if (button.className == "clear") {
        var1 = null;
        var2 = null;
        chosenOp = null;
        screen.textContent = " ";
    }

    else if (button.className == ".") {
        if (typeof var1 != "number" ) {
            let dotCounter = 0;
            let dotArray = var1.toString().split("");
            for (letters in dotArray) {
                if (dotArray[letters] == ".") {
                    dotCounter ++;
                }
            }
            if (dotCounter == 0) {
                var1 += ".";
            }
        }
        else if (var2 != null) {
            let dotCounter = 0;
            let dotArray = var2.toString().split("");
            for (letters in dotArray) {
                if (dotArray[letters] == ".") {
                    dotCounter ++;
                }
            }
            if (dotCounter == 0) {
                var2 += ".";
            }        }
    }

    else if (button.className == "delete") {
        if (typeof var1 != "number" ) {
            var1 = var1.substring(0, var1.length -1);
        }
        else if (var2 != null) {
            var2 = var2.substring(0, var2.length -1);
        }
        else if (typeof var1 == "number" && var2 == null) {
            var1 = var1.toString();
            var1 = var1.substring(0, var1.length -1);
            var1 = parseFloat(var1);
        }
    }


    else if (button.className == "=") {
        var2 = parseFloat(var2);
        var1 = operator(var1, chosenOp, var2);
        if (var1.toString().length > 5) {
            var1 = var1.toFixed(2);
        }  
        if (var1 == "Infinity") {
            var1 = null;
            var2 = null;
            chosenOp = null;
            screen.textContent = "Undefined Bruh";
        }

        var2 = null;
        chosenOp = null
        
    }


    else if (typeof var1 != "number") {
        console.log(parseInt(button.className));

        if (var1 == null) {
            var1 = button.className;
        }
        else if (var2 == null && typeof var1 != "number") {
            var1 += button.className;
        }
    }
       
    else if (typeof var1 == "number") {
        if (typeof var1 == "number" && var2 == null) {
            var2 = button.className;
        }
        else {
            var2 += button.className;
        }
    }

    screen.style.fontSize = "50px";

    if (var1 != null && chosenOp != null && var2 != null){
        screen.textContent = `${var1} ${chosenOp} ${var2}`;
    }
    else if (var1 != null && chosenOp != null) {
        screen.textContent = `${var1} ${chosenOp}`;
    }
    else if (var1 != null) {
        screen.textContent = `${var1}`;
    }




    console.log(`Var1: ${var1}`);
    console.log(`Var2: ${var2}`);


}));

//add float implementation
//Make delete work
//Spacing between buttons
//Implementation of the operate function