export default class User{
  constructor(data) {
    this.username = data.username
    this.id = data.id || data._id
  }

  get userTemplate() {
    return /** html */`
      
    `
  }

  
}