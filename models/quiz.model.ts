import { Table, Column, Model } from 'sequelize-typescript'

@Table
export class Quiz extends Model {

  @Column
  name: string

  @Column
  category: string;

  @Column
  content: string

}