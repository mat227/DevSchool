    import { ContainerConteudo } from "./styled";



    export default function Conteudo() {


        return(
            <ContainerConteudo>
                <div class="lateralEsquerda">
                    <header class="header-lateralEsquerda">
                        <div class="img-livro"> <img src="/assets/imagens/book.svg" /></div>
                        <div class="devSchool"> <span>Dev</span> School</div>
                    </header>
                    <div class="blocoPreto"></div>
                    <div class="lateralEsquerda-gerente">
                        <div> Gerenciamento </div>
                        <img src="/assets/imagens/setaparabaixo.svg" />
                    </div>
                    <div class="lateralEsquerda-aluno">
                        <div> Alunos </div>
                    </div>


                </div>

                <div class="box-direira">
                    <header class="cabecalho-box-direira">
                        <div class="usuario">
                           <div> <img src="/assets/imagens/imgmat.png" alt=""/>
                           <div class="divDentroIMG">3</div>
                           </div>
        
                            
                            <div>Olá, <span>Matheus Oliveira</span></div>
                        </div>
                        <div class="botoes1">
                            <button> <img src="/assets/imagens/atualizar.svg" /></button>
                            <button> <img src="/assets/imagens/log-out.svg" /></button>
                        </div>
                    </header>
                    <div class="barra-botao1"></div>

                    <div class="corpo-box-direira">
                        <div class="cadastrar-estudante">
                            <div class="txt-estudante">
                                <div class="barra-estudante"></div>
                                <div class="oie">Novo Aluno</div>
                            </div>

                            <div class="box-inputs">
                                <div class="sub-box-inputs">
                                    <div class="input-item">
                                        Nome: <input type="text"/> 
                                    </div>
                                    <div class="input-item">
                                        Chamada: <input type="text"/>
                                    </div>
                                </div>

                                <div class="sub-box-inputs">
                                    <div class="input-item"  >
                                        Curso: <input type="text"/> 
                                    </div>
                                    <div class="input-item">
                                        Turma: <input type="text"/>
                                    </div>
                                </div>

                                <button>Cadastrar</button>

                            </div>

                        </div>

                        <div class="lista-matricula">
                            <div class="txt-matricula">
                                <div class="barra-matricula"></div>
                                <div class="txt-matricula">Alunos Matriculados</div>
                            </div>

                            <table class="tabela-matriculados">
                                <thead>
                                    <tr>
                                        <th> ID </th>
                                        <th> Nome </th>
                                        <th> Chamada </th>
                                        <th> Turma </th>
                                        <th> Curso </th>
                                        <th class="espaco"> </th>
                                        <th class="espaco"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> 1 </td>
                                        <td> Matheus Oliveira Lima Dos Santos</td>
                                        <td> 39 </td>
                                        <td> InfoC </td>
                                        <td> Informática </td>
                                        <td> <button> <img src="/assets/imagens/edit.svg" alt="" /> </button>
                                        </td>
                                        <td class="imgs-delet-edit"> <button> <img
                                                    src="/assets/imagens/trash-2.svg" alt="" /> </button>
                                        </td>
                                    </tr>
                                    <tr class="info">
                                        <td> 2 </td>
                                        <td> Lucas Bedeu</td>
                                        <td> 16 </td>
                                        <td> InfoA </td>
                                        <td> Informática </td>
                                        <td class="td-button"> </td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td> 3 </td>
                                        <td> Laura Rodrigues</td>
                                        <td> 17 </td>
                                        <td> InfoD </td>
                                        <td> Informática </td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                                    <tr class="info">
                                        <td> 4 </td>
                                        <td> Gabriel</td>
                                        <td> 18 </td>
                                        <td> InfoB </td>
                                        <td> Informática </td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                                    <tr class="info">
                                        <td> 4 </td>
                                        <td> Gabriel</td>
                                        <td> 18 </td>
                                        <td> InfoB </td>
                                        <td> Informática </td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                                    <tr class="info">
                                        <td> 4 </td>
                                        <td> Gabriel</td>
                                        <td> 18 </td>
                                        <td> InfoB </td>
                                        <td> Informática </td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                                    <tr class="info">
                                        <td> 4 </td>
                                        <td> Gabriel</td>
                                        <td> 18 </td>
                                        <td> InfoB </td>
                                        <td> Informática </td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                                    <tr class="info">
                                        <td> 4 </td>
                                        <td> Gabriel</td>
                                        <td> 18 </td>
                                        <td> InfoB </td>
                                        <td> Informática </td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                                    <tr class="info">
                                        <td> 4 </td>
                                        <td> Gabriel</td>
                                        <td> 18 </td>
                                        <td> InfoB </td>
                                        <td> Informática </td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </ContainerConteudo>
        )
    }

