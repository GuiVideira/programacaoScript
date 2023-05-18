var dia;

function verificadia() {
    dia = parseInt(document.formdia.f_dia.value);

    switch (dia) {
        case 1: document.formdia.f_nomedia.value = 'Domingo'; break;
        case 2: document.formdia.f_nomedia.value = 'Segunda-Feira'; break;
        case 3: document.formdia.f_nomedia.value = 'Terça-Feira'; break;
        case 4: document.formdia.f_nomedia.value = 'Quarta-Feira'; break;
        case 5: document.formdia.f_nomedia.value = 'Quinta-Feira'; break;
        case 6: document.formdia.f_nomedia.value = 'Sexta-Feira'; break;
        case 7: document.formdia.f_nomedia.value = 'Sabado'; break;
        default: document.formdia.f_nomedia.value = '** Dia invalido! **'; break;
    }

}
