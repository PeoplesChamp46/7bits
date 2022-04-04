import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';


import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {


  @ViewChild(SwiperComponent)
  swiper!: SwiperComponent;

  myStyle = {
    display : 'none'
  }


  constructor() { }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  swipePrev() {
    this.swiper.swiperRef.slidePrev();
  }
  swipeNext() {
    this.swiper.swiperRef.slideNext();
  }

openVideo(){
  this.myStyle['display'] = 'flex';
}

closeVideo(){
  this.myStyle['display'] = 'none';
}

}
