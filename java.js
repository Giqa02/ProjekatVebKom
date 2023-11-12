    const form = document.querySelector('#forma');
    const imeInput = document.querySelector('#ime');
    const emailInput = document.querySelector('#email');
    const porukaInput = document.querySelector('#poruka');
    const dugme = document.querySelector('#dugme');
    const asortiman = ['jakna','haljina','farmerke','majica','duks']
    const dugme1 = document.querySelector('#dugme1');
    dugme1.addEventListener('click',GenerisiProizvode)
    dugme.addEventListener('click',validateForm);


    function GenerisiProizvode(){
        const lista = document.querySelector('.asortiman ul');
  for (let i = 0; i < asortiman.length; i++) {
    const proizvod = asortiman[i];
    const stavka = document.createElement('li');
    stavka.textContent = proizvod;
    lista.appendChild(stavka);
  }
  dugme1.disabled= true;
    }

    function validateEmail(email) {
         let atPosition = email.indexOf('@');
        if (atPosition < 1) {
          return false;
        }
        let dotPosition = email.lastIndexOf('.');
        if (dotPosition <= atPosition + 2) {
          return false;
        }
        if (dotPosition === email.length - 1) {
          return false;
        }
        return true;
    
    }

    function validateInput(input) {
        return input.value.trim() !== '';
    }

    function PoslataPoruka() {
        const message = document.createElement('p');
        message.textContent = 'Poruka uspešno poslata!';
        message.classList.add('uspeh');
        form.appendChild(message);
        message.style.color = 'green';
        message.style.fontSisze = '16px';
    }

    function validateForm(event) {
        event.preventDefault();

        if (!validateInput(imeInput)) {
            alert('Unesite vaše ime i prezime!');
            return;
        }

        if (!validateEmail(emailInput.value)) {
            alert('Unesite validnu e-mail adresu!');
            return;
        }

        if (!validateInput(porukaInput)) {
            alert('Napišite vašu poruku!');
            return;
        }

        PoslataPoruka();
        form.reset();
    }
    function izmeniRedosled() {
        const input = document.querySelector('#inputRecenica');
        const recenica = input.value;
        const reci = recenica.split(' ');
        const izmenjeneReci = reci.reverse();
        const izmenjenaRecenica = izmenjeneReci.join(' ');
        const izmenjenParagraf = document.querySelector('#izmenjenaRecenica');
        izmenjenParagraf.textContent = izmenjenaRecenica;
      }
      

