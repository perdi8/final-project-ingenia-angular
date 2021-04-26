import { Tag } from '../tag/tag.model';
import { IExpertList } from './expert.interface';

export class ExpertList implements IExpertList {
  id: number;
  nombre: string;
  created_at: string;
  update_at: string;
  estado_motivo: string;
  disponibilidad: string;
  modalidad: string;
  autonomo: boolean;
  contacto_telefono: string;
  contacto_email: string;
  contacto_ciudad: string;
  contacto_linkedin: string;
  condiciones_porcentaje: string;
  condiciones_precio_hora: string;
  puntuacion: number;
  nif: string;
  credenciales_correo: string;
  credenciales_correo_password: string;
  credenciales_zoom: string;
  credenciales_zoom_password: string;
  fichero_foto: string;
  fichero_cv: string;
  observaciones: string;
  origen: string;
  estado: boolean;
  tags: any;

  constructor(
    id: number,
    nombre: string,
    created_at: string,
    update_at: string,
    estado_motivo: string,
    disponibilidad: string,
    modalidad: string,
    autonomo: boolean,
    contacto_telefono: string,
    contacto_email: string,
    contacto_ciudad: string,
    contacto_linkedin: string,
    condiciones_porcentaje: string,
    condiciones_precio_hora: string,
    puntuacion: number,
    nif: string,
    credenciales_correo: string,
    credenciales_correo_password: string,
    credenciales_zoom: string,
    credenciales_zoom_password: string,
    fichero_foto: string,
    fichero_cv: string,
    observaciones: string,
    origen: string,
    estado: boolean,
    tags: Tag[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.created_at = created_at;
    this.update_at = update_at;
    this.estado_motivo = estado_motivo;
    this.disponibilidad = disponibilidad;
    this.modalidad = modalidad;
    this.autonomo = autonomo;
    this.contacto_telefono = contacto_telefono;
    this.contacto_email = contacto_email;
    this.contacto_ciudad = contacto_ciudad;
    this.contacto_linkedin = contacto_linkedin;
    this.condiciones_porcentaje = condiciones_porcentaje;
    this.condiciones_precio_hora = condiciones_precio_hora;
    this.puntuacion = puntuacion;
    this.nif = nif;
    this.credenciales_correo = credenciales_correo;
    this.credenciales_correo_password = credenciales_correo_password;
    this.credenciales_zoom = credenciales_zoom;
    this.credenciales_zoom_password = credenciales_zoom_password;
    this.fichero_foto = fichero_foto;
    this.fichero_cv = fichero_cv;
    this.observaciones = observaciones;
    this.origen = origen;
    this.estado = estado;
    this.tags = tags;
  }
}
