     const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

        let ps1 = document.getElementById('Ps1');
        let ps2 = document.getElementById('Ps2');
        let slider = document.getElementById("myRange");
        let lengthValue = document.getElementById("lengthValue");
        let length='10'//password zuerst deklaeren damit man es ueberall benutzen kann 
     slider.addEventListener('input',()=> {
          lengthValue.textContent=slider.value
           length= parseInt(slider.value)//laenge des passwords interaktiv durch den slider,muss in dem event lisenter sein sonst anders sie sich nicht 
           changeColor()
     })

        function generatePassword(){
            let password = "";
            for (let i = 0; i < length; i++) {
                let randomIndex1 = Math.floor(Math.random() * characters.length);
                password += characters[randomIndex1]; 
            } 
            return password;
        }

        function generateAndDisplay() {
            let pwd1 = generatePassword();
            let pwd2 = generatePassword();
            
            ps1.textContent = pwd1;
            ps2.textContent = pwd2;
        }
        function copyPassword1() {
            //select the password or grab it 
            ps1.select;
//copy the text to clipboard
            navigator.clipboard.writeText(ps1.innerText);

            alert('Text copied: '+ps1.innerText);

        }
        function copyPassword2() {
            //select the password or grab it 
            ps2.select;
//copy the text to clipboard
            navigator.clipboard.writeText(ps2.innerText);

            alert('Text copied: '+ps2.innerText);

        }



       function changeColor(){
            if(length < 8) {
        slider.classList.add('slider-red');
        slider.classList.remove('slider-orange', 'slider-green');
        lengthValue.style.color = 'red';
        } else if(length < 13) {
        slider.classList.add('slider-orange');
        slider.classList.remove('slider-red', 'slider-green');
        lengthValue.style.color = '#FFA500';
        } else {
        slider.classList.add('slider-green');
        slider.classList.remove('slider-red', 'slider-orange');
        lengthValue.style.color = 'green';
        }
    }