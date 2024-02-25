const encode = document.querySelector('#encode');
const decode = document.querySelector('#decode');

encode.addEventListener('click', myEncode);
decode.addEventListener('click', myDecode);

function myEncode() {
  const input = document.getElementById('input').value;
  const encoded = window.btoa(input);
  document.getElementById('output').value = encoded;
}

function myDecode() {
  const input = document.getElementById('input').value;
  let decoded;
  try {
    decoded = window.atob(input);
  } catch (error) {
    decoded = 'Invalid Base64 input';
  }
  document.getElementById('output').value = decoded;
}
