function processText() {
  var inputText = document.getElementById("input").value.toLowerCase();
  var outputText = "";

  if (document.getElementById("encrypt").checked) {
    outputText = encryptText(inputText);
  } else {
    outputText = decryptText(inputText);
  }

  document.getElementById("output").value = outputText;
}

function encryptText(text) {
  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/a/g, "ai");
  text = text.replace(/o/g, "ober");
  text = text.replace(/u/g, "ufat");
  return text;
}

function decryptText(text) {
  text = text.replace(/ufat/g, "u");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ai/g, "a");
  text = text.replace(/imes/g, "i");
  text = text.replace(/enter/g, "e");
  return text;
}

function copyText() {
  var outputText = document.getElementById("output");
  outputText.select();
  outputText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Texto copiado: " + outputText.value);
}
