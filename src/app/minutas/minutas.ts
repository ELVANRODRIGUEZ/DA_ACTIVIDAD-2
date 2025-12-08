import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Minuta {
  obra: string;
  responsable: string;
  descripcion: string;
  fecha: string;
}

@Component({
  selector: 'app-minutas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './minutas.html',
  styleUrl: './minutas.css',
})
export class Minutas {

  nueva: Minuta = {
    obra: '',
    responsable: '',
    descripcion: '',
    fecha: ''
  };

  lista: Minuta[] = [];

  agregar() {
    // Trim all fields
    const obra = this.nueva.obra.trim();
    const responsable = this.nueva.responsable.trim();
    const descripcion = this.nueva.descripcion.trim();
    const fecha = this.nueva.fecha.trim();

    // If any field is missing, do nothing
    if (!obra || !responsable || !descripcion || !fecha) {
      return;
    }

    // Add to the list
    this.lista.push({
      obra,
      responsable,
      descripcion,
      fecha
    });

    // Reset the form model
    this.nueva = {
      obra: '',
      responsable: '',
      descripcion: '',
      fecha: ''
    };
  }

  eliminar(i: number) {
    this.lista.splice(i, 1);
  }
}
