import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-finish',
  templateUrl: './order-finish.component.html'
})
export class OrderFinishComponent implements OnInit {

  public id: number;

  constructor(private route: ActivatedRoute) {   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}
