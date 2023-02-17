let emailform = document.forms.sender

$("#sendBtn").click(function() {
    let validity = emailform.checkValidity()
    if (!validity) {
        console.log("no valid")
        return false
    }

    let elements = emailform.adressat;
    let emails = [];

    elements.forEach(element => {
        emails.push(element.value)
    });
    console.log(emails)

    fetch(`${location.origin}/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emails)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

})