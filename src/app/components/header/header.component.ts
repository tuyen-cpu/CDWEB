import { Product } from './../../model/product.model';
import { ProductService } from './../../service/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { debounceTime, of, Subject, Subscription, take } from 'rxjs';
import { Menu } from 'src/app/model/menu.model';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchInput') searchInput!: ElementRef;
  private mqAlias = '';
  public showMenu = false;
  private mediaSub: Subscription = new Subscription();
  private subjectKeyup = new Subject<any>();
  public menus!: Menu[];
  productList: Product[] = [];
  keySearch: string = '';
  isLoading = false;
  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver,
    private menuService: MenuService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const source = of(1, 2, 3, 4, 5);
    //take the first emitted value then complete
    const example = source.pipe(take(2)).subscribe((val) => console.log(val));

    this.subjectKeyup.pipe(debounceTime(900)).subscribe((key) => {
      this.isLoading = false;
      this.searchProducts(key);
    });

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
      }
    );
    this.getMenus();
  }

  searchProducts(key: string) {
    this.productService
      .searchProducts(key)
      .pipe(take(1))
      .subscribe((data) => {
        console.log(data);
        this.productList = data;
      });
  }

  onSearch(event: any) {
    this.searchInput.nativeElement.classList.add('open');
    this.isLoading = true;
    const value = event.target.value;
    if (value === '' || value == null) {
      this.productList = [];
      this.isLoading = false;
      return;
    }
    this.keySearch = value;
    this.subjectKeyup.next(value.toUpperCase());
  }

  public getMenus(): void {
    this.menuService.getMenus().subscribe(
      (response: Menu[]) => {
        this.menus = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
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
    this.subjectKeyup.unsubscribe();
  }

  public toggleMenuMobile(): void {
    if (this.mqAlias === 'xs' || this.mqAlias === 'sm') {
      this.showMenu = !this.showMenu;
      console.log('menu mobile');
    }
  }

  public showMenuNav(): void {
    document
      .getElementById('mySidenav')
      ?.setAttribute('style', 'visibility: visible;');
    document
      .getElementById('bg-nav')
      ?.setAttribute('style', 'visibility: visible;');
  }
  public hiddenMenuNav(): void {
    document
      .getElementById('mySidenav')
      ?.setAttribute('style', 'visibility: hidden;');
    document
      .getElementById('bg-nav')
      ?.setAttribute('style', 'visibility: hidden;');
  }

  decreaseQuantity(e: any): void {
    e.value = --e.value;
    if (e.value < 0) {
      e.value = 0;
    }
  }
  increaseQuantity(e: any): void {
    e.value = ++e.value;
  }
}
