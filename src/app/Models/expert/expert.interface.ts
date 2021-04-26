export interface IExpertList {
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
  tags: [];
}
