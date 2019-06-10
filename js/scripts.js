$(document).ready(function() {
    $("#survey form").submit(function(event) {
        var nameInput = $("input#name").val();
        var signInput = $("select#sign").val();
        var durationInput = $("input[name=duration]:checked").val();

        $(".nameInput").text(nameInput);
    
        var suggestion = "genericSuggestion";

        switch(signInput) {
            case "Aries":
            case "Leo":
            case "Sagittarius":
                suggestion = getRedGroupSuggestion();
                break;
            case "Taurus":
            case "Virgo":
            case "Capricorn":
                suggestion = getGreenGroupSuggestion();
                break;
            case "Gemini":
            case "Libra":
            case "Aquarius":
                suggestion = getYellowGroupSuggestion();
                break;
            case "Cancer":
            case "Scorpio":
            case "Pisces":
                suggestion = getBlueGroupSuggestion();
                break;
        }

        if (durationInput === "short") {
            suggestion += "Short";
        }

        $(".suggestion").fadeOut();
        $("#" + suggestion).fadeIn();
    
        event.preventDefault();
        });
  });

function getRedGroupSuggestion()
{
    var suggestion = "adventureSuggestion";
    var subjectInput = $("select#subject").val();
    var colorInput = $("select#color").val();

    if (subjectInput === "Art") {
        return "relaxSuggestion";
    }

    switch(colorInput) {
        case "White":
        case "Black":
            return "cityTourSuggestion";
        case "Yellow":
        case "Orange":
            return "eventfulSuggestion";
    }

    // Add additional logic here

    return suggestion;
}

function getGreenGroupSuggestion()
{
    var suggestion = "cityTourSuggestion";
    var subjectInput = $("select#subject").val();
    var colorInput = $("select#color").val();

    if (subjectInput === "Science") {
        return "eventfulSuggestion";
    }

    switch(colorInput) {
        case "Red":
        case "Orange":
            return "adventureSuggestion";
        case "Blue":
        case "Green":
            return "relaxSuggestion";
    }

    // Add additional logic here

    return suggestion;
}

function getYellowGroupSuggestion()
{
    var suggestion = "eventfulSuggestion";
    var subjectInput = $("select#subject").val();
    var colorInput = $("select#color").val();

    if (subjectInput === "PE") {
        return "adventureSuggestion";
    }

    switch(colorInput) {
        case "Gray":
        case "Silver":
            return "cityTourSuggestion";
        case "Pink":
        case "Turquoise":
            return "relaxSuggestion";
    }

    // Add additional logic here

    return suggestion;
}

function getBlueGroupSuggestion()
{
    var suggestion = "relaxSuggestion";
    var subjectInput = $("select#subject").val();
    var colorInput = $("select#color").val();

    if (subjectInput === "History") {
        return "cityTourSuggestion";
    }

    switch(colorInput) {
        case "Gold":
        case "Magenta":
            return "adventureSuggestion";
        case "Brown":
        case "Indingo":
            return "eventfulSuggestion";
    }

    // Add additional logic here

    return suggestion;
}