import 'dotenv/config';
import { DataSource, DataSourceOptions } from "typeorm";
import { CreateCoursesTable1697135832545 } from "src/migrations/1697135832545-CreateCoursesTable";
import { CreateTagsTable1697136916270 } from "src/migrations/1697136916270-CreateTagsTable";
import { CreateCoursesTagsTable1697138004772 } from "src/migrations/1697138004772-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1697138438766 } from "src/migrations/1697138438766-AddCoursesIdToCoursesTagsTable";
import { AddTagsIdToCoursesTagsTable1697139133707 } from "src/migrations/1697139133707-AddTagsIdToCoursesTagsTable";
import { Course } from "src/courses/entities/courses.entity";
import { Tag } from "src/courses/entities/tags.entity";

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

export const datasource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1697135832545, 
    CreateTagsTable1697136916270, 
    CreateCoursesTagsTable1697138004772,
    AddCoursesIdToCoursesTagsTable1697138438766,
    AddTagsIdToCoursesTagsTable1697139133707
  ]
})