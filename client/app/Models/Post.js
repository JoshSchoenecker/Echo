export default class Post{
  constructor(data){
    this.id = data.id
    this.text = data.textpost || data.text
    // TODO find a way to grab current username
    // this.author = data.author
    this.imgUrl = data.imgUrl
  }

  get template() {
    return /**html */ `
      
    `
  }


}