const $ = require('jquery')

class Form {
  static submitEntry() {
    let name = $('.name-input').val()
    let email = $('.email-input').val()
    let filament = $('.filament-dropdown').val()
    let comments = $('.comments-input').val()

    console.log("name: ", name);
    console.log("email: ", email);
    console.log("filament: ", filament);
    console.log("comments: ", comments);

    
  }
}

module.exports = Form;
