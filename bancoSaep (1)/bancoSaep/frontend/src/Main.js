import Postagem from "./Postagem"

function Main({ fotoMain }) {

    return (
        <div id="tudo">
            <h2>Cursos</h2>
          
                <Postagem nomeCurso="Eletromecânica" fotoMain="eletromecanica.png" instituicao="PUC-MG" />
                <Postagem nomeCurso="Inteligência Artificial" fotoMain="inteligencia_artificial.png" instituicao="PUC-MG" />
       
        </div>
    )
}
export default Main