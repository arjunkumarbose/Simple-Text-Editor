//Font Style
const textArea = getTextAreaValue();

let isBold = false;
document.getElementById('icon-bold').addEventListener('click', function () {
    if (!isBold) {
        textArea.classList.add('font-bold');
        isBold = true;
    } else {
        textArea.classList.remove('font-bold');
        isBold = false;
    }
})

let isItalic = false;
document.getElementById('icon-italic').addEventListener('click', function () {
    if (!isItalic) {
        textArea.classList.add('italic');
        isItalic = true;
    } else {
        textArea.classList.remove('italic');
        isItalic = false;
    }
})

let isUnderlined = false;
document.getElementById('icon-underlined').addEventListener('click', function () {
    if (!isUnderlined) {
        textArea.classList.add('underline');
        isUnderlined = true;
    } else {
        textArea.classList.remove('underline');
        isUnderlined = false;
    }
})

const myTextArea = getTextAreaValue();

document.getElementById('left').addEventListener('click', function () {
    myTextArea.style.textAlign = 'left';
})

document.getElementById('center').addEventListener('click', function () {
    myTextArea.style.textAlign = 'center';
})

document.getElementById('right').addEventListener('click', function () {
    myTextArea.style.textAlign = 'right';
})

document.getElementById('justify').addEventListener('click', function () {
    myTextArea.style.textAlign = 'justify';
})

function getTextAreaValue(){
  const textArea = document.getElementById('text-input');
  const textAreaValue = textArea.value;
  return textArea;
}

function setTextAreaValue(newValue){
  let textArea = document.getElementById('text-input');
  textArea = newValue;
}

//Font Size
let currentFontSize = 16;

  document.getElementById('font-size-up').addEventListener('click', function () {
    if (currentFontSize < 30) {
      currentFontSize += 2;
      document.getElementById('text-input').style.fontSize = currentFontSize + 'px';
      document.getElementById('font-size').value = currentFontSize;
    }
  });

  document.getElementById('font-size-down').addEventListener('click', function () {
    if (currentFontSize > 16) {
      currentFontSize -= 2;
      document.getElementById('text-input').style.fontSize = currentFontSize + 'px';
      document.getElementById('font-size').value = currentFontSize;
    }
  });

  document.getElementById('font-size').addEventListener('input', function () {
    const newSize = parseInt(this.value, 10);
    if (!isNaN(newSize) && newSize >= 16 && newSize <= 30) {
      currentFontSize = newSize;
      document.getElementById('text-input').style.fontSize = currentFontSize + 'px';
    }
  });