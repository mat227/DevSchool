import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listarAluno() {
        let r = await api.get(`/matricula/`);
        return r.data;
    }


    async inserirAluno(nome, chamada, curso,turma,mensagem) {
        let inserir = {
            nmaluno: {
                nome: nome
            },
            numero: {
                numero: chamada
            },
            curso: {
                numero: curso
            },
            turma: {
                numero: turma
            },
            mensagem: mensagem
        }
        let r = await api.post(`/matricula`, inserir);
        return r.data;
    }

    async removerAluno(id) {
        let r = await api.delete(`/matricula/${id}`);
        return r.data;
    }

    async alteraraluno(id, msg) {
        let r = await api.put(`/matricula/${id}` , {mensagem:msg});
        return r.data;
    }

}