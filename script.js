var state = { retornoContador: [] };

function contador() {
  converterValores();
  contadorPronto();
  resetarContador();
}

function contadorPronto() {
  var msg = document.querySelector('#txt');
  msg.innerHTML = '';
  msg.innerHTML = state.retornoContador.join(' ➡ ');
}

function converterValores() {
  var begin = document.getElementById('start');
  var begin = Number(begin.value);
  var end = document.getElementById('end');
  var end = Number(end.value);
  var step = document.getElementById('step');
  var step = Number(step.value);

  if (step < 0) {
    window.alert('Não é aceito números negativos.');
    return;
  }
  if (step === 0) {
    window.alert('Não é aceito passo 0, alterando para 1.');
    return;
  }

  if (begin < end) {
    for (var i = begin; i <= end; i += step) {
      state.retornoContador.push(i);
    }
    return;
  }

  if (begin > end) {
    for (let i = begin; i >= end; i -= step) {
      state.retornoContador.push(i);
    }
    return;
  }
}

function resetarContador() {
  state.retornoContador = [];
}
contador();
