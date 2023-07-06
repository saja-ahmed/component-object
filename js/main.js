// main object
let main = {
    // nested object
    button: {
        // nested object properties
        width: "60",
        height:"30",
        title: "button",
        // nested object actions
        action: {
            action: "onclick",
            behvior: "inherit"
        }
    },
    // another nested object for navbar
    navbar: {
        width: "0%",
        margin: "0 auto",
        height: "100px",
        background: "35, 169, 110",
        display: "flex",
        title:"nav"
    },
    // another nested object for sidebar 
    sidebar: {
        width: "25%",
        height: "100%",
        display: "flex",
        title: "side"
    }
};
// Create a new button it takes the same properties from the main button but with different values
let butt = Object.create(main.button)
butt.width = "20";
butt.height = "30";
butt.title = "button";

// create another navbar it takes the same properties from the main navbar
let nav = Object.create(main.navbar);
nav.width = "90%";
nav.margin = "0 auto";
nav.height = "100px";
nav.background = "35, 169, 110";
nav.display = "flex";
nav.title = "nav";

// inheritance of properties
let side =  Object.create(main.sidebar);
side.width = "25%";
side.height = "100%";
side.display = "flex";
side.title = "side"


console.log(butt.width);
