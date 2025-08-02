// IMPORTANDO COMPONENTES EXTERNOS Y USANDO EXPRESIONES CON JSX

import ComponenteDespedida from "./components/ComponenteDespedida";
import {ComponenteSaludo} from "./components/ComponenteSaludo";
import {LISTA_DE_FRUTAS, EDAD} from './components/frutas'

export default function App() {
  // Lógica
  const nombre = 'Yahaira'

  // Comentario en React dentro del cuerpo de la función

  /* Otro comentario multilínea */

  return (
    <>
      <div>
        <h1>Hola React!</h1>
        <p>Estoy en el bootcamp!</p>

        <p>{1 + 2 + 9 ** 2}</p>

        <p>{`Hola ${nombre}!`}</p>

        <p>{EDAD}</p>

        <p>{LISTA_DE_FRUTAS}</p>   

        {/* Comentario en React dentro del JSX */}
      </div>
      <ComponenteSaludo />
      <ComponenteDespedida />
    </>
  )
}


// ANIDANDO COMPONENTES DENTRO DE OTROS

// function ComponenteSaludo() {
//   return <h4>Hola Alumnos</h4>
// }

// function ComponenteDespedida() {
//   return <h4>Adios Alumnos</h4>
// }

// export default function App() {
//   return (
//     <>
//       <div>App</div>
//       <ComponenteSaludo />
//       <ComponenteDespedida />
//     </>
//   )
// }


// EXTENSIÓN NECESARIA PARA USAR REACT EN VSCODE
// ES7+ React/Redux/React-Native snippets
//https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

// SNIPPETS PARA CREAR COMPONENTS (rafce y rfc)

// rafce

//const App = () => {
//  return (
//    <div>App</div>
//  )
//}

//export default App

// rfc

// export default function App() {
//  return (
//    <div>App</div>
//  )
//}

// COMPONENTE USANDO MULTIPLES LÍNEAS + FRAGMENT

// function App() {
//  return(
//    <>
//      <h1>Hola React 3</h1>
//      <h2>Subtitulo</h2>
//    </>
//  )
//}

//export default App

// COMPONENTE USANDO ARROW FUNCTION

// const App = () => {
  //  Lógica del componente

//   return (
//     <h1>Hola React 2</h1>
//   )
// }

// export default App

// COMPONENTE USANDO FUNCTION

// function App() {
//   return (
//     <h1>Hola React</h1>
//   )
// }

// export default App