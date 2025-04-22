// export default function TabButtom (props){
//     return <li><button>{props.children}</button></li>;
// }

// DUDA PORQUE SI LE PONGO OTRO NOMBRE FUNCIONA? tapbutton
export default function TabButton ({children, onSelect}){

    return (
        <li>
            <button onClick ={onSelect}>{children}</button>
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