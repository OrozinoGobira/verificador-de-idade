function verificar (){
  var data = new Date ()
  var ano = data.getFullYear ()

  var fano = document.getElementById ('txtano')
  var res = window.document.getElementById ('res')
  
  if (fano.value > ano || fano.value.length == 0){
    alert `ERRO, verifica os dados`
  } else {
   var fsex = window.document.getElementsByName ('radsex')
   var idade = ano - Number(fano.value)
   var genero = " "
   var img = document.createElement ('img')
   img.setAttribute ('id','foto')
   img.width=300;
   img.height=300;
   img.style.alignItems='center'
   img.style.borderRadius="50%"
   if (fsex[0].checked){
    genero='Homem'
    document.body.style.background='#468eec'
    if (idade > 0 && idade <= 10){
      res.innerHTML=`Um ${genero} com ${idade} anos`
      img.setAttribute('src','foto.bebe.m.jpg')
    } else if (idade >= 11 && idade <=21){
      res.innerHTML=`Um ${genero} com ${idade} anos`
      img.setAttribute('src','foto.jovem.m.jpg')
    } else if (idade >=22 && idade < 55){
      res.innerHTML=`Um ${genero} com ${idade} anos`
      img.setAttribute('src', 'foto.adulto.m.jpg')
    } else {
      res.innerHTML=`Um ${genero} com ${idade} anos `
      img.setAttribute('src', 'foto.idoso.m.jpg')
    }
   }
    if (fsex[1].checked) {
      genero='Mulher'
      document.body.style.background="#ffcbdb"
      if (idade >0 && idade <=10){
        res.innerHTML=`Uma ${genero} com ${idade} anos`
        img.setAttribute ('src', 'foto.bebe.f.jpg')
      }
      else if (idade  <= 21){
        res.innerHTML=`Uma ${genero} com ${idade} anos`
        img.setAttribute('src', 'foto.jovem.f.jpg')
      } else if (idade <=55){
        res.innerHTML=`Uma ${genero} com ${idade} <br>`
        img.setAttribute('src','foto.adulto.f.jpg')
      } else {
        res.innerHTML=`Uma ${genero} com ${idade} anos`
        img.setAttribute('src', 'foto.idoso.f.jpg')
      }
    }
  }
  res.style.textAlign='center'
  res.appendChild(img);
  }