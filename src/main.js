import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeExpect } from './ageExpect.js';

$(document).ready(function() {
  $("form#info").submit(function(event) {
    let ageInput = $("#age").val();
    let genderInput = $("select#gender").val();
    let incomeInput = $("#income").val();

    
  });

});
