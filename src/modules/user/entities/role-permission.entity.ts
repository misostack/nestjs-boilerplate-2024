import { Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import {
  BaseEntity,
  generateEntityTableName,
} from '@database/database.helpers';
import { Role } from './role.entity';
import { Permission } from './permission.entity';

@Entity({
  name: generateEntityTableName('roles_permissions'),
})
@Index('UNQ_roles_permissions_role_id_permission_id', ['role', 'permission'], {
  unique: true,
})
export class RolePermission extends BaseEntity<RolePermission> {
  @ManyToOne(() => Role, (r) => r.rolePermissions)
  @JoinColumn({
    name: 'role_id',
    foreignKeyConstraintName: 'FK_roles_permissions_role_id_roles_id',
  })
  role: Role;

  @ManyToOne(() => Permission, (r) => r.rolePermissions)
  @JoinColumn({
    name: 'permission_id',
    foreignKeyConstraintName:
      'FK_roles_permissions_permission_id_permissions_id',
  })
  permission: Permission;
}
