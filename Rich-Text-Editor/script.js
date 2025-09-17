// let optionsButtons = document.querySelectorAll(".option-button");
// let advancedOptionButton = document.querySelectorAll(".adv-option-button");
// let fontName = document.getElementById("fontName");
// let fontSizeRef = document.getElementById("fontSize");
// let writingArea = document.getElementById("text-input");
// let linkButton = document.getElementById("createLink");
// let alignButtons = document.querySelectorAll(".align");
// let spacingButtons = document.querySelectorAll(".spacing");
// let formatButtons = document.querySelectorAll(".format");
// let scriptButtons = document.querySelectorAll(".script");

// //List of fontlist
// let fontList = [
//   "Arial",
//   "Verdana",
//   "Times New Roman",
//   "Garamond",
//   "Georgia",
//   "Courier New",
//   "cursive",
// ];

// //Initial Settings
// const initializer = () => {
//   //function calls for highlighting buttons
//   //No highlights for link, unlink,lists, undo,redo since they are one time operations
//   highlighter(alignButtons, true);
//   highlighter(spacingButtons, true);
//   highlighter(formatButtons, false);
//   highlighter(scriptButtons, true);

//   // Add these lines:
//   // highlighter(listButtons, false);
//   // highlighter(linkButton, false);


//   // create options for font names
//   fontList.map((value) => {
//     let option = document.createElement('option');
//     option.value = value;
//     option.innerHTML = value;
//     fontName.appendChild(option);
//   });

//   // fontSize allows only fill
//   for (let i = 1; i <= 7; i++) {
//     let option = document.createElement("option");
//     option.value = i;
//     option.innerHTML = i;
//     fontSizeRef.appendChild(option);
//   }

//   // default size
//   fontSizeRef.value =3;
// };

// // main logic
// const modifyText = (command, defaultUi, value) => {
//   // execComand exclusive comand on selected text
//   document.execCommand(command, defaultUi, value);
// };

// // for basic perations wich don't need value parameter
// optionsButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     modifyText(button.id, false, null);
//   });
// });

// // options that require value parameter (e.g colours fonts)
// advancedOptionButton.forEach((button) => {
//   button.addEventListener("change", () => {
//     modifyText(button.id, false, button.value);
//   });
// });

// // link
// linkButton.addEventListener("click", () => {
//   let userLink = prompt("Enter a URL");
//   // if link has http then pass directly else add https
//   if(/^https?:\/\//i.test(userLink)) {
//     modifyText(linkButton.id, false,userLink);
//   } else {
//     userLink = "http://" + userLink;
//     modifyText(linkButton.id, false, userLink);
//   }
// })



// //Highlight clicked button
// const highlighter = (buttons, needsRemoval) => {
//   buttons.forEach((button) => {
//    button.addEventListener('click', () => {
//      if(needsRemoval) {
//       const isActive = button.classList.contains("active");
//       highlighterRemover(buttons);
//       if(!isActive){
//         // highlighterRemover(buttons)
//         button.classList.add("active");
//       }
//     } else {
//       button.classList.toggle("active");
//     }
//    });
//   });
// }



// const highlighterRemover = (className) => {
//   className.forEach((button) => {
//     button.classList.remove("active");
//   })
// }



// window.onload = initializer;




let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

// List and link buttons (add these lines)
let listButtons = [
  document.getElementById("insertOrderedList"),
  document.getElementById("insertUnorderedList")
];
let linkButtons = [
  document.getElementById("createLink"),
  document.getElementById("unlink")
];

//List of fontlist
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

//Initial Settings
const initializer = () => {
  //function calls for highlighting buttons
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  // Add these lines for list and link buttons
  highlighter(listButtons, false);
  highlighter(linkButtons, false);

  // create options for font names
  fontList.forEach((value) => {
    let option = document.createElement('option');
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });

  // fontSize allows only fill
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  // default size
  fontSizeRef.value = 3;
};

// main logic
const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

// for basic operations which don't need value parameter
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

// options that require value parameter (e.g colours fonts)
advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

// link
linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL");
  if (/^https?:\/\//i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = "http://" + userLink;
    modifyText(linkButton.id, false, userLink);
  }
});

//Highlight clicked button
const highlighter = (buttons, needsRemoval) => {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (needsRemoval) {
        const isActive = button.classList.contains("active");
        highlighterRemover(buttons);
        if (!isActive) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (buttons) => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
};

window.onload = initializer;