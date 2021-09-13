import { ContainerConteudo } from "./styled";
import Api from "../../service/api";
import { useEffect, useState, useRef } from "react";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingBar from "react-top-loading-bar";

const api = new Api();

export default function Conteudo() {
  const [alunos, setAlunos] = useState([]);
  const [nomeAluno, setNomeAluno] = useState("");
  const [chamada, setChamada] = useState("");
  const [curso, setCurso] = useState("");
  const [turma, setTurma] = useState("");
  const [idAlterando, setIdAlterando] = useState(0);
  const loading = useRef(null);

  const cadastrarAluno = async () => {
    loading.current.complete();
    
    if (nomeAluno == "") toast.error("O campo nome é obrigatório");
    else {
      if (nomeAluno.length < 4)
        toast.error("O campo nome precisa ter no mínimo 4 caracteres");
      else {
        if (chamada == "") toast.error("O campo chamada é obrigatório");
        else {
          if (chamada < 0)
            toast.error("O campo chamada não pode ser menor que 0");
          else {
            if (curso == "") toast.error("O campo curso é obrigatório");
            else {
                if (curso.length < 4)
                toast.error("O campo curso precisa ter no mínimo 4 caracteres");
              else {
              if (turma == "") toast.error("O campo turma é obrigatório");
              else {
                if (turma.length < 4)
                toast.error("O campo turma precisa ter no mínimo 4 caracteres");
              else {
                if (idAlterando == 0) {
                  let r = await api.inserirAluno(
                    nomeAluno,
                    chamada,
                    curso,
                    turma
                  );
                  if (r.erro) toast.error(`${r.erro}`);
                  else toast.dark("Aluno cadastrado com sucesso");
                } else {
                  let r = await api.alteraraluno(
                    idAlterando,
                    nomeAluno,
                    chamada,
                    curso,
                    turma
                  );

                  if (r.erro) toast.error(`${r.erro}`);
                  else toast.dark("Aluno alterado com sucesso");
                }
              }
            }
          }
        }
        }
        }
      }
    }
    listar();
    limparCampos();
  };
  function limparCampos() {
    loading.current.complete();
    setNomeAluno("");
    setChamada("");
    setCurso("");
    setTurma("");
    setIdAlterando(0);
  }

  async function listar() {
    loading.current.complete();
    let a = await api.listarAluno();
    setAlunos(a);
  }

  async function remover(id) {
    loading.current.complete();
    confirmAlert({
      title: "Remover aluno",
      message: `Tem certeza que deseja remover o aluno ${id} ?`,
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            let a = await api.removerAluno(id);
            if (a.erro) {
              toast.dark({ erro: a.toString() });
            } else {
              toast.dark("Aluno removido");
            }
            listar();
          },
        },
        {
          label: "Não",
        },
      ],
    });
  }

  async function editar(item) {
    loading.current.complete();
    setNomeAluno(item.nm_aluno);
    setChamada(item.nr_chamada);
    setCurso(item.nm_curso);
    setTurma(item.nm_turma);
    setIdAlterando(item.id_matricula);
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <ContainerConteudo>
      <ToastContainer />
      <LoadingBar color='red' ref={loading}/>
      <div class="lateralEsquerda">
        <header class="header-lateralEsquerda">
          <div class="img-livro">
            
            <img src="/assets/imagens/book.svg" alt="" />
          </div>
          <div class="devSchool">
            
            <span>Dev</span> School
          </div>
        </header>
        <div class="blocoPreto"></div>
        <div class="lateralEsquerda-gerente">
          <div> Gerenciamento </div>
          <img src="/assets/imagens/setaparabaixo.svg" alt="" />
        </div>
        <div class="lateralEsquerda-aluno">
          <div> Alunos </div>
        </div>
      </div>

      <div class="box-direira">
        <header class="cabecalho-box-direira">
          <div class="usuario">
            <div>
              
              <img src="/assets/imagens/imgmat.png" alt="" />
              <div class="divDentroIMG">3</div>
            </div>

            <div>
              Olá, <span>Matheus Oliveira</span>
            </div>
          </div>
          <div class="botoes1">
            <button>
              
              <img src="/assets/imagens/atualizar.svg" alt="" />
            </button>
            <button>
              
              <img src="/assets/imagens/log-out.svg" alt="" />
            </button>
          </div>
        </header>
        <div class="barra-botao1"></div>

        <div class="corpo-box-direira">
          <div class="cadastrar-estudante">
            <div class="txt-estudante">
              <div class="barra-estudante"></div>
              <div class="oie">
                {idAlterando == 0 ? "Novo Aluno" : "Alterando Aluno"}
              </div>
            </div>

            <div class="box-inputs">
              <div class="sub-box-inputs">
                <div class="input-item">
                  Nome:
                  <input
                    type="text"
                    value={nomeAluno}
                    onChange={(r) => setNomeAluno(r.target.value)}
                  />
                </div>
                <div class="input-item">
                  Chamada:
                  <input
                    type="text"
                    value={chamada}
                    onChange={(r) => setChamada(r.target.value)}
                  />
                </div>
              </div>

              <div class="sub-box-inputs">
                <div class="input-item">
                  Curso:
                  <input
                    type="text"
                    value={curso}
                    onChange={(r) => setCurso(r.target.value)}
                  />
                </div>
                <div class="input-item">
                  Turma:
                  <input
                    type="text"
                    value={turma}
                    onChange={(r) => setTurma(r.target.value)}
                  />
                </div>
              </div>

              <button onClick={cadastrarAluno}>
                {idAlterando == 0 ? "Cadastrar" : "Alterar"}
              </button>
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
                {alunos.map((item, i) => (
                  <tr className={i % 2 == 0 ? "Linha-alterada" : ""}>
                    <td> {item.id_matricula} </td>
                    <td title={item.nm_aluno}>
                      
                      {item.nm_aluno != null && item.nm_aluno.length >= 25
                        ? item.nm_aluno.substr(0, 25) + "..."
                        : item.nm_aluno}
                    </td>
                    <td> {item.nr_chamada} </td>
                    <td> {item.nm_curso} </td>
                    <td> {item.nm_turma} </td>
                    <td className="espaco">
                      
                      <button onClick={() => editar(item)}>
                        
                        <img src="/assets/imagens/edit.svg" alt="" />
                      </button>
                    </td>
                    <td class="espaco">
                      
                      <button onClick={() => remover(item.id_matricula)}>
                        
                        <img src="/assets/imagens/trash-2.svg" alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ContainerConteudo>
  );
}
