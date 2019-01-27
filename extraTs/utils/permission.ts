import { permissions } from '../constants';

export default function hasPermission( moduleName: string, role: string, permissionType: string ): void {
  const all: string = 'all';
  if ( permissions[moduleName] && ( permissions[moduleName][permissionType].includes(role) || permissions[moduleName][all].includes(role) ) ) {
    console.log(`${role} have permission to ${permissionType} for the module ${moduleName}`);
  } else {
    console.log(`${role} do not have permission to ${permissionType} for the module ${moduleName}`);
  }
}
