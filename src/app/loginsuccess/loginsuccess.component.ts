import { Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.scss']
})
export class LoginsuccessComponent implements OnInit{
  displayedColumns: string[] = ['name', 'category', 'price', 'quantity', 'rarity', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private api: ApiService)
  {

  }
  ngOnInit(): void {
    this.getAllItems();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:"30%"
    }).afterClosed().subscribe(val=>{
        this.getAllItems();
    });
  }
  getAllItems()
  {
    this.api.getItem()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while getting items");
      }
    })
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editItem(row: any)
  {
    this.dialog.open(DialogComponent)
    {
      width:'30%'
      data:row
    }
  }
  deleteItem(id:number)
  {
    this.api.deleteItem(id)
    .subscribe({
      next:(res)=>{

      },
      error:()=>{
        alert("Error while deleting the item")
      }
      
    })
  }
}
