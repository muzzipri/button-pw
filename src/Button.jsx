import "./Button.css";

function Button({titu, subi, titu2, subi2}){
    return(

        <button className="container">
            <div className="primeirobotao">
            <strong><div className="titulo">{titu}</div></strong>
            <div className="subtitulo">{subi}</div>
            </div>
        
            <div className="segundobotao">
            <strong><div className="titulo2">{titu2}</div></strong>
            <div className="subtitulo2">{subi2}</div>
            </div>
        </button>
    );
}
export default Button;