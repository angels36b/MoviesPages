# Ejercicios

<!-- Documentacion tecnica
ciclo de vida de un componente
* 
Reglas para manejar los hooks.
1. Se debe  ejecutar en la cabecera o logica  del componente
2. NO se puede cargar en condicionales ni ciclos
cada vez que actualizo un estado se vuelve a renderizar el componente
3. LOs estados se actualizan en la segunda carga

*/

/*SE ejecuta Siempre que se ejecuta un componente o hay un cambio de estado
  useEffect(() => {
  setText('desde el componente')
  console.log('carga del componente')
}) */

//Se ejecuta cuando hay un cambio en alguna dependencia 
useEffect se activa al cargar un componente= se construye con una funcion flecha y arreglo de dependencia

-->