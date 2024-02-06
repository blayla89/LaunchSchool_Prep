// 6. Write code that checks whether the string byteSequence contains the character x.


// for loop ----------------------------------------------------------------
function contains (sequence) {
  let result = false; 
  for(let i = 0; i < sequence.length; i += 1) {
    if(sequence[i] === 'x') {
      result = true; 
    }
  }
  return result; 
}

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
let byteSequence2 = 'TXkgaG92ZXJjcmFmdCBpcyBmdWsIG9mIGVlbHMu'; 

console.log(contains(byteSequence)); // => true
console.log(contains(byteSequence2)); // => false

// String.prototype.includes() -----------------------------------------------

function contains2 (sequence) {
  return sequence.includes('x'); 
}

console.log(contains2(byteSequence)); // => true
console.log(contains2(byteSequence2)); // => false