import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';


import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper';

// import Swiper core and required modules

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-our-dream',
  templateUrl: './our-dream.component.html',
  styleUrls: ['./our-dream.component.css'],
})
export class OurDreamComponent implements OnInit {

  @ViewChild(SwiperComponent)
  swiper!: SwiperComponent;



  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  /*   onSwiper([swiper]) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  } */

  constructor() {}

  ngOnInit(): void {}

  swipePrev() {
    this.swiper.swiperRef.slidePrev();
  }
  swipeNext() {
    this.swiper.swiperRef.slideNext();
  }
}
