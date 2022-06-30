import Button from "./Button";

function App(){
  const botao = [
    {
      titu: "PREVIOUS",
      subi: "JQUERY: DETECT UPDATE OF HTML ELEMENT",
    },
    {
      titu2: "NEXT",
      subi2: "RAILS + DEVISE WORKING WITH MULTIPLE MODELS"
    },
  ];

  return (
    <div>
      {botao.map((boton) => {
        return <Button key={boton}
                titu={boton.titu}
                subi={boton.subi}
                titu2={boton.titu2}
                subi2={boton.subi2}
                />;
      })
      }
    </div>
  )
}
export default App;