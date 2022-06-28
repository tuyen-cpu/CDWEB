import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Zoom, FreeMode, Navigation, Thumbs } from "swiper";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailProduct } from 'src/app/model/detail-product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ItemProductComponent } from '../item-product/item-product.component';
import { CartItem } from 'src/app/model/cart-item.model';
import { CartService } from 'src/app/service/cart.service';
import { DetailComment } from 'src/app/model/comment.model';
import { User } from 'src/app/model/user.model';
import { StorageService } from 'src/app/service/storage.service';
import { CommentService } from 'src/app/service/comment.service';

// install Swiper modules
SwiperCore.use([Zoom, FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailProductComponent implements OnInit {
  thumbsSwiper: any;
  private id!: number;
  public detailProduct!: DetailProduct;
  public quantity = 1;
  public textFull = false;
  public number_star = 0;
  public openFormReview = false;
  public reviewForm: FormGroup = new FormGroup({
    numberStar: new FormControl(''),
    content: new FormControl(''),
    fullName: new FormControl(''),
    phone: new FormControl(''),
    imgFiles: new FormControl(''),
  });
  public service_details: { urlImg: string, name: string, detail: string }[] = [
    { 'urlImg': 'https://bizweb.dktcdn.net/100/329/122/themes/835213/assets/shiper.png?1650680388655', 'name': 'Giao hàng miễn phí toàn quốc', 'detail': '' },
    { 'urlImg': 'https://bizweb.dktcdn.net/100/329/122/themes/835213/assets/change.png?1650680388655', 'name': 'TP. HCM', 'detail': 'Nhận hàng từ 24 đến 72h sau khi đặt hàng' },
    { 'urlImg': 'https://bizweb.dktcdn.net/100/329/122/themes/835213/assets/pay.png?1650680388655', 'name': 'HÀ NỘI', 'detail': 'Nhận hàng từ 24 đến 48h sau khi đặt hàng' },
    { 'urlImg': 'https://bizweb.dktcdn.net/100/329/122/themes/835213/assets/phone.png?1650680388655', 'name': 'CÁC TỈNH THÀNH KHÁC', 'detail': 'Nhận hàng từ 24 đến 96h sau khi đặt hàng' },
  ];

  public star_title: { id: number, title: string }[] = [
    { id: 1, title: 'Không thích' },
    { id: 2, title: 'Tạm được' },
    { id: 3, title: 'Bình thường' },
    { id: 4, title: 'Rất tốt' },
    { id: 5, title: 'Quá tuyệt vời!' },
  ];

  public user!: User;
  //comments
  public comments: DetailComment[] = [];
  public totalPages: number = 0;
  public currentPage: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private _Activatedroute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private storageService: StorageService,
    private commentService: CommentService,
  ) { }

  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group(
      {
        numberStar: ['', [Validators.required]],
        content: ['', [Validators.required]],
        fullName: ['', [Validators.required]],
        phone: [''],
        imgFiles: [''],
      },

    );
    this.id = this._Activatedroute.snapshot.params['id'];
    this.getDetailProduct(this.id);
    this.loadUser();
    this.loadComments(this.id, this.currentPage);
  }
  public loadComments(id: number, currentPage: number) {
    this.commentService.getPageCommentsByProductId(id, currentPage).subscribe({
      next:(response: any) => {
        console.log(response)
        this.comments = response?.content;
        this.currentPage = response?.number;
        this.totalPages = response?.totalPages;
      },
      error:(error: HttpErrorResponse) => {
        console.log("Comment: " + error.message);
      }
    });
  }

  //comments
  onPageChange(event: any){
    console.log(event.page);
    this.loadComments(this.id,event.page )
  }
  public loadUser() {
    this.user=this.storageService.getUser();
    if(this.user!=null){
      this.reviewForm.patchValue({
        fullName: this.user.username
     });
    }
  }

  public getDetailProduct(productId: number): void {
    this.productService.getDetailProductById(productId).subscribe(
      (response: DetailProduct) => {
        this.detailProduct = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }
  // public scrollToReview() : void{
  //   window.scrollBy(0, 900);
  // }

  public removeItem(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  public addItem(): void {
    let rest: any = 1;
    if (this.detailProduct?.quantity) {
      rest = this.detailProduct.quantity;
    }
    if (this.quantity < rest) {
      this.quantity++;
    } else {
      document.getElementById("alert-quantity")?.setAttribute("style", "visibility: visible;");
      setTimeout(function () {
        document.getElementById("alert-quantity")?.setAttribute("style", "visibility: hidden;");
      }, 1000);
    }
  }

  public showMore(): void {
    let myContainer = document.getElementById('show-more') as HTMLInputElement;

    if (this.textFull == false) {
      // console.log(this.detailProduct?.description_full);
      myContainer.innerHTML = (this.detailProduct?.description_full) + '';
    } else {
      myContainer.innerHTML = '';

    }
    this.textFull = !this.textFull;
  }

  // public newComment: DetailComment={
  //   "id": 1,
  //   "content": "dsfdsfsd",
  //   "status": 1,
  //   "star": 4,
  //   "urlImg": "C:\\fakepath\\b.jpg",
  //   "phone": "0123456789",
  //   "fullname": "ha123",
  //   userId: 0,
  //   productId: 0,
  //   createdDate: new Date
  // };
  public newComment!: DetailComment;
  public onSubmitReview(): void {
    // console.log(this.reviewForm);
    // console.log(this.reviewForm.value);
    let {numberStar,content,fullName,phone,imgFiles}=this.reviewForm.value;
    let userId:number = this.user?this.user.id:-1;
    let detailComment:DetailComment={
      id: 0,
      fullname: fullName,
      phone: phone,
      content: content,
      urlImg: imgFiles,
      userId: userId,
      productId: this.id,
      status: 1,
      star: numberStar,
      createdDate: new Date()
    };
    this.commentService.comment(detailComment).subscribe(
      (response: DetailComment) => {
        this.newComment = response;
        //console.log("New Comment: " + this.newComment.content);
        //add component comment 
        //parse into newComment
      },
      (error: HttpErrorResponse) => {
        console.log("Comment: " + error.message);
      }
    );
  }
  public setReviewStar(num_star: number): void {
    this.number_star = num_star;
    let id = 'title_' + num_star;

    var els = document.getElementsByClassName("alert-star");
    Array.prototype.forEach.call(els, function (el) {
      el.setAttribute("style", "visibility: hidden;");
    });

    for (let index = 1; index <= 5; index++) {
      let idEl = 'title_' + index;
      let el = document.getElementById(idEl)?.parentElement;
      if (index <= num_star) {
        el?.classList.add('active');
        console.log("add " + idEl)
      } else {
        el?.classList.remove('active');
        console.log("remove " + idEl)
      }
    }

    document.getElementById(id)?.setAttribute("style", "visibility: visible;");
  }

  formatPrice(value: number): string {
    let val = (value / 1).toFixed(0).replace('.', ',');
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  public addToCart() {
    let item: CartItem = {
      id: this.id,
      name: this.detailProduct.name,
      img: this.detailProduct.urlImgs[0],
      price: this.detailProduct.price - this.detailProduct.price * this.detailProduct.discount / 100,
      quantity: this.quantity
    };

    this.cartService.addToCart(item);
  }
}
