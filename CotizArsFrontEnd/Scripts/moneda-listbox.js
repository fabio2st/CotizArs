//import React from "react";
//import { Listbox, ListboxOption } from "@reach/listbox";
//import VisuallyHidden from "@reach/visually-hidden";
//import { action } from "@storybook/addon-actions";
//import "@reach/listbox/styles.css";

//let name = "Basic";

//function MonedaListBox(monedas[]) {
//    return (
//        <div>
//            //<VisuallyHidden id="moneda-label">Elija una moneda</VisuallyHidden>
//            //<Listbox
//            //    aria-labelledby="moneda-label"
//            //    defaultValue={monedas[0]}
//            //    onChange={action("value changed")}
//            //>
//            //    {MonedaList(monedas)}
//            //</Listbox>
//        </div>

//    );
//}

//function MonedaList(monedas[]) {
//    return monedas.map((moneda, item) => {
//        return (
//            < ListboxOption value={moneda}>
//                {moneda} < {moneda} />
//            </ListboxOption >
//        )
//    })
//} 

//function Moneda() {
//    return (
//        <span aria-hidden style={{ display: "inline-block", margin: "0 4px" }}>
//            🌮

//        </span>

//    );

//}



//function Tag(props) {

//    return (

//        <span

//            style={{

//                display: "inline-block",

//                lineHeight: 1,

//                fontSize: 11,

//                textTransform: "uppercase",

//                fontWeight: "bolder",

//                marginLeft: 6,

//                padding: 4,

//                background: "crimson",

//                borderRadius: 2,

//                color: "#fff",

//            }}

//            {...props}

//        />

//    );

//}

//MonedaListBox.story = { name };
//export const Comp = MonedaListBox;
//export default { title: "MonedaListbox" };