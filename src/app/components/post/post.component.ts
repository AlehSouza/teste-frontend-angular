import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {
  @Input() post?: Post

  constructor(
    public userService: UserService,
  ) { }

  images = [
    'https://mega.ibxk.com.br/2016/09/01/01181328157795.jpg?ims=1032x490',
    'https://cdn.britannica.com/23/190523-050-112C739F/Koala-joey-back.jpg',
    'https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg?quality=90&strip=info&w=720&h=440&crop=1',
    'https://static.biologianet.com/2020/05/elefante-africano.jpg',
    'https://www.greenme.com.br/wp-content/uploads/2019/05/chinchilla-3.jpg',
    'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2022/05/ocapi.png',
    'https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081_1280.jpg',
    'https://blog.cobasi.com.br/wp-content/uploads/2023/11/AdobeStock_446522552.webp',
    'https://blog.7mboots.com.br/wp-content/uploads/2020/06/the-black-horse-of-the-frisian-breed-walks-in-the-P77UURU_Easy-Resize.com_.jpg',
    'https://www.infoescola.com/wp-content/uploads/2019/07/suricates-180639251.jpg',
    'https://curtamais.com.br/goiania/wp-content/uploads/sites/2/2023/12/caramelho.webp',
  ];

  getAuthor(id: number) {
    const author = this.userService.allUsers.get(id)
    return author.name
  }

  getPostImage() {
    if (!this.post) return
    const randomIndex = Math.floor(this.post.id % 10);
    return this.images[randomIndex];
  }

}
