<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, inicial-scale=1.0">>
  <title>Lista</title>
 </head>
 <body>
  <ul id="area"></ul>

  <script src="script.js">
    function createList(quantidadeitens, mensagem) {
      var quantidadeitens = Number(prompt("Quantas linhas seram criadas? "));
      console.log(quantidadeitens);
      var texto = (prompt("Qual será a mensagem impresa? ")); 
      console.log(mensagem);
      var textoNumber = 0;

      for (var i = 0; i < quantidadeitens; i++) {
        textoNumber++;
        var node = document.createElement("li");               
        var textnode = document.createTextNode(`${texto} ${textoNumber}`); 
        node.appendChild(textnode);                              
        document.getElementById("area").appendChild(node);
      }

    }
    createList();
  </script>
</body>

</html>
