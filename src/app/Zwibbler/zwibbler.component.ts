import {
  Component,
  OnInit,
  ElementRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  ComponentFactory,
  ComponentRef,
  SimpleChanges
} from "@angular/core";
import { HelloComponent } from "../hello.component";
import { ExternalRect, ZwibblerClass, ZwibblerContext } from "./zwibbler2";
declare let Zwibbler: ZwibblerClass;
@Component({
  selector: "app-zwibbler",
  templateUrl: "./zwibbler.component.html",
  styleUrls: ["./zwibbler.component.css"]
})
export class ZwibblerComponent implements OnInit {
  ctx: ZwibblerContext;
  savedData:any;
  constructor(private myElement: ElementRef){

  }
  async ngOnInit() {
    let zwibblerDiv = this.myElement.nativeElement.querySelector("[zwibbler]")!;
    let scope = Zwibbler.attach(zwibblerDiv, {});
    this.ctx = scope.ctx;
  }

  text(){
    this.ctx.useTextTool();
    this.ctx.setConfig("multilineText", true)
    this.ctx.setConfig("autoGroup", true);
  }

  shape(){
    this.ctx.useRectangleTool({ fillStyle: "#ffffff" });
    this.ctx.setConfig("clickToDrawShapes", true);
  }

  save(){
    this.savedData = this.ctx.save();
    console.log(this.savedData);
    alert("data Saved!");
  }
  loadData(){
    if(this.savedData){
      this.ctx.load(this.savedData);
    }
  }

  clearScreen(){
    this.ctx.newDocument();
  }

  lineTool(){
    this.ctx.useLineTool();
    this.ctx.setConfig("autoGroup", true);
  }

}