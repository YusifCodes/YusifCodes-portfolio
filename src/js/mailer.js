const mailer = () => {

    const handleSubmit = (e) => {

        e.preventDefault();

        var url = "https://cors-proxy.htmldriven.com/?url=http://portfolio-mailer-api.herokuapp.com/api/v1/send";
    
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
    
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
    
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
        }};

        let dataObj = {
            email: document.getElementById("mail-input").value,
            message: document.getElementById("text-input").value
        }


        dataObj = JSON.stringify(dataObj);
        xhr.send(dataObj);
        document.querySelector(".submit").textContent = "Sent!"
        document.querySelector(".submit").style["background-color"] = "#d6ffdc";
        setTimeout(() => {
            document.querySelector(".submit").textContent = "Send";
            document.querySelector(".submit").style["background-color"] = "white";
        }, 1000)
    }
    
    document.querySelector(".submit").addEventListener("click", handleSubmit)

}

export default mailer