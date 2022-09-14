import { Roles } from '@app/store';

export const isStudentRole = (selectedRole: Roles | undefined) => selectedRole === Roles.Student;
