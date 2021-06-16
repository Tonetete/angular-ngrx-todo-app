import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { borrarTodo, editarTodo, toggleTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('ref') ref!: ElementRef;
  chkCompletado!: FormControl;
  txtInput!: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe((value) => {
      this.store.dispatch(toggleTodo({ id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.ref.nativeElement.select();
    }, 1);
  }

  borrar() {
    this.store.dispatch(borrarTodo({ id: this.todo.id }));
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.valid && this.txtInput.value !== this.todo.texto) {
      this.store.dispatch(
        editarTodo({ id: this.todo.id, texto: this.txtInput.value })
      );
    }
  }
}
