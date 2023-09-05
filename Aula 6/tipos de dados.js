var livro = new Object();
livro.titulo = "A Bela e a Adormecida";
livro.autor = "Neil Gaiman";
livro.editora = "Rocco Jovens Leitores";
livro.anoPublicacao = 2015;
livro.edicao="1ª";
livro.paginas=72;
livro.preco="R$ 30,00";
livro.frete= function(ceporigem, cepdestino,peso){
    var valorFrete=" ";
    //script do calculo frete
    return valorFrete;
}
livro.capitulo1="Era o reino mais proximo";
livro.capitulo2="A rainha acordou cedo";
livro.capitulo3="Os tres anos emergiram";
livro.capitulo4="Dormindo? perguntou a rainha";
livro.capitulo5="Ela cavalgou um dia inteiro";
livro.capitulo6="O castelo na floresta de acaire";

var nomeAutor=livro.autor;
var nomeEditora=livro.editora
alert("autor: " + nomeAutor + "\nEditora: " + nomeEditora);