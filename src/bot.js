function saludar(nombre) {
  const fecha = new Date();
  const hora = fecha.getHours();
  let saludo;
  if(hora <12)
  {
    saludo = 'Buenos dias '
  }
   if(hora >=12 && hora < 19)
  {
    saludo = 'Buenas tardes '
  }
  else
  {
    saludo = 'Buenas noches '
  }
  saludo = saludo + nombre;
  return saludo;
}

export default saludar;