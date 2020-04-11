export default class Post{
  constructor(data){
    this.username = data.username
    this.description = data.description
    // TODO find a way to grab current username
    // this.author = data.author
    this.image = data.image
    this.supportCount = data.supportCount
    this.disregardCount = data.disregardCount
  }

  get template() {
    return /*html */ `
    <div class="shadow col-12 col-md-4 mx-auto card card-cascade font-gothic my-2">
    <!-- Card image -->
    <div class="view view-cascade overlay">
      <img
        id="image"
        class="card-img-top img-fluid mt-3 shadow"
        src="${this.image}"
        alt="Card image cap"
      />
      <a>
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <!-- Card content -->
    <div class="card-body card-body-cascade text-center">
      <!-- username? -->
      <h6 id="username" class="font-weight-bold indigo-text pb-2">${this.username}</h6>
      <!-- Text -->

      <!-- Title -->
      <h4 class="card-title mb-4" id="echo">
        <strong>"${this.description}"</strong>
      </h4>

      <!--BUTTONS AREN'T sHOWING CAUSE NO FONTAWESOME YET-->
      <!-- Support Button -->
      <button class="btn btn-success font-cursive mr-4" onclick="">support</button>
      <button class="btn btn-danger font-cursive ml-4" onclick="">disregard</button>
      <div>
      <span class="font-gothic text-success mr-5">${this.supportCount}</span>
      <span class="font-gothic text-danger ml-5">${this.disregardCount}</span>
            </div>
    </div>

    <!-- Card footer -->
    <div class="text-muted text-center ">
    <button id="discussion-button" class="btn btn-light mb-2" onclick="">Join the Discussion</button>            
</div>
  </div>
</div>

    `
  }


}