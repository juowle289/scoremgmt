$(document).ready(function() {
    function displayMessages() {
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        const displayMessage = $("#displayMessage");
        displayMessage.empty();

        if (messages.length > 0) {
            displayMessage.append("<ul></ul>");
            messages.forEach((messageObj, index) => {
                const { message, image, time } = messageObj;
                const listItem = `
                    <li class="message-item">
                        <div class="message-content">
                            <span class="admin-label">Admin</span> <span class="time-label">${time}</span>
                            <p>${message}</p>
                            ${image ? `<br><img src="${image}" alt="Image">` : ''}
                        </div>
                        <button class="delete-button" data-index="${index}">Delete</button>
                    </li>
                `;
                $("ul", displayMessage).append(listItem);
            });

            $(".delete-button").on("click", function() {
                const index = $(this).data("index");
                deleteMessage(index);
            });
        }
    }

    $("#messageForm").on("submit", function(event) {
        event.preventDefault();
        const message = $("#message").val();
        const imageInput = $("#image")[0].files[0];
        const time = new Date().toLocaleString();
        
        if (message) {
            let messages = JSON.parse(localStorage.getItem("messages")) || [];
            
            if (imageInput) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imageData = e.target.result;
                    messages.unshift({ message, image: imageData, time }); 
                    localStorage.setItem("messages", JSON.stringify(messages));
                    $("#message").val(""); 
                    $("#image").val(""); 
                    displayMessages();
                };
                reader.readAsDataURL(imageInput);
            } else {
                messages.unshift({ message, image: null, time }); 
                localStorage.setItem("messages", JSON.stringify(messages));
                $("#message").val("");
                $("#image").val(""); 
                displayMessages();
            }
        }
    });

    function deleteMessage(index) {
        let messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.splice(index, 1);
        localStorage.setItem("messages", JSON.stringify(messages));
        displayMessages();
    }

    displayMessages();
});
