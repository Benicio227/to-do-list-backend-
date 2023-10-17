let tarefas = require('../bancodedados/tarefas');

const listarTarefas = (req, res) => {

    return res.status(200).json(tarefas);

};

const detalharTarefa = (req, res) => {

   const { id } = req.params;

   const tarefaEncontrada = tarefas.find((tarefa) => {

    return tarefa.id === Number(id);

   });

   if (!tarefaEncontrada) {

    return res.status(400).json({mensagem: 'Tarefa não encontrada'});;
    
   };

   if (tarefaEncontrada) {

    return res.json(tarefaEncontrada);

   };

};

const criarTarefas = (req, res) => {
  
    const { titulo, descricao, status } = req.body;
    
    if (!titulo) {

        return res.status(400).json({mensagem: 'O campo titulo é obrigatório'});
    };

    if (!descricao) {

        return res.status(400).json({mensagem: 'O campo descricao é obrigatório'});
    };

    if (typeof status !== 'boolean') {

        return res.status(400).json({mensagem: 'O campo status é obrigatório e deve ser do tipo true ou false'});
    };

    let id = tarefas[tarefas.length - 1].id + 1;

    const tarefa = {
        id,
        titulo,
        descricao,
        status
    };
 
    tarefas.push(tarefa);

    return res.status(200).json(tarefa);
};

const atualizarTarefa = (req, res) => {

    const { id } = req.params;

    const { titulo, descricao, status } = req.body;

    if (!titulo) {

        return res.status(400).json({mensagem: 'O campo titulo é obrigatório'});
    };

    if (!descricao) {

        return res.status(400).json({mensagem: 'O campo descricao é obrigatório'});
    };

    if (typeof status !== 'boolean') {

        return res.status(400).json({mensagem: 'O campo status é obrigatório'});
    };

    const tarefaEncontrada = tarefas.find((tarefa) => {

        return tarefa.id === Number(id);

    });

    tarefaEncontrada.titulo = titulo;

    tarefaEncontrada.descricao = descricao;

    tarefaEncontrada.status = status;

    return res.status(204).send();
};

const excluirTarefa = (req, res) => {

    const { id } = req.params;

    tarefas = tarefas.find((tarefa) => {

        return tarefa.id !== Number(id);
    });

    return res.status(204).send();

};


module.exports = {
    listarTarefas,
    detalharTarefa,
    criarTarefas,
    atualizarTarefa,
    excluirTarefa
};