// Write class below
class ShiftCipher {
    constructor(shift) {
      this.shift = shift;
      }
      encrypt(plainString) {
        let encryptString = '';
        const capString = plainString.toUpperCase();
        for (let i = 0; i<capString.length; i++) {
          let code = capString.charCodeAt(i)
          if (code >= 65 && code <= 90) {
            code += this.shift;
            if (code > 90) {
              code -= 26
            }  
          }
          encryptString += String.fromCharCode(code);
        }
        return encryptString;
        };
      decrypt(encryptString) {
        let decryptString = '';
        const lowString = encryptString.toLowerCase();
        for (let i = 0; i < lowString.length; i++) {
          let code = lowString.charCodeAt(i);
          if ( code >= 97 && code <= 122) {
            code -= this.shift;
            if ( code < 97 ) {
              code += 26;
            }
          }
          decryptString += String.fromCharCode(code);
        }
        return decryptString;
      }
  }
  const cipher = new ShiftCipher(2);
  console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
  console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'