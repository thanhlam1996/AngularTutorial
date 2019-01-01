import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  txt_en = '';
  txt_vn = '';
  isShowForm=false;
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];

  AddWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.txt_en,
      vn: this.txt_vn,
      memorized: false
    });
    this.txt_en = '';
    this.txt_vn = '';
    this.isShowForm=false;
  }
  removeWord(id){
    var index=this.arrWords.findIndex(x=>x.id===id);
    this.arrWords.splice(index,1);
  }


  filterStatus='XEMTATCA';
  getShowWords(memorized:boolean){
    var getAll=this.filterStatus==='XEMTATCA';
    var getDaNho=this.filterStatus==='XEMDANHO'&&memorized;
    var getChuaNho=this.filterStatus==='XEMCHUANHO'&&!memorized;

    return getAll||getDaNho||getChuaNho;
  }

  remembered(id)
  {
    var index=this.arrWords.findIndex(x=>x.id===id);
    this.arrWords[index].memorized=true;
  }
}
