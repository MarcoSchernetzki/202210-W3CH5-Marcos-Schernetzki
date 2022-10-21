import { ITask, Task } from '../models/task';

export class TaskApi {
    url: string;
    constructor() {
        this.url = 'http://localhost:3000/tasks';
    }

    // read / get
    getTask(): Promise<Array<Task>> {
        return fetch(this.url).then((response) => response.json());
    }

    // create / post
    createTask(task: ITask): Promise<Task> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => response.json());
    }

    // delete
    deleteTask(id: number): Promise<Response> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        });
    }

    // uptate / patch
    updateTask(id: number, partialTask: Partial<ITask>): Promise<Task> {
        return fetch(`${this.url}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialTask),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => response.json());
    }
}
