import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr: Array<{color: string, img?: string, word: string, author: string}> = [
    {
      color: '#5CCD86',
      word: 'All-in-one',
      author: 'Bulanov Danil',
    },
    {
      color: '#F1C13B',
      word: 'Beautiful',
      author: 'Yudin Victor',
    },
    {
      color: '#FC7A42',
      word: 'Smart',
      author: 'Shoshin Boris',
    },
    {
      color: '#54A5D8',
      word: 'Offline-first',
      author: 'Shestakov Anton',
    },
    {
      color: '#EC1F1D',
      word: 'Fast',
      author: 'Zyulyaev Ilya',
    },
  ];

  activeImgIdx = 0;
  images = [
    'assets/first_screen/task.png',
    'assets/first_screen/whiteboard.png',
    'assets/first_screen/chat.png',
    'assets/first_screen/editor.png',
  ];

  titleWord = '';
  activeTitleWordIdx = 0;

  stepTitleWord(direct: number): void {
    if (this.titleWord.length == 0 && direct == 1) {
      this.activeTitleWordIdx++;
      console.warn(this.activeTitleWordIdx);
      this.activeTitleWordIdx %= this.arr.length;
    }

    const word = this.arr[this.activeTitleWordIdx].word;

    if (direct == 1) {
      if (word.length == this.titleWord.length) {
        setTimeout(() => {
          this.stepTitleWord(-1);
        }, 2000);
        return;
      } else {
        this.titleWord += word[this.titleWord.length];
        setTimeout(() => {
          this.stepTitleWord(1);
        }, 100);
        return;
      }
    }

    if (direct == -1) {
      if (this.titleWord.length == 0) {
        setTimeout(() => {
          this.stepTitleWord(1);
        }, 100);
        return;
      } else {
        this.titleWord = this.titleWord.slice(0, -1);
        setTimeout(() => {
          this.stepTitleWord(-1);
        }, 100);
        return;
        // this.titleWord.
      }
    }

  }


  constructor() { }

  ngOnInit(): void {
    this.titleWord = 'All-in-one';
    setTimeout(() => {
      this.stepTitleWord(-1);
    }, 2000);
  }
}
