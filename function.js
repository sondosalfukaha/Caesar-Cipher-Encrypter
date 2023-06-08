



                    let pInput = document.getElementById('plainInput-1');//textarea > Enter that box where we enter our text
                    let encbtn =  document.getElementById('encrypt-btn');//Encrypt Button
                    let eInput = document.getElementById('encryptedInput-1');//textarea > Encrypted will appear here
                    let inputs = [eInput,pInput];
                    inputs.forEach(input => {
                        input.oninput = () => {
                            input.value = input.value.toUpperCase()
                        }
                    })

                    function encrypt(){
                        let pInput = document.getElementById('plainInput-1').value;
                        let solved = '';
                        let val = document.getElementById('shiftInput').value;
                        let shiftInput = parseInt(val)
                        for(var i=0;i<pInput.length;i++){
                            let ascii_num = pInput[i].charCodeAt()  
                            let sum = ascii_num + shiftInput
                            sum >= 65 && sum <=90 ? solved += String.fromCharCode(sum) : sum>90 ? solved+= String.fromCharCode(65 + (sum & 91)) : solved += pInput
                        } 
                        eInput.value = solved
                    }
                        encbtn.addEventListener('click',encrypt)
                    

