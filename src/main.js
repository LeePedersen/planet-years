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

    if (newAge.earthExpect < 0) {
      newAge.mercuryExpect = "you are " + (newAge.mercuryExpect * -1) + " Mercury years past life expectancy";
      newAge.venusExpect = "you are " + (newAge.venusExpect * -1) + " Venus years past life expectancy";
      newAge.marsExpect = "you are " + (newAge.marsExpect * -1) + " Mars years past life expectancy";
      newAge.jupiterExpect = "you are " + (newAge.jupiterExpect * -1) + " Jupiter years past life expectancy";
    }

    $("#info").hide();
    $("#mercury").text("Your age in Mercury years: " + newAge.mercuryAge);
    $("#mercuryExp").text("Your life expectancy in Mercury years: " + newAge.mercuryExpect);
    $("#venus").text("Your age in Venus years: " + newAge.venusAge);
    $("#venusExp").text("Your life expectancy in Venus years: " + newAge.venusExpect);
    $("#mars").text("Your age in Mars years: " + newAge.marsAge);
    $("#marsExp").text("Your life expectancy in Mars years: " + newAge.marsExpect);
    $("#jupiter").text("Your age in Jupiter years: " + newAge.jupiterAge);
    $("#jupiterExp").text("Your life expectancy in Jupiter years: " + newAge.jupiterExpect);

  });
});
