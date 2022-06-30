import "./Button.css";

function Button({tit, sub, tit2, sub2}){
    return(

        <button className="container">
            <div className="primeiro">
            <strong><div className="titulo">{tit}</div></strong>
            <div className="subtitulo">{sub}</div>
            </div>
        
            <div className="segundo">
            <strong><div className="titulo2">{tit2}</div></strong>
            <div className="subtitulo2">{sub2}</div>
            </div>
        </button>
    );
}
export default Button;