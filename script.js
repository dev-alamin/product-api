async function Posts() {

    try {
        const response = await fetch("http://localhost/wp-playground/wp-json/wp/v2/posts");
        const data = await response.json();

        console.log(data);
    } catch (e) {
        console.log('Data could not be fetched! Please try again.')
    }

}
Posts();

/**
 * Products api practice
 */
async function Products() {

    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        createProducts(data);
    } catch (e) {
        console.log('Data could not be fetched! Please try again.')
    }

}

Products();

function createProducts(product) {
    const container = document.querySelector(".product-container");

    let disPlayProduct = product.map(function (item) {

        return `
        <div class="col-lg-3 mt-5">
        <div class="single-product" style="padding:5px; border:1px solid #eee;">
            <div class="thumb" style="height:360px;display:flex;flex-direction:column;justify-content:center;">
                <img style="max-height:350px;border:none;" class="img-thumbnail" src="${item.image}" alt="">
            </div>
            <div class="content mt-2">
                <div class="product-title">
                    <h5 style="font-size:20px;">${item.title}</h5>
                    <div class="price"><b>BDT ${item.price}  </b></div>
                </div>
                <div class="cat"><h6> Category: ${item.category}</h6></div>
              

                <div class="rating" style="display:flex;">
                <div class="count">
                    Total Ratings:
                    ${item.rating.count}
                </div>
                <div class="rate" style="padding-left:8px;">
                     Rating rate:
                    ${item.rating.rate}
                </div>
            </div>

                <div style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" class="desc mt-2">${item.description}</div>
            </div>
        </div>
    </div>
        `;

    });



    disPlayProduct = disPlayProduct.join("");
    container.innerHTML = disPlayProduct;
}