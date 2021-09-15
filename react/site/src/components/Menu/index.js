import { Menucss } from "./styled"

export default function Menu1(){
    return(
<Menucss>  
     <header className="header-lateralEsquerda">
          <div className="img-livro">
            <img src="/assets/imagens/book.svg" alt="" />
          </div>
          <div className="devSchool">
            <span>Dev</span> School
          </div>
        </header>
        <div className="blocoPreto"></div>
        <div className="lateralEsquerda-gerente">
          <div> Gerenciamento </div>
          <img src="/assets/imagens/setaparabaixo.svg" alt="" />
        </div>
        <div className="lateralEsquerda-aluno">
          <div> Alunos </div>
        </div>
        </Menucss>    
    )
}