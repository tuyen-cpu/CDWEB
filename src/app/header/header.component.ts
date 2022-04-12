import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  private mqAlias = '';
  public showMenu = false;
  public showNav = false;

  private mediaSub: Subscription = new Subscription;
  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver,
  ) {

  }

  ngOnInit() {

    // this.mediaSub = this.mediaObserver.asObservable().subscribe(change => {
    //   change.forEach((v) => {
    //     // console.log(v.mediaQuery, v.mqAlias);
    //     console.log(v.mqAlias,change);
    //   });
    //   console.log('-----');
    // });

    this.mediaSub = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        this.mqAlias = change.mqAlias;
      });
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }

  public toggleMenuMobile():void{
    if(this.mqAlias==='xs' || this.mqAlias==='sm'){
      this.showMenu=!this.showMenu;
    }
  }

  public toggleMenuNav():void{
    this.showNav=!this.showNav;
  }
  
}
