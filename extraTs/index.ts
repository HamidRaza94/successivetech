import { IUsers } from './interfaces';
import { diamond, equilateral } from './patterns';
import { validateUsers, hasPermission } from './utils';

let users: IUsers[] = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },

  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },

  {
    traineeEmail: "trainee1@successive.tec",
    reviewerEmail: "reviewer1@successive.tech"
  }
];

diamond(5);
equilateral(3);
hasPermission( 'getUsers', 'trainer', 'write' );
validateUsers(users);
