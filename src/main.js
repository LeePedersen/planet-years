import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeExpect } from './ageExpect.js';

$(document).ready(function() {
  $("form#info").submit(function(event) {
    event.preventDefault();
    let ageInput = $("#age").val();
    let genderInput = $("select#gender").val();
    let incomeInput = $("#income").val();
    let mentalHealthInput = $("select#mentalHealth").val();

    let newAge = new AgeExpect(ageInput, mentalHealthInput, incomeInput, genderInput);

    newAge.expectCalc();
    newAge.mercury();
    newAge.mars();
    newAge.jupiter();
    newAge.venus();

    $("#mercury").text("Your age on Mercury: " + newAge.mercuryAge + " years");
    $("#mercuryExp").text("Your life expectancy on Mercury: " + newAge.mercuryExpect + " more years");
    $("#venus").text("Your age on Venus: " + newAge.venusAge + " years");
    $("#venusExp").text("Your life expectancy on Venus: " + newAge.venusExpect + " more years");
    $("#mars").text("Your age on Mars: " + newAge.marsAge + " years");
    $("#marsExp").text("Your life expectancy on Mars: " + newAge.marsExpect + " more years");
    $("#jupiter").text("Your age on Jupiter: " + newAge.jupiterAge + " years");
    $("#jupiterExp").text("Your life expectancy on Jupiter: " + newAge.jupiterExpect + " more years");
  });
});
