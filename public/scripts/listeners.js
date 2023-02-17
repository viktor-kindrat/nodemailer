let emailInputExample = $("#form__input-container").html();
$("#form__add-btn").click(function() {
    $("#form__input-container").append(emailInputExample)
})

$("#mailsform").submit(function() {
    return false
})