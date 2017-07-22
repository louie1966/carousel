import { Component, AfterContentInit, ContentChild, ContentChildren, QueryList, Input } from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselItemComponent) carouselItemsList: QueryList<CarouselItemComponent>;

  @Input() delay: number = 500;

  ngAfterContentInit() {
    let carouselItems = this.carouselItemsList.toArray();
    let count: number = 0;
    let max = carouselItems.length;
    setInterval(() => {
      let i = count % max;
      carouselItems.forEach((item) => item.isActive = false);
      carouselItems[i].isActive = true;
      count += 1;
    }, this.delay)
  }
}
