let emailform = document.forms.sender

function postServer(request, message, loadingMessage = "Loading") {
    $(".loader__text").text(loadingMessage)
    $(".loader").fadeIn(300);
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
            $(".loader__text").text(data)
            setTimeout(() => {
                document.location.reload();
            }, 5000);
            console.log(data);
        })
        .catch((error) => {
            $(".loader__text").text(error)
            setTimeout(() => {
                document.location.reload();
            }, 5000);
            console.error('Error:', error);
        });
}

$("#sendBtn").click(function() {
    const fileInput = document.querySelector("#form__file");
    const file = fileInput.files[0];
    console.log(file)
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        const fileContent = reader.result;
        let mails = fileContent.split("\n");
        let opt = {
            name: emailform.username.value,
            data: mails,
            message: emailform.message.value,
            theme: emailform.theme.value
        };
        console.log(opt)
        postServer("send", JSON.stringify(opt), "Sending your mail. Please stand here!");
        $("#form__drop-zone").html("Drag &amp; drop or click to select")
        emailform.reset();
    };
})