let emailform = document.forms.sender

function postServer(request, message) {
    fetch(`${location.origin}/${request}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: message
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            alert(data)
            console.log(data);
        })
        .catch((error) => {
            alert(error)
            console.error('Error:', error);
        });
}

$("#sendBtn").click(function() {
    let validity = emailform.checkValidity()
    if (!validity) {
        alert("Not send. Enter valid data")
        return false
    }

    let elements = Array.from(emailform.adressat);
    let emails = [];
    if (elements.length > 0) {
        elements.forEach(element => {
            emails.push(element.value)
        });
    } else {
        elements = emailform.adressat;
        emails.push(elements.value)
    }

    postServer("send", JSON.stringify(emails))
    $("#form__input-container").html(emailInputExample)
})