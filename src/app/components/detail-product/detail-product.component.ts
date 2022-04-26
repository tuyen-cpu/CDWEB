import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, {Zoom, FreeMode, Navigation, Thumbs } from "swiper";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailProduct } from 'src/app/model/detail-product.model';

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
  public product!:DetailProduct;
  public quantity = 1;
  public textFull = false;
  public number_star = 0;
  public openFormReview = false;
  public reviewForm: FormGroup = new FormGroup({
    numberStar: new FormControl(''),
    content: new FormControl(''),
    fullName: new FormControl(''),
    phone: new FormControl(''),
    aerFiles: new FormControl(''),
  });

  public service_details : { urlImg: string, name: string, detail: string }[]=[
    {'urlImg':'https://bizweb.dktcdn.net/100/329/122/themes/835213/assets/shiper.png?1650680388655','name':'Giao hàng miễn phí toàn quốc','detail':''},
    {'urlImg':'https://bizweb.dktcdn.net/100/329/122/themes/835213/assets/change.png?1650680388655','name':'TP. HCM','detail':'Nhận hàng từ 24 đến 72h sau khi đặt hàng'},
    {'urlImg':'https://bizweb.dktcdn.net/100/329/122/themes/835213/assets/pay.png?1650680388655','name':'HÀ NỘI','detail':'Nhận hàng từ 24 đến 48h sau khi đặt hàng'},
    {'urlImg':'https://bizweb.dktcdn.net/100/329/122/themes/835213/assets/phone.png?1650680388655','name':'CÁC TỈNH THÀNH KHÁC','detail':'Nhận hàng từ 24 đến 96h sau khi đặt hàng'},
  ];

  public star_title : { id: number, title : string} []=[
    {id: 1, title : 'Không thích'},
    {id: 2, title : 'Tạm được'},
    {id: 3, title : 'Bình thường'},
    {id: 4, title : 'Rất tốt'},
    {id: 5, title : 'Quá tuyệt vời!'},
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.product = new DetailProduct(1,' Laptop Gaming Gigabyte AORUS 17 XE5-73VN534GH (i7-12700H, RTX 3070 Ti 8GB, Ram 16GB DDR5, SSD 1TB, 17.3 Inch IPS 360Hz FHD) ','','Intel',60660990,10,'https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-gaming-gigabyte-aorus-17-xe5-73vn534gh.png?v=1648702456000'
    ,10
    ,[ "CPU: i7-12700H (Up to 4.7GHz) 14 Cores 20 Threads",
    "VGA: GeForce RTX 3070 Ti 8GB",
    "Ram: 16GB (2x8GB) DDR5 4800MHz",
    "SSD: 1TB SSD M.2 PCIe Gen4 x4",
    "Màn hình: 17.3'' IPS 360Hz FHD"
    ],
    [
      'Balo Gaming Aorus.',
      'USB Aorus Chibi 64GB.',
      'Gấu bông Aorus Eagle.',
      'Túi chống sốc.'
    ],
    [ 'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-gigabyte-aorus-17-xe5-73vn534gh.png?v=1648702456317',
      'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-gigabyte-aorus-17-xe5-73vn534gh-3.png?v=1648702456317',
      'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-gigabyte-aorus-17-xe5-73vn534gh-2.png?v=1648702456317',
    ],
    '<div class="text-full"><p><strong>Laptop Gaming Gigabyte AORUS 17 XE5-73VN534GH </strong> đáp ứng đủ các tiêu chuẩn của người chơi chuyên nghiệp. Được trang bị GPU GeForce RTX 30 series mới nhất, công nghệ làm mát Windforce Infinity độc quyền, cùng với bộ xử lý Intel Core H thế hệ thứ 12, đảm bảo sự ổn định trong việc cung cấp 100% hiệu suất đầu ra, mang đến cho bạn hiệu ứng hiển thị tốt nhất và chân thực trong các trò chơi. </p><p><img src="//bizweb.sapocdn.net/100/329/122/files/screenshot-1648700593.jpg?v=1648700644129" style="width: 100%;"></p><table cellpadding="1" width="100%" style="border-collapse: collapse; margin-bottom: 15px;"><tbody><tr><td width="70%" style="text-align: left; padding: 15px; border: 1px solid #e1e1e1;"><p><span style="color: #000000;"><span style="font-size: 24px;"><b>Bộ xử lý Intel Core thế hệ 12</b></span></span></p><p><span style="color: #000000;"><strong>AORUS 17&nbsp;XE5</strong>&nbsp;được trang bị bộ vi xử lý Intel Core thế hệ 12 với 14 nhân và xung nhịp lên đến 4.7GHz giúp tăng đến 32% hiệu suất so với thế hệ trước để bạn dễ dàng trải nghiệm các tác vụ nặng một cách dễ dàng.</span></p></td><td width="30%" style="padding: 15px; border: 1px solid #e1e1e1;"><span style="color: #000000;"><img data-thumb="original" original-height="631" original-width="1019" src="//bizweb.sapocdn.net/100/329/122/files/screenshot-1645002575.png?v=1645003425022" style="width: 100%;"></span></td></tr></tbody></table><table cellpadding="1" width="100%" style="border-collapse: collapse; margin-bottom: 15px;"><tbody><tr><td width="30%" style="padding: 15px; border: 1px solid #e1e1e1;"><span style="color: #000000;"><img data-thumb="original" original-height="1080" original-width="1920" src="//bizweb.sapocdn.net/100/329/122/files/367-nvidia-ampere-gpu-general.jpg?v=1627703999772" style="width: 100%;"></span></td><td width="70%" style="text-align: left; padding: 15px; border: 1px solid #e1e1e1;"><p><span style="color: #000000;"><span style="font-size: 18pt;"><strong>GeForce RTX™ 30 Series</strong></span></span></p><p><span style="color: #000000;">Trang bị GPU&nbsp;GeForce RTX&nbsp;30 Series giúp&nbsp;<em><strong>Gigabyte AORUS 17</strong></em>&nbsp;mang lại hiệu suất tối thượng cho game thủ và nhà&nbsp;sáng tạo video. Card hoạt động trên nền tảng Ampere, Kiến trúc RTX thế hệ thứ 2 của NVIDIA với nhân RT, nhân Tensor và bộ đa xử lý phát trực tuyến mới, cung cấp đồ họa dò tia chân thực nhất và các tính năng AI tiên tiến. </span></p></td></tr></tbody></table><table cellpadding="1" width="100%" style="border-collapse: collapse; margin-bottom: 15px;"><tbody><tr><td width="70%" style="text-align: left; padding: 15px; border: 1px solid #e1e1e1;"><p><span style="color: #000000;"><span style="font-size: 24px;"><b>Bộ xử lý Intel Core thế hệ 12</b></span></span></p><p><span style="color: #000000;"><strong>AORUS 17&nbsp;XE5</strong>&nbsp;được trang bị bộ vi xử lý Intel Core thế hệ 12 với 14 nhân và xung nhịp lên đến 4.7GHz giúp tăng đến 32% hiệu suất so với thế hệ trước để bạn dễ dàng trải nghiệm các tác vụ nặng một cách dễ dàng.</span></p></td><td width="30%" style="padding: 15px; border: 1px solid #e1e1e1;"><span style="color: #000000;"><img data-thumb="original" original-height="631" original-width="1019" src="//bizweb.sapocdn.net/100/329/122/files/screenshot-1645002575.png?v=1645003425022" style="width: 100%;"></span></td></tr></tbody></table><table cellpadding="1" width="100%" style="border-collapse: collapse; margin-bottom: 15px;"><tbody><tr><td width="30%" style="padding: 15px; border: 1px solid #e1e1e1;"><span style="color: #000000;"><img data-thumb="original" original-height="1080" original-width="1920" src="//bizweb.sapocdn.net/100/329/122/files/367-nvidia-ampere-gpu-general.jpg?v=1627703999772" style="width: 100%;"></span></td><td width="70%" style="text-align: left; padding: 15px; border: 1px solid #e1e1e1;"><p><span style="color: #000000;"><span style="font-size: 18pt;"><strong>GeForce RTX™ 30 Series</strong></span></span></p><p><span style="color: #000000;">Trang bị GPU&nbsp;GeForce RTX&nbsp;30 Series giúp&nbsp;<em><strong>Gigabyte AORUS 17</strong></em>&nbsp;mang lại hiệu suất tối thượng cho game thủ và nhà&nbsp;sáng tạo video. Card hoạt động trên nền tảng Ampere, Kiến trúc RTX thế hệ thứ 2 của NVIDIA với nhân RT, nhân Tensor và bộ đa xử lý phát trực tuyến mới, cung cấp đồ họa dò tia chân thực nhất và các tính năng AI tiên tiến. </span></p></td></tr></tbody></table></div>'
    ,''
    ,'laptop'
    );
    this.reviewForm = this.formBuilder.group(
      {
        numberStar: ['', [Validators.required]],
        content: ['', [Validators.required]],
        fullName: ['', [Validators.required]],
        phone: [''],
        aerFiles: [''],
      },
     
    );
  }

  // public scrollToReview() : void{
  //   window.scrollBy(0, 900);
  // }

  public removeItem():void {
    if(this.quantity>1){
      this.quantity--;
    }
  }

  public addItem():void {
    let rest:any = 1;
    if(this.product?.amount){
      rest = this.product.amount;
    }
    if(this.quantity< rest){
      this.quantity++;
    }else{
      document.getElementById("alert-quantity")?.setAttribute("style","visibility: visible;");
      setTimeout(function(){
        document.getElementById("alert-quantity")?.setAttribute("style","visibility: hidden;");
      }, 1000);
    }   
  }

  public showMore():void{
    let myContainer = document.getElementById('show-more') as HTMLInputElement;

    if(this.textFull==false){
      console.log(this.product?.description_full);
      myContainer.innerHTML = (this.product?.description_full)+'';
    }else{
      myContainer.innerHTML = '';

    }
    this.textFull = !this.textFull;
  }

  public onSubmitReview():void{
    console.log(this.reviewForm);
    console.log(this.reviewForm.value);
  }
  public setReviewStar(num_star:number): void{
    this.number_star=num_star;
    let id = 'title_'+num_star;

    var els = document.getElementsByClassName("alert-star");
    Array.prototype.forEach.call(els, function(el) {
        el.setAttribute("style","visibility: hidden;");
    });

    for (let index = 1; index <= 5; index++) {
      let idEl = 'title_'+index;
      let el = document.getElementById(idEl)?.parentElement;
      if(index <= num_star){
        el?.classList.add('active');
        console.log("add "+idEl )
      }else{
        el?.classList.remove('active');
        console.log("remove "+idEl)
      }
    }

    document.getElementById(id)?.setAttribute("style","visibility: visible;");
  }
  
}
