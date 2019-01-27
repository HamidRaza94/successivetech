import { IPermission } from './interfaces';

const GET_USER: string = 'getUsers';
const HEAD_TRAINER: string = 'head-trainer';
const TRAINER: string = 'trainer';
const TRAINEE: string = 'trainee';

export const permissions: IPermission = {
  GET_USER: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  }
};
