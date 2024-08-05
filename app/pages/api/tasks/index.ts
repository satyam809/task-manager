import { NextApiRequest, NextApiResponse } from 'next';
import Task from '../../../models/task';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const { title, description } = req.body;
    const newTask = await Task.create({ title, description });
    res.status(201).json(newTask);
  }
}
