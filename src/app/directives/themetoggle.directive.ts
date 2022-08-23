import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appThemetoggle]'
})
export class ThemetoggleDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor : string = 'white' 
  @HostBinding('style.Color') Color: string = 'black'
  

  constructor() { }
  ngOnInit(): void {
    // console.log(this.backgroundColor)
  }
  @HostListener('click') onclick(eventData:Event){
  
    if(this.backgroundColor == 'white' && this.Color == 'black'){
      this.backgroundColor = 'black'
      this.Color = 'white'

    }
    else{
      this.backgroundColor = 'white'
      this.Color = 'black'
    }

    
    // console.log('funziono')
  }

}
