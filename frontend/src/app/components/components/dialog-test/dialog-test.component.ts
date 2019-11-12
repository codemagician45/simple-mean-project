import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-test',
  templateUrl: './dialog-test.component.html',
  styleUrls: ['./dialog-test.component.scss']
})
export class DialogTestComponent implements OnInit {
  dat;
  currentData;
  colors;
  images;
  des;
  // size_array;
  selected_color;
  currentdatalist;
  constructor(
    public dialogRef: MatDialogRef<DialogTestComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.dat = data
  }
  
  ngOnInit() {
    this.colors = this.dat.color_array;
    this.currentData = this.dat.current_data;
    this.images =  this.dat.img;
    this.des = this.dat.des;
  }

  OnItemChange(e){
    this.selected_color = e;
    this.currentdatalist = this.currentData.filter(item => item['color'] == e);
  }

}
