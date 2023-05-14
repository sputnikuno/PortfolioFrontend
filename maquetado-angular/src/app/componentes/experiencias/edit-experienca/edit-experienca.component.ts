import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';

@Component({
  selector: 'app-edit-experienca', // Corregir el selector aquí
  templateUrl: './edit-experienca.component.html',
  styleUrls: ['./edit-experienca.component.css']
})
export class EditExperiencaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(
    private servExperiencia: ServExperienciaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.servExperiencia.detail(id).subscribe(
      (data) => {
        this.expLab = data;
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.servExperiencia.update(id, this.expLab).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar experiencia');
      }
    );
  }
}

