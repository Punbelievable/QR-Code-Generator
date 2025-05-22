const qrcodeContainer = document.getElementById('qrcode');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const textInput = document.getElementById('text');

function generateQRCode() {
  const text = textInput.value.trim();
  if (!text) {
    alert("Please enter some text or URL.");
    return;
  }
  qrcodeContainer.innerHTML = ""; // clear previous QR code

  // Generate new QR code
  new QRCode(qrcodeContainer, {
    text: text,
    width: 200,
    height: 200,
  });
}

function clearQRCode() {
  qrcodeContainer.innerHTML = "";
  textInput.value = "";
}

generateBtn.addEventListener('click', generateQRCode);
clearBtn.addEventListener('click', clearQRCode);

// generate QR on Enter key
textInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    generateQRCode();
  }
});
