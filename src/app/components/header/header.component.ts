import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Menu } from 'src/app/model/menu.model';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  private mqAlias = '';
  public showMenu = false;

  private mediaSub: Subscription = new Subscription;
  public menus!: Menu[];

  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver,
    private menuService: MenuService,
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

    this.getMenus();
  }

  public getMenus(): void {
    this.menuService.getMenus().subscribe(

      (response: Menu[]) => {
        this.menus = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }

  public toggleMenuMobile(): void {
    if (this.mqAlias === 'xs' || this.mqAlias === 'sm') {
      this.showMenu = !this.showMenu;
      console.log("menu mobile")
    }
  }

  public showMenuNav(): void {
    document.getElementById("mySidenav")?.setAttribute("style", "visibility: visible;");
    document.getElementById("bg-nav")?.setAttribute("style", "visibility: visible;");
  }
  public hiddenMenuNav(): void {
    document.getElementById("mySidenav")?.setAttribute("style", "visibility: hidden;");
    document.getElementById("bg-nav")?.setAttribute("style", "visibility: hidden;");
  }

  decreaseQuantity(e: any): void {
    e.value = --e.value;
    if (e.value < 0) {
      e.value = 0
    }
  }
  increaseQuantity(e: any): void {
    e.value = ++e.value;
  }
}