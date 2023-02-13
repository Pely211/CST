import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ApiService } from '../api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  rarityList =["Common","Uncommon","Rare","Very Rare","Legendary"];
  itemForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public editData: any) {
    this.itemForm = this.formBuilder.group({
      name : ['',Validators.required],
      category : ['',Validators.required],
      price :['',Validators.required],
      quantity:['',Validators.required],
      rarity :['',Validators.required],
    })
    if(this.editData)
    {
      this.itemForm.controls['name'].setValue(this.editData.name);
      this.itemForm.controls['category'].setValue(this.editData.category);
      this.itemForm.controls['price'].setValue(this.editData.price);
      this.itemForm.controls['quantity'].setValue(this.editData.quantity);
      this.itemForm.controls['rarity'].setValue(this.editData.rarity);
    }
  }
  

  ngOnIt(): void {
    
    
    
  }
  addItem()
  {
    if(this.itemForm.valid)
    {
      this.api.postItem(this.itemForm.value)
      .subscribe({
        next:(res)=>{
          alert("Item added succesfully");
          this.itemForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error adding item");
        }
      })
    }
  }
  updateItem()
  {
    this.api.putItem(this.itemForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Item updated");
        this.itemForm.reset();
        this.dialogRef.close("update");
      },
      error:()=>{
        alert("Error while updating item");
      }
    })
  }
 
  
}
