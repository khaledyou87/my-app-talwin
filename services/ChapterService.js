import chapters from '../src/data/chapters.json'


export default class ChapterService {
 

  static getChapters() {
    
    return chapters.map((chapter) => ({
      id: chapter.id,
      nameAr: chapter.name_ar,
      namePron: chapter.name_pron_en,
      versesNumber: chapter.verses_number,
      class: chapter.class,
      vers: chapter.content.trim().split(/\s*\[[0-9]+\]\s*/).join("\n"),
      verses: chapter.content.trim().split(/\s*\[[0-9]+\]\s*/).filter(a => a) ,
      // verse: chapter.conten.trim().split(/\s*\[[0-9]+\]\s*/).filter(a => a),
     
      
    }))

    
  }

}