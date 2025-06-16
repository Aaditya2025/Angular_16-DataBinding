import { 
  Component,
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  DoCheck,
  SimpleChange, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit, 
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'], 
  encapsulation: ViewEncapsulation.Emulated  //None, Native 
})
export class ServerElementComponent implements 
  OnInit,  
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit, 
  OnDestroy
{
  @Input('srvElement') element: {type: string, name: string, content: string}  
  //Here you not able to use element because you asign a alias to custom propertis.  

  constructor(){
    console.log("constructor called!")
  }

  ngOnChanges(changes: SimpleChanges):void {
    console.log('ngOnchanges called')
    console.log(changes)
  }
  ngOnInit(){
    console.log("ngOnInt called!")
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!'); 
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!'); 
  }

  ngOnDestroy(){
  console.log('ngOnDestroy called!')
  }
}
