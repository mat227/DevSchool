import { ContainerConteudo } from "./styled";
import Api from "../../service/api";
import { useEffect, useState, useRef } from "react";
import Menu1 from "../../components/Menu";

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

    if (idAlterando == 0) {
      let r = await api.inserirAluno(nomeAluno, chamada, curso, turma);
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
      <LoadingBar color="red" ref={loading} />
      <Menu1></Menu1>
     
      <div className="box-direira">
        <header className="cabecalho-box-direira">
          <div className="usuario">
            <div>
              <img src="/assets/imagens/imgmat.png" alt="" />
              <div className="divDentroIMG">3</div>
            </div>

            <div>
              Olá, <span>Matheus Oliveira</span>
            </div>
          </div>
          <div className="botoes1">
            <button>
              <img src="/assets/imagens/atualizar.svg" alt="" />
            </button>
            <button>
              <img src="/assets/imagens/log-out.svg" alt="" />
            </button>
          </div>
        </header>
        <div className="barra-botao1"></div>

        <div className="corpo-box-direira">
          <div className="cadastrar-estudante">
            <div className="txt-estudante">
              <div className="barra-estudante"></div>
              <div className="oie">
                {idAlterando == 0 ? "Novo Aluno" : `Alterando Aluno ${nomeAluno} ID=${idAlterando}`}
              </div>
            </div>

            <div className="box-inputs">
              <div className="sub-box-inputs">
                <div className="input-item">
                  Nome:
                  <input
                    type="text"
                    value={nomeAluno}
                    onChange={(r) => setNomeAluno(r.target.value)}
                  />
                </div>
                <div className="input-item">
                  Chamada:
                  <input
                    type="text"
                    value={chamada}
                    onChange={(r) => setChamada(r.target.value)}
                  />
                </div>
              </div>

              <div className="sub-box-inputs">
                <div className="input-item">
                  Curso:
                  <input
                    type="text"
                    value={curso}
                    onChange={(r) => setCurso(r.target.value)}
                  />
                </div>
                <div className="input-item">
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

          <div className="lista-matricula">
            <div className="txt-matricula">
              <div className="barra-matricula"></div>
              <div className="txt-matricula">Alunos Matriculados</div>
            </div>

            <table className="tabela-matriculados">
              <thead>
                <tr>
                  <th> ID </th>
                  <th> Nome </th>
                  <th> Chamada </th>
                  <th> Turma </th>
                  <th> Curso </th>
                  <th className="espaco"> </th>
                  <th className="espaco"> </th>
                </tr>
              </thead>
              <tbody>
                {alunos.map((item, i) => (
                  <tr classNameName={i % 2 == 0 ? "Linha-alterada" : ""}>
                    <td> {item.id_matricula} </td>
                    <td title={item.nm_aluno}>
                      {item.nm_aluno != null && item.nm_aluno.length >= 25
                        ? item.nm_aluno.substr(0, 25) + "..."
                        : item.nm_aluno}
                    </td>
                    <td> {item.nr_chamada} </td>
                    <td> {item.nm_turma} </td>
                    <td> {item.nm_curso} </td>
                    
                    <td className="espaco">
                      <button onClick={() => editar(item)}>
                        <img src="/assets/imagens/edit.svg" alt="" />
                      </button>
                    </td>
                    <td className="espaco">
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
