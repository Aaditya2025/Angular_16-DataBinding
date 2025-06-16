import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];


   onServerAdded(serverData: {serverName: string , serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }


//🔁 What “emits” means in Angular:
// It means the component "fires" or "sends" an event outward.
// The term is usually used with @Output() and EventEmitter.
// It's how child components communicate with or notify parent components when something happens.

// 🧠 So, when you hear “emits” in Angular, think:
// “This component is telling its parent that something happened.”




  onBlueprintAdded(blueprintData: {serverName: string , serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }
  
  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }
}


 

// 📌 Summary:
// Term                 	Meaning
// emit()       	-      Method that sends out a custom event
// @Output()	    -      Used to create an event property that the parent can listen to
// EventEmitter	  -      Class used to emit events