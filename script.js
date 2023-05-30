const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// teste (Marca Tudo Comentado = Control+;)
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// e = enter
// i = imes
// a = ai
// o = ober
// u = ufat

//Precisamos criar uma MATRIZ para condensar todas as chaves.
//let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"] , ["u" , "ufat"]];

//Podemos ver a Matriz no CONSOLE (Teste): console.table() Abrindo o Fulano posteriormente no Navegador usando o DevTools/Console/Inspencionar
//console.table(matrizCodigo) depois de testar no DevTools pode comentar as linhas acima e seguir codando.

//2-Depois precisamos criar a função para o Botão. Não vai receber parâmetros pois é só um procedimento.

//FUNÇÃO DO BOTÃO ENCRIPTAR:
function btnEncriptar() 
{
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;  //valor do campo mensagem, atribuir texto encriptado.
    //Para que o cursor fique limpo piscando:
    textArea.value = "";  //para ele ficar limpo, atribui aspas vazias e sem espaço
}

//1-Precisamos usar a MATRIZ em uma FUNçÃO:
function encriptar(stringEncriptada) 
{
    //declaramos a variável. O seu valor está em text
    const textoEncriptado = encriptar
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"] , ["u" , "ufat"]];
    //precisamos criar parâmetros para a função dentro do parentese acima:
    // atraibuimos a func à própria func 
    // método toLowerCase para resolver a exigência sobre letras minusculas
    stringEncriptada = stringEncriptada.toLowerCase();
    //para percorrer toda a matriz, precisamos do laço for com 3 parâmetros
    for(let i = 0; i < matrizCodigo.length; i++) 
    {
        if(stringEncriptada.includes(matrizCodigo[i] [0])) 
        {
        //condição if com o método includes que é boleano(retorna V ou F), com a nossa variavel matrizCodigo com 2 parâmetros(surch element buscado dentro da array e a posição na array) 
        //tendo essa condição verdadeira, precisamos pedir que faça a troca das vogais com replaceAll()
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        //replaceAll faz a conversão de todas as letras
        }
    }
    return stringEncriptada; //chamada da função
    // Precisamos criar outra função para o botão!
}

//FUNÇÃO DO BOTÃO DESENCRIPTAR:
function btnDesencriptar() 
{
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) 
{
    const textoDesencriptado = desencriptar
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) 
    {
        if(stringDesencriptada.includes(matrizCodigo[i] [1])) 
        {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

//FUNÇÔES BOTÃO COPIAR: AINDA NÂO FUNCIONA!

function copiar() 
{
    var copia = document.getElementById("output");

    copia.select();
    copia.selectionRange(0, 99999);

    navigator.clipboard.textArea(copia.value)

}