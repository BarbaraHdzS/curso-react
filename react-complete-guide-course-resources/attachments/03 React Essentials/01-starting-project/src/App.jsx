//funcion especial 
import {useState} from 'react';
import componentImg from './assets/components.png';

import { CORE_CONCEPTS } from './data-with-examples.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data-with-examples.js';



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
//se debe llamar en el nivel superior
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
   
}

let tabContent = <p>please select topic</p>;

if (selectedTopic){
tabContent =(
    <div id= "tab-contente">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
  </pre>
  </div>
);
}

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
            <TabButton onSelect={()=> handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={()=> handleSelect('jxs')}>JSX</TabButton>
            <TabButton onSelect={()=> handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=> handleSelect('state')}>State</TabButton> 
          </menu>
          {/* salida condicional */}
          {tabContent}
         {/* {selectedTopic} lo hacemos dinamico */}
        </section>
      </main>
    </div>
  );
}

export default App;