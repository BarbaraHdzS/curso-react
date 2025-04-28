
// export default function TabButtom (props){
//     return <li><button>{props.children}</button></li>;
// }

// DUDA PORQUE SI LE PONGO OTRO NOMBRE FUNCIONA? tapbutton
export default function TabButton ({children, onSelect, isSelected}){

    return (
        <li>
            {/* atributo condicional para el boton */}
            <button className= {isSelected ? 'active' : undefined} onClick ={onSelect}>{children}</button>
        </li>
    );
}

// export default function TabButton ({children}){

//     function handleSelect(cotorrearParam){
//         console.log( cotorrearParam);
//     }

//     return (
//         <li>
//             <button onClick={()=> handleSelect(children)}>{children}</button>
//         </li>
//     );
// }