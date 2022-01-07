let formMessage = document.querySelector("#formMessage");
let hateMessage = document.querySelector("#hateMessage");

let bot = {
    TOKEN: "5055935322:AAHmWDRWsKVU4cj5uY3QbvA9smRNHZhuI5k",
    ChatID: "491180120"
}

formMessage.addEventListener("submit", e => {
    e.preventDefault();

    let message = document.querySelector("#messageInput");

    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.ChatID}&text=${message.value}`, {
        method: "GET"
    })

    formMessage.reset();
})

hateMessage.addEventListener("submit", e => {
    e.preventDefault();

    let hateMessage = "Пошёл нахуй";

    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.ChatID}&text=${hateMessage}`, {
        method: "GET"
    })
})