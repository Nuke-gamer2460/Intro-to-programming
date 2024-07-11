let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
let d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
    todayDate.innerHTML = d.toDateString();
}

// function displayActivity() {
//     // find out the day of the week.
//     let dayOfWeek = d.getDay();

//     /* set a letiable, called youShould, with a different
//        string based on what day of the week it is. */
//     let youShould;

//     switch (dayOfWeek) {
//         case 0:
//             youShould = "Take it easy. You've earned it.";
//             break;
//         case 1:
//             youShould = "Gotta do what ya gotta do!";
//             break;
//         case 2:
//             youShould = "Take time to smell the roses!";
//             break;
//         case 3:
//             youShould = "Don't forget to eat breakfast!";
//             break;
//         case 4:
//             youShould = "Learn something new today!";
//             break;
//         case 5:
//             youShould = "Make a list of things you like to do.";
//             break;
//         case 6:
//             youShould = "Do one thing from your list of things you like to do.";
//             break;
//         default:
//             youShould = "Hmm. Something has gone wrong.";
//             break;
//     }

//     // switch(daysOfTheMonth){
        
//     // }
//     // output the value of youShould into the thingToDo div    
//     document.getElementById("thingToDo").innerHTML = youShould;
// }

function displayActivity() {
    // find out the day of the month
    let dayOfMonth = d.getDate();

    let activity = [
        "Go for a walk in the park",
        "Try a new recipe for dinner",
        "Read a book for an hour",
        "Have a movie night with friends or family",
        "Go for a bike ride",
        "Learn a new skill online",
        "Write in a journal",
        "Visit a local museum or art gallery",
        "Have a picnic in the backyard",
        "Do a workout or yoga session",
        "Call a friend you haven't spoken to in a while",
        "Organize your closet or workspace",
        "Try a new hobby like painting or knitting",
        "Listen to a podcast on a new topic",
        "Take a relaxing bath",
        "Volunteer for a local charity",
        "Plant flowers or herbs in your garden",
        "Watch the sunrise or sunset",
        "Practice mindfulness or meditation",
        "Cook a meal from a different culture",
        "Start a gratitude journal",
        "Visit a nearby nature trail",
        "Have a technology-free day",
        "Dance to your favorite music",
        "Plan a future trip or vacation",
        "Attend a virtual event or workshop",
        "Do a random act of kindness for someone",
        "Explore a new area in your city",
        "Have a DIY spa day at home",
        "Create a vision board for your goals"
    ];

   let randomActivity = activity[Math.floor(Math.random() * 30)];

    switch (dayOfMonth) {
        case 0:
            activity = randomActivity;
            break;
        case 1:
            activity = randomActivity;
            break;
        case 2:
            activity = randomActivity;
            break;

        // Add cases for the rest of the days of the month here
        case 3:
            activity = randomActivity;
            break;
            
        case 4:
            activity = randomActivity;
            break;

        case 5:
            activity = randomActivity;
             break;

        case 6:
            activity = randomActivity;
            break;

        case 7:
            activity = randomActivity;
            break;

        case 8:
            activity = randomActivity;
            break;

        case 9:
            activity = randomActivity;
            break;

        case 10:
            activity = randomActivity;
            break;

        case 11:
            activity = randomActivity;
            break;

        case 12:
            activity = randomActivity;
            break;

        case 13:
            activity = randomActivity;
            break;

        case 14:
            activity = randomActivity;
            break;

        case 15:
            activity = randomActivity;
            break;

        case 16:
            activity = randomActivity;
            break;

        case 17:
            activity = randomActivity;
            break;

        case 18:
            activity = randomActivity;
            break;

        case 19:
            activity = randomActivity;
            break;

        case 20:
            activity = randomActivity;
            break;

        case 21:
            activity = randomActivity;
            break;

        case 22:
            activity = randomActivity;
            break;

        case 23:
            activity = randomActivity;
            break;

        case 24:
            activity = randomActivity;
            break;

        case 25:
            activity = randomActivity;
            break;

        case 26:
            activity = randomActivity;
            break;

        case 27:
            activity = randomActivity;
            break;

        case 28:
            activity = randomActivity;
            break;

        case 29:
            activity = randomActivity;
            break;

        case 30:
            activity = randomActivity;
            break;


        default:
            activity = "No activity planned for today.";
            break;
    }

    // output the value of activity into the thingToDo div    
    document.getElementById("thingToDo").innerHTML = activity;
}

//The random activity function

// function randomActivity(){
//     activity = Math.floor(Math.random(activity) * 30)
// }