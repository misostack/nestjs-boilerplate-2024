import { Permission } from '@modules/user/entities/permission.entity';
import { RolePermission } from '@modules/user/entities/role-permission.entity';
import { Role } from '@modules/user/entities/role.entity';
import { User } from '@modules/user/entities/user.entity';

const ENTITES = [Role, Permission, RolePermission, User];

export default ENTITES;
