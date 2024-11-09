function Perfil({ foto }) {


    return (
        <div className="perfil">
            <button>Entrar</button>
            <img src={foto} id="faculHub" alt="Facul Hub" />
            <h1>FalculHub</h1>
            <p>Inscrições: 7</p>
        </div>
    )
}
export default Perfil