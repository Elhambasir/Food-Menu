const popup = () => {
  const master = document.querySelector('.container');
  master.innerHTML = `  <section class="popup" id="popup-close">
 <div class="container">
        <span class="fa fa-close align-end" id="popup-close"></span>
        <div class="image"></div>
        <p class="title">Meals 3</p>
        <div class="names-content" id="names-content">
          <div class="names">Categories: titanium</div>
          <div  class="names">Weight: 400</div>
          <div  class="names">Length: 100,000</div>
          <div  class="names">Power: 100,000,000</div>
        </div>
        <div class="list">
        <h2>Add Comments</h2>
        <div></div>
       </div>
      
       <form class="form-control" id="Form">
        <input type="text" class="input" id="input" placeholder="your name">
        <textarea class="text" name="comment" id="Text" cols="30" rows="10" placeholder="your comment"></textarea>
        <button type="submit">Add comment</button>
       </form>
 </div>
   </section>`;
};

export default popup;