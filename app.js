const root=ReactDOM.createRoot(document.getElementById("root"));


const heading = React.createElement(
    "h1",
    {id:"heading"},
    " Namaste React");

    


  const tree=React.createElement("div",{className:"parent"},

                   React.createElement("div",{className:"children"},
                      [ React.createElement("h1",{key:1},"I am the grand-child"),
                       React.createElement("h2",{key:2},"I am the grand-child"),
                       React.createElement("h3",{key:3},"I am the grand-child"),
                       React.createElement("h4",{key:4},"I am the grand-child"),
                       React.createElement("h5",{key:5},"I am the grand-child"),
                       React.createElement("h6",{key:6},"I am the grand-child"),
]
    )
  )  
   root.render(tree);
console.log(tree);