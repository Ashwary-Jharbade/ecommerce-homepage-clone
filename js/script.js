const productCardContent = `
    <!-- Image block -->
    <div class="catalogue-item-img">
      <img
        class="img-fluid"
        src="./img/jacket.PNG"
        alt="clothing"
      />
    </div>
    <!-- Product Description -->
    <div class="catalogue-item-name">Just another product name</div>
    <!-- Review Stars -->
    <div class="catalogue-item-info">
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star empty-star"></i>
    <!-- Total reviews -->
      <span>34 reviews</span>
    </div>
    <!-- Product Price -->
    <div class="catalogue-item-price">$179.00</div>
`;

const brandCardContent = `
<div class="brand-border">
  <!-- Brand image -->
  <div class="brand-img" align="center">
    <img
      class="img-fluid"
      src="./img/microsoft.PNG"
      alt="microsoft brand image"
    />
  </div>
  <!-- Divider -->
  <hr class="divider" />
  <!-- Product count -->
  <div class="brand-text">36 products</div>
</div>
`

window.onload = () => {
    let ciobj = document.querySelectorAll('.catalogue-item');
    let biobj = document.querySelectorAll('.brand-content');

    ciobj.forEach( cardItems => {
        cardItems.innerHTML = productCardContent;
    });

    biobj.forEach( brandItems => {
        brandItems.innerHTML = brandCardContent;
    });
}