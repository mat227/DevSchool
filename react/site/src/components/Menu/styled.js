import styled from "styled-components";


const Menucss=styled.div`

  display: flex;
  flex-direction: column;

  background-color: #2b3031;
  position: sticky;
  top: 0px;
  height: 100vh;


.Linha-alterada{
  background-color: #f5f5f5;
}

.header-lateralEsquerda {
  display: flex;
  flex-direction: row;

  margin: 3em;
  align-items: center;
  justify-content: center;
}

.img-livro {
  border-right: 10px solid transparent;
}

.devSchool {
  color: white;
  font-size: 1.75em;
  font-family: "Roboto";
  font-weight: 700;
}

.devSchool span {
  color: #ea10c7;
  font-family: "Roboto";
  font-weight: 700;
}

.blocoPreto {
  background-color: #262626;
  width: 21.6em;
  height: 3.8em;
}

.lateralEsquerda-gerente {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  height: 70px;
}

.lateralEsquerda-gerente img {
  cursor: pointer;
}

.lateralEsquerda-gerente div {
  color: white;

  font-size: 1.12em;
  font-weight: 500;
  font-family: "Roboto";

  margin-left: 1em;
}

.lateralEsquerda-aluno {
  display: flex;
  flex-direction: row;

  height: 3.43em;

  background-color: white;
  border-left: 4px solid #ea10c7;

  color: #1a1a1a;
  font-size: 1.2em;
  font-weight: 500;
  font-family: "Roboto";

  align-items: center;

  padding-left: 4.3em;
}


`

export {Menucss}