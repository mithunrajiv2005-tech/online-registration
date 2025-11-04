$(document).ready(function () {
  $("#registrationForm").on("submit", function (e) {
    let valid = true;

    // Simple validation
    $("#registrationForm input, #registrationForm select, #registrationForm textarea").each(function () {
      if ($(this).val() === "") {
        $(this).css("border", "1px solid red");
        valid = false;
      } else {
        $(this).css("border", "1px solid #cbd5e1");
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("Please fill all the fields properly!");
    }
  });
});
