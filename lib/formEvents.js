const $ = require('jquery')
const Form = require('./form')

$(document).ready(function() {
  $(".submit-btn").on("click", Form.submitEntry);
})
