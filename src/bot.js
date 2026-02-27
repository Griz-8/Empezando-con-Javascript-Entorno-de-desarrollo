function saludar(nombre, genero, edad, idioma) {
  const fecha = new Date();
  const hora = fecha.getHours();
  let saludo;
  if(idioma === 'espaniol')
  {
  if(hora <12)
  {
    saludo = 'Buenos dias ';
  }
   if(hora >=12 && hora < 19)
  {
    saludo = 'Buenas tardes ';
  }
  else
  {
    saludo = 'Buenas noches ';
  }
if(edad>30){
  if (genero==='femenino'){
    saludo=saludo + 'señora ';
  }
  if (genero==='masculino'){
    saludo=saludo + 'señor ';
  }
}
else{
  if (genero==='femenino'){
    saludo=saludo + 'señorita ';
  }
  if (genero==='masculino'){
    saludo=saludo + 'señorito ';
  }
}
  }

  if(idioma === 'ingles')
  {
  if(hora <12)
  {
    saludo = 'Good Morning ';
  }
   if(hora >=12 && hora < 19)
  {
    saludo = 'Good Afternoon ';
  }
  else
  {
    saludo = 'Good evening ';
  }
if(edad>30){
  if (genero==='femenino'){
    saludo=saludo + 'Lady ';
  }
  if (genero==='masculino'){
    saludo=saludo + 'Sir ';
  }
}
else{
  if (genero==='femenino'){
    saludo=saludo + 'Miss ';
  }
  if (genero==='masculino'){
    saludo=saludo + 'Mister ';
  }
}
  }
  saludo = saludo + nombre;
  return saludo;
}

export default saludar;