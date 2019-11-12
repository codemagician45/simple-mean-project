import { Component, OnInit, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';

// import { products } from '../products';
import { ApiService } from '../../../services/api.service';
import { DialogTestComponent } from '../dialog-test/dialog-test.component';
import * as $ from "jquery";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterViewInit {
  selectedTabId = 0;
  newProducts = [];
  product_img = [];
  product_title = '';
  product_des;
  des;
  store_ids = [];
  currentId;
  price;
  @ViewChild('content', {static: false}) content: ElementRef;

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.apiService.get('http://localhost:3000/api').subscribe((res) => {
      this.newProducts = res['data'];
      this.store_ids = this.newProducts[0]['inventory'].filter(item => item['store_id']);
      this.product_des = this.newProducts[0].description;
      console.log(this.newProducts);
    })
  }

  ngAfterViewInit() {
    // console.log("here view child: ", $('#contentString'));
  }

  OnSelect($event){
    if ($event.value){
      this.product_title = this.newProducts[0].title;
      
      this.product_img = this.newProducts[0].images;
      this.price = this.newProducts[0].price;
      this.store_ids = this.newProducts[0]['inventory'].filter(item => item['store_id']);

      let preId = this.newProducts[0]['inventory'].filter(item => item['store_id'] == $event.value);
      this.currentId = preId[0].store_id;
      console.log(this.price);
    }
    else {
      this.product_img = null;
      // this.product_img = null;
      this.store_ids = null;
    }
    // var contentElement = $('#contentString');
    // // contentElement.innerHtml = this.product_des;
    // console.log("here content element: ", contentElement)
  }

  openDialog(e) {
  
    let newProductList = this.newProducts[0]['inventory'].filter(
      item => item['store_id'] == e);
    // console.log(this.newProducts);
    
    let colorList = newProductList[0]['store_inventory'].map(item => item['color']);
    
    function onlyUnique(value, index, self) {
      // console.log(value, index, self)
      return self.indexOf(value) === index;
    }

    let uniqueColorArray = colorList.filter(onlyUnique);
    
    let dialogConfig: MatDialogConfig = {
      // width: '100%',
      height: '100%',
      data: {
        img: this.product_img,
        current_data: newProductList[0]['store_inventory'],
        color_array: uniqueColorArray,
        des: this.product_des
      }
    }
    // this.dialog.open(DialogTestComponent,dialogConfig);

    const dialogRef = this.dialog.open(DialogTestComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
