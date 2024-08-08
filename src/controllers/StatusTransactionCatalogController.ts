// src/controllers/StatusTransactionCatalogController.ts
import { Request, Response } from 'express';
import * as StatusTransactionService from '../services/StatusTransactionCatalogService';

export const createStatusTransaction = async (req: Request, res: Response) => {
    try {
        const statusTransaction = await StatusTransactionService.createStatusTransaction(req.body);
        res.status(201).json(statusTransaction);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllStatusTransactions = async (req: Request, res: Response) => {
    try {
        const statusTransactions = await StatusTransactionService.getAllStatusTransactions();
        res.status(200).json(statusTransactions);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getStatusTransactionById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        const statusTransaction = await StatusTransactionService.getStatusTransactionById(id);
        if (statusTransaction) {
            res.status(200).json(statusTransaction);
        } else {
            res.status(404).json({ error: 'Status transaction not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getStatusTransactionByAbbreviation = async (req: Request, res: Response) => {
    try {
        const statusTransaction = await StatusTransactionService.getStatusTransactionByAbbreviation(req.params.abbreviation);
        if (statusTransaction) {
            res.status(200).json(statusTransaction);
        } else {
            res.status(404).json({ error: 'Status transaction not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateStatusTransaction = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        const updatedStatusTransaction = await StatusTransactionService.updateStatusTransaction(id, req.body);
        if (updatedStatusTransaction) {
            res.status(200).json(updatedStatusTransaction);
        } else {
            res.status(404).json({ error: 'Status transaction not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteStatusTransaction = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        const deleted = await StatusTransactionService.deleteStatusTransaction(id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Status transaction not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
