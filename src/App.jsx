import Button from "./Button";

function App(){
  const botao = [
    {
      tit: "PREVIOUS",
      sub: "JQUERY: DETECT UPDATE OF HTML ELEMENT",
    },
    {
      tit2: "NEXT",
      sub2: "RAILS + DEVISE WORKING WITH MULTIPLE MODELS"
    },
  ];

  return (
    <div>
      {botao.map((boton) => {
        return <Button key={boton}
                tit={boton.tit}
                sub={boton.sub}
                tit2={boton.tit2}
                sub2={boton.sub2}
                />;
      })
      }
    </div>
  )
}
export default App;