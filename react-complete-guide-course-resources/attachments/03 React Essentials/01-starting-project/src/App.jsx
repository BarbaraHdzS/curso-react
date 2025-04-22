
import componentImg from './assets/components.png';

import { CORE_CONCEPTS } from './data-with-examples.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';



// function CoreConcept (props){
//   return(
//     <li>
//       <img src={props.image} alts={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }


function App() {

//   function handleSelect(selectedButton){
//     console.log(selectedButton);
// }

  return (
    <div>
      <Header />
      <main>   
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* manera uno usando manual todo */}
            <CoreConcept
            title="Components"
            description="The core IU building block"
            image = {componentImg}/>
           {/* manera dos importando el archivo y poniendo propiedad por propiedad */}
            <CoreConcept
             title={CORE_CONCEPTS[1].title}
             description={CORE_CONCEPTS[1].description}
             image = {CORE_CONCEPTS[1].image}/>
          {/* manera 3 trayendo todas las propiedasdes en un indice indicado */}
            <CoreConcept   
            {...CORE_CONCEPTS[2]}/>
            <CoreConcept   
            {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        {/* como se puede poner una funcion como botones */}
        <section id= "examples">
          <h2>Examples</h2>
          <menu>
            {/* composicion de omponente */}
            {/* <TabButton onSelect={()=> handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={()=> handleSelect('jxs')}>JSX</TabButton>
            <TabButton onSelect={()=> handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=> handleSelect('state')}>State</TabButton> */}
            <TabButton>components</TabButton>
            <TabButton>jsx</TabButton>
            <TabButton>prop</TabButton>
            <TabButton>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;