import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';


import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  @ViewChild(SwiperComponent)
  swiper!: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor() { }

  ngOnInit(): void {
  }

  swipePrev() {
    this.swiper.swiperRef.slidePrev();
  }
  swipeNext() {
    this.swiper.swiperRef.slideNext();
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
