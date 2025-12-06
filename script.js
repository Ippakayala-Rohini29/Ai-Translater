async function translateText() {
    let text = document.getElementById("inputText").value;
    let lang = document.getElementById("targetLang").value;

    if (!text) {
        alert("Please enter some text!");
        return;
    }

    document.getElementById("output").innerText = "Translating...";

    // This API is a real AI translation tool
    let url = `https://api.mymemory.translated.net/get?q=${text}&langpair=en|${lang}`;

    let response = await fetch(url);
    let data = await response.json();

    let translated = data.responseData.translatedText;

    document.getElementById("output").innerText = translated;
}