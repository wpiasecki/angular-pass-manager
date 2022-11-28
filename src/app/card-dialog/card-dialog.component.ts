import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CardListService } from '../card-list/card-list.service';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.sass']
})
export class CardDialogComponent implements OnInit {

  card = <Card>{};
  reveal = false;
  form: FormGroup;

  closeDialogAndUpdateList = response => {
    this.dialogRef.close();
    this.cardService.listUpdated.emit(true);
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    public dialogRef: MatDialogRef<CardDialogComponent>,
    private cardService: CardListService,
    private fb: FormBuilder) {
      this.form = this.fb.group({
        name      : ['', Validators.required],
        url       : ['', Validators.required],
        username  : ['', Validators.required],
        password  : ['', Validators.required],
      })
    }

  ngOnInit() {
    this.reveal = false;
    this.card = JSON.parse(JSON.stringify(this.data.card));
    if (this.data.card) {
      this.form.setValue({
        name: this.card.name || '',
        url: this.card.url || '',
        username: this.card.username || '',
        password: this.card.password || ''
      });
    }
  }

  save() {
    const card = <Card>{
      name: this.form.value.name,
      password: this.form.value.password,
      url: this.form.value.url,
      username: this.form.value.username,
      id: this.card.id
    }
    
    const observable = this.card.id ? 
      this.cardService.update(card) 
      : this.cardService.save(card);
        
    observable.subscribe(this.closeDialogAndUpdateList);
  }

  togglePassword() {
    this.reveal = !this.reveal;
  }

  cancel() {
    this.dialogRef.close();
  }

  delete() {
    this.cardService
      .delete(this.card)
      .subscribe(this.closeDialogAndUpdateList);
  }

}
