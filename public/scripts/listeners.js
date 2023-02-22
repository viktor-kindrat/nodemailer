let dropzone = document.querySelector("#form__drop-zone");

$("#form__drop-zone").click(() => {
    document.querySelector("#form__file").click();
})

dropzone.addEventListener("dragover", function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
})

dropzone.addEventListener("drop", function(e) {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;

    const fileInput = document.createElement("input");
    fileInput.classList.add("form__file")
    fileInput.type = "file";
    fileInput.multiple = true;

    fileInput.files = files;

    const oldFileInput = document.getElementById("form__file");
    oldFileInput.parentNode.replaceChild(fileInput, oldFileInput);
    fileInput.id = "form__file";

    $("#form__drop-zone").html(`Dropped file: <br> <span class="form__text-small">${document.querySelector("#form__file").files[0].name}</span>`)
    setFormFileEvents()
})

async function setFormFileEvents() {
    $("#form__file").change(function(e) {
        $("#form__drop-zone").html(`Selected file: <br> <span class="form__text-small">${document.querySelector("#form__file").files[0].name}</span>`)
    })
}

setFormFileEvents()

$("#mailsform").submit(function() {
    return false
})