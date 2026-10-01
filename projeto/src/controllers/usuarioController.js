import * as usuarioModel from "../models/usuarioModel.js";

export const getAll = async (req, res) => {
    try {
        const rows = await usuarioModel.listarUsuarios();
        res.json(rows);
    } catch (e) {
        res.status(500).json({ erro: "Falha ao listar usuários" });
    }
};

export const create = async (req, res) => {
    try {
        const { nome, email } = req.body;
        const insertId = await usuarioModel.criarUsuario(nome, email);
        res.status(201).json({ id: insertId, nome, email });
    } catch (e) {
        res.status(500).json({ erro: "Falha ao criar usuário" });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email } = req.body;
        const affectedRows = await usuarioModel.atualizarUsuario(id, nome, email);
        if (!affectedRows) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }
        res.json({ mensagem: "Atualizado com sucesso" });
    } catch (e) {
        res.status(500).json({ erro: "Falha ao atualizar usuário" });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const affectedRows = await usuarioModel.deletarUsuario(id);
        if (!affectedRows) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }
        res.json({ mensagem: "Deletado com sucesso" });
    } catch (e) {
        res.status(500).json({ erro: "Falha ao deletar usuário" });
    }
};
