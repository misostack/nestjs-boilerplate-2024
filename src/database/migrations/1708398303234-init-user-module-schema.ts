import { MigrationInterface, QueryRunner } from "typeorm";

export class InitUserModuleSchema1708398303234 implements MigrationInterface {
    name = 'InitUserModuleSchema1708398303234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`nestjs_roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(160) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`nestjs_roles_permissions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`role_id\` int NULL, \`permission_id\` int NULL, UNIQUE INDEX \`UNQ_roles_permissions_role_id_permission_id\` (\`role_id\`, \`permission_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`nestjs_permissions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL DEFAULT '', UNIQUE INDEX \`UNQ_permissions_name\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`nestjs_users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`fullname\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(60) NULL, \`status\` tinyint NULL DEFAULT '1', \`role_id\` int NOT NULL, UNIQUE INDEX \`UNQ_users_email\` (\`email\`), UNIQUE INDEX \`UNQ_users_username\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`nestjs_roles_permissions\` ADD CONSTRAINT \`FK_roles_permissions_role_id_roles_id\` FOREIGN KEY (\`role_id\`) REFERENCES \`nestjs_roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`nestjs_roles_permissions\` ADD CONSTRAINT \`FK_roles_permissions_permission_id_permissions_id\` FOREIGN KEY (\`permission_id\`) REFERENCES \`nestjs_permissions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`nestjs_users\` ADD CONSTRAINT \`FK_users_role_id_roles_id\` FOREIGN KEY (\`role_id\`) REFERENCES \`nestjs_roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`nestjs_users\` DROP FOREIGN KEY \`FK_users_role_id_roles_id\``);
        await queryRunner.query(`ALTER TABLE \`nestjs_roles_permissions\` DROP FOREIGN KEY \`FK_roles_permissions_permission_id_permissions_id\``);
        await queryRunner.query(`ALTER TABLE \`nestjs_roles_permissions\` DROP FOREIGN KEY \`FK_roles_permissions_role_id_roles_id\``);
        await queryRunner.query(`DROP INDEX \`UNQ_users_username\` ON \`nestjs_users\``);
        await queryRunner.query(`DROP INDEX \`UNQ_users_email\` ON \`nestjs_users\``);
        await queryRunner.query(`DROP TABLE \`nestjs_users\``);
        await queryRunner.query(`DROP INDEX \`UNQ_permissions_name\` ON \`nestjs_permissions\``);
        await queryRunner.query(`DROP TABLE \`nestjs_permissions\``);
        await queryRunner.query(`DROP INDEX \`UNQ_roles_permissions_role_id_permission_id\` ON \`nestjs_roles_permissions\``);
        await queryRunner.query(`DROP TABLE \`nestjs_roles_permissions\``);
        await queryRunner.query(`DROP TABLE \`nestjs_roles\``);
    }

}
