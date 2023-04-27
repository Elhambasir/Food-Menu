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
 </div>
   </section>`;
  console.log(master);
};

export default popup;