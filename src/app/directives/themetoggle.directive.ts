import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appThemetoggle]',
})
export class ThemetoggleDirective implements OnInit {
//   @HostBinding('style.backgroundColor') backgroundColor: any = 'white';
  //   @HostBinding('style.Color') Color: any = 'black';

  body: any = document.getElementsByTagName('body');

  constructor() {}
  ngOnInit(): void {
    // console.log(this.backgroundColor)
    console.log(this.body);
  }
  @HostListener('click') onclick(eventData: Event) {
    if (this.body[0].classList.contains('whitemode')) {
      this.body[0].classList.remove('whitemode');
      this.body[0].classList.add('blackmode');
    } else if (this.body[0].classList.contains('blackmode')) {
      this.body[0].classList.remove('blackmode');
      this.body[0].classList.add('whitemode');
    }

    // console.log('funziono')
  }
}
