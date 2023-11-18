const listaPrincipal = [];

const agregarNumero = (evento) => {
  evento.preventDefault();
  const numero = document.getElementById('number');
  listaPrincipal.push(Number(numero.value));
  document.getElementById('numberList').innerHTML = '';
  numero.value = '';
  mostrarLista();
};

const mostrarLista = () => {
  const tabla = document.getElementById("numberList");
  listaPrincipal.map((e, i) => {
    tabla.innerHTML += `
        <tr>
        <th>${i}</th>
        <td>${e}</td>
        </tr>
        `;
  });
};

const procesarLista = () => {
  let total = 0;
  listaPrincipal.map(e => total += e);
  let promedio = total / listaPrincipal.length;
  let minimo = Math.min(...listaPrincipal);
  let maximo = Math.max(...listaPrincipal);
  const lista = document.getElementById('processList');
  lista.innerHTML = `
        <li>Suma total: ${total}</li>
        <li>Promedio: ${promedio}</li>
        <li>Mínimo: ${minimo}</li>
        <li>Máximo: ${maximo}</li>
        `;
};
