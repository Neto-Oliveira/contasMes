var valorTotal = 0
var numContas = 0
var tipoconta = ''
function cadastrar_contas() {
  var descricao = document.getElementById('descricao_conta')
  var valor = document.getElementById('valor_conta')
  var listagem = document.getElementById('contas')
  var resultado = document.getElementById('contas2')
  var dinheiro = Number(valor.value)
  //descricao.value = ''
  //valor.value = ''
  //let listacontas = []

  numContas++
  valorTotal = valorTotal + dinheiro

  tipoconta =
    tipoconta + descricao.value + ' - R$: ' + dinheiro + '.00 ' + '\n' + '<br>'

  listagem.innerHTML = tipoconta + '\n'

  resultado.innerHTML =
    numContas + ' contas' + ' totais R$: ' + valorTotal + '.00'
  // listacontas.push(tipoconta.value)
  console.log(tipoconta)

  console.log(valorTotal)
  // contador do estilo antigo  numContas = numContas + 1 , moderno: numContas++
  console.log(numContas)
  //console.log(listacontas[0])
}
