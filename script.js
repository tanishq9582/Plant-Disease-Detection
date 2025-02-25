function uploadImage() {
    let input = document.getElementById("imageUpload");
    let file = input.files[0];

    if (!file) {
        alert("Please upload an image first.");
        return;
    }

    let reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById("preview").src = event.target.result;
        document.getElementById("preview").style.display = "block";
    };
    reader.readAsDataURL(file);

    let formData = new FormData();
    formData.append("file", file);

    fetch("/predict", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = "Predicted Disease: " + data.disease;
    })
    .catch(error => console.error("Error:", error));
}
