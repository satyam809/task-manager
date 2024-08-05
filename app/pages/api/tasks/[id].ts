import { NextApiRequest, NextApiResponse } from 'next';
import Task from '../../../models/task';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const task = await Task.findByPk(id as string);
    res.status(200).json(task);
  } else if (req.method === 'PUT') {
    const { title, description, completed } = req.body;
    const task = await Task.findByPk(id as string);
    if (task) {
      task.title = title;
      task.description = description;
      task.completed = completed;
      await task.save();
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } else if (req.method === 'DELETE') {
    const task = await Task.findByPk(id as string);
    if (task) {
      await task.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  }
}
