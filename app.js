const username = document.getElementById('name');
const data1 = document.getElementById('data1');
const data2 = document.getElementById('data2');
const data3 = document.getElementById('data3');
const btncalculate = document.getElementById('btn-calculate');
const btnpredict = document.getElementById('btn-predict');
const result = document.getElementById('result');


btncalculate.addEventListener('click', calculateNote);
btnpredict.addEventListener('click', predecirNota);

function calculateNote() {
    let user = username.value
    let note1 = Number(data1.value);
    let note2 = Number(data2.value);
    let note3 = Number(data3.value);
    let operationResult = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4);
    result.textContent = `Sr (a) (e) (i) ${user} , su nota final es ${operationResult}`

    if(operationResult < 3.5){
        result.textContent = `Sr (a) (e) (i) ${user} , su nota final es ${operationResult}, y perdió la materia`
        result.style.color = 'red'
    }

    if(operationResult >= 3.5 & operationResult <= 4.5){
        result.textContent = `Sr (a) (e) (i) ${user} , su nota final es ${operationResult}, y ganó la materia`
        result.style.color = 'orange'
    }

    if(operationResult >= 4.5){
        result.textContent = `Sr (a) (e) (i) ${user} , su nota final es ${operationResult}, y eres sobresaliente`
        result.style.color = 'green'
    }
}

function predecirNota() {
    let user = username.value;
    let note1 = Number(data1.value);
    let note2 = Number(data2.value);
    let promedioDeseado = 3.5;

    
    let note3 = (promedioDeseado - (note1 * 0.3 + note2 * 0.3)) / 0.4;
    let note3Necesaria = note3.toFixed(2); 

    if (note3Necesaria > 5) {
        result.textContent = `Sr (a) (e) (i) ${user}, no puede aprobar, ya que necesita una tercera nota mayor a 5.`;
        result.style.color = 'red';
    } else if (note3Necesaria <= 0) {
        result.textContent = `Sr (a) (e) (i) ${user}, ha aprobado la materia con las primeras dos notas.`;
        result.style.color = 'green';
    } else {
        result.textContent = `Sr (a) (e) (i) ${user}, para aprobar la materia necesita ${note3Necesaria} en la tercera nota.`;
        result.style.color = 'orange';
    }
}