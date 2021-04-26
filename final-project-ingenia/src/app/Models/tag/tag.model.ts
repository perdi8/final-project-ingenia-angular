import { ITag } from './tag.interface';

export class Tag implements ITag {
  id: number;
  nombre: string;
  created_at: string;
  updated_at: string;

  constructor(
    id: number,
    nombre: string,
    created_at: string,
    updated_at: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
