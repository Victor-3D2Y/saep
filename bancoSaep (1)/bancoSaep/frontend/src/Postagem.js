function Postagem({ fotoMain, nomeCurso, instituicao }) {
    const flecha = "./flecha_cima_vazia.svg"
    const chat = "chat.svg"

    return (
        <>
            <div className="titlePubli">
                <p>{nomeCurso}</p>
                <p>{instituicao}</p>

            </div>
            <img src={fotoMain} id="eletromecanica" alt="eletromecanica" />
            <div className="flechaChat">
                <div className="leftMain">
                    <img src={flecha} alt="flecha" />
                    <p>4</p>
                </div>
                <div className="leftMain">
                    <img src={chat} alt="chat" />
                    <p>1</p>
                </div>
            </div>
        </>
    )
}
export default Postagem