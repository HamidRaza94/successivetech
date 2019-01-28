import { IPermission } from './interfaces';

const GET_USER: string = 'getUsers',
SET_USER: string ='setUsers',
HEAD_TRAINER: string = 'head-trainer',
TRAINER: string = 'trainer',
TRAINEE: string = 'trainee';

const permissions: IPermission = {
  GET_USER: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  },

  SET_USER: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  }
};

export { permissions, GET_USER, SET_USER, HEAD_TRAINER, TRAINER, TRAINEE };
