function openPage(pageName, elmnt, color) {
    
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    
    document.getElementById(pageName).style.display = "block";
  
    
    elmnt.style.backgroundColor = color;
}
  
document.getElementById("defaultOpen").click();


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  
}

// Local Storage

function saveLoginInfo() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
}

// Giyim Bölümü

function openTab(evt, cityName) {
  // Declare all variables
  let i, contents, tabs;

  // Get all elements with class="tabcontent" and hide them
  contents = document.getElementsByClassName("contents");
  for (i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tabs = document.getElementsByClassName("tabs");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("default").click();

// Sepet Bölümü

let productList = [
  { id: 1, name: "Tommy Hilfiger Siyah Mont", price: 5339.90, image: "https://cdn.dsmcdn.com/ty1083/product/media/images/prod/SPM/PIM/20231209/12/d5900ad4-ff8a-349a-9445-9bdcd38fcd79/1_org_zoom.jpg" },
  { id: 2, name: "Tommy Hilfiger Siyah Mont", price: 3090.90, image: "https://cdn.dsmcdn.com/ty1097/product/media/images/prod/SPM/PIM/20231215/16/551304c7-467c-3268-9303-f8854fa905a7/1_org_zoom.jpg"},
  { id: 3, name: "Tommy Hilfiger Logolu Kapüşonlu Mont", price: 3090.90, image: "https://cdn.dsmcdn.com/ty1074/product/media/images/prod/SPM/PIM/20231130/21/d4b85bd0-b2cb-316c-a0ce-95ab88e0533f/1_org_zoom.jpg"},
  { id: 4, name: "Tommy Hilfiger Logolu sweatshirt", price: 1790.99, image: "https://cdn.dsmcdn.com/ty1021/product/media/images/prod/SPM/PIM/20231023/03/325cebef-1771-31a3-8e51-a9e44784e96d/1_org_zoom.jpg"},
  { id: 5, name: "Tommy Hilfiger Bağcıklıklı Siyah Sneaker", price: 2129.99, image: "https://cdn.dsmcdn.com/ty1074/product/media/images/prod/SPM/PIM/20231130/21/9a89afe0-60b4-3e68-8c46-c5c67dc76c87/1_org_zoom.jpg"},
  { id: 6, name: "Tommy Hilfiger Fit Kadife Gömlek", price: 1919.99, image: "https://cdn.dsmcdn.com/ty989/product/media/images/prod/SPM/PIM/20230824/01/657dbef3-d899-3421-b27e-e1992884a28a/1_org_zoom.jpg"},
  { id: 7, name: "Tommy Hilfiger Siyah Corp Mini Cüzdan", price: 1709.99, image: "https://cdn.dsmcdn.com/ty1081/product/media/images/prod/PIM/20231207/11/2cb34463-af10-48de-afec-6048ed88867a/1_org_zoom.jpg"},
  { id: 8, name: "Tommy Hilfiger 50 Ml Parfüm", price: 594.50, image: "https://cdn.dsmcdn.com/ty519/product/media/images/20220831/13/167178143/7134686/1/1_org_zoom.jpg"},
  { id: 9, name: "Tommy Hilfiger 4'lü Boxer Seti", price: 849.50, image: "https://cdn.dsmcdn.com/ty1042/product/media/images/prod/SPM/PIM/20231113/22/b964970c-926b-38d6-b7ee-cca5473c91b3/1_org_zoom.jpg"},
  { id: 10, name: "Tommy Hilfiger Logolu Deri Kemer", price: 1090.55, image: "https://cdn.dsmcdn.com/ty967/product/media/images/20230719/13/394999999/979951147/1/1_org_zoom.jpg"},
  { id: 11, name: "Tommy Hilfiger Tape Kapüşonlu Mont", price: 3269.90, image: "https://cdn.dsmcdn.com/ty779/product/media/images/20230314/11/303234245/885787526/1/1_org_zoom.jpg"},
  { id: 12, name: "Tommy Hilfiger Baskılı Beyaz T-Shirt", price: 869.95, image: "https://cdn.dsmcdn.com/ty996/product/media/images/prod/SPM/PIM/20230910/03/a465305c-abb4-3ee8-be3d-7329a91d565c/1_org_zoom.jpg"},
  { id: 13, name: "Tommy Hilfiger Logolu Beyaz Sneaker", price: 5467.90, image: "https://cdn.dsmcdn.com/ty1078/product/media/images/prod/SPM/PIM/20231205/16/91d0c1f1-1f70-3828-918c-35551b380ecb/1_org_zoom.jpg"},
  { id: 14, name: "Tommy Hilfiger Alaska Puffer", price: 5339.99, image: "https://cdn.dsmcdn.com/ty674/product/media/images/20230104/22/251997181/662357648/1/1_org_zoom.jpg"},
  { id: 15, name: "Tommy Hilfiger Gri Uzun Kollu Sweat", price: 4157.99, image: "https://cdn.dsmcdn.com/ty1028/product/media/images/prod/SPM/PIM/20231031/08/805cf864-d2ba-34cc-b2f9-a192a4877098/1_org_zoom.jpg"},
  { id: 16, name: "Tommy Hilfiger Light Down Jacket", price: 3099.99, image: "https://cdn.dsmcdn.com/ty639/product/media/images/20221212/19/235165668/647020835/1/1_org_zoom.jpg"},
  { id: 17, name: "Tommy Hilfiger Beyaz Omuz Çantası", price: 1454.90, image: "https://cdn.dsmcdn.com/ty1022/product/media/images/prod/SPM/PIM/20231021/00/56c09164-25fa-3900-81af-6ddf9c0d7bf7/1_org_zoom.jpg"},
  { id: 18, name: "Tommy Hilfiger Kapüşonlu Mont", price: 3690.50, image: "https://cdn.dsmcdn.com/ty1022/product/media/images/prod/SPM/PIM/20231023/16/6f6ac710-d266-3742-ad4e-9b229d5c7296/1_org_zoom.jpg"},
  { id: 19, name: "Tommy Hilfiger Denim Pantolon", price: 1599.50, image: "https://cdn.dsmcdn.com/ty990/product/media/images/prod/SPM/PIM/20230831/02/f075fd32-3ce4-3bb6-928a-737f9c301f9a/1_org_zoom.jpg"},
  { id: 20, name: "Tommy Hilfiger Mavi Jean Pantolon", price: 2129.55, image: "https://cdn.dsmcdn.com/ty999/product/media/images/prod/PIM/20230915/12/d6017be9-7e22-43ff-b2d8-6e1bc4db3280/1_org_zoom.jpg"},
  { id: 21, name: "Tommy Hilfiger Pembe Çocuk Sırt Çantası", price: 1290.90, image: "https://cdn.dsmcdn.com/ty1004/product/media/images/prod/SPM/PIM/20230921/15/d50ea9ac-776e-3cb1-ac56-16fa4be496ba/1_org_zoom.jpg"},
  { id: 22, name: "Tommy Hilfiger Lacivert Gömlek", price: 1799.95, image: "https://cdn.dsmcdn.com/ty1026/product/media/images/prod/SPM/PIM/20231030/10/db28d393-edf1-3db3-befe-e7887efa65b8/1_org_zoom.jpg"},
  { id: 23, name: "Tommy Hilfiger Lacivert Eşofman Takımı", price: 2200.90, image: "https://cdn.dsmcdn.com/ty1000/product/media/images/prod/SPM/PIM/20230916/03/03565e1b-38ce-3ea9-b5ad-030727cc13fa/1_org_zoom.jpg"},
  { id: 24, name: "Tommy Hilfiger Kırmızı Sweatshirt", price: 1740.99, image: "https://cdn.dsmcdn.com/ty1030/product/media/images/prod/SPM/PIM/20231101/13/a41a35c1-b52f-3fe8-8461-cde646b4d832/1_org_zoom.jpg"},
  { id: 25, name: "Tommy Hilfiger Logolu Sneaker", price: 1544.40, image: "https://cdn.dsmcdn.com/ty975/product/media/images/20230802/12/399366391/985411560/1/1_org_zoom.jpg"},
  { id: 26, name: "Tommy Hilfiger Erkek Yeşil Mont", price: 4040.99, image: "https://cdn.dsmcdn.com/ty1021/product/media/images/prod/SPM/PIM/20231024/14/a40876f6-7cf3-3688-9b9c-a3f747cd64fa/1_org_zoom.jpg"},
  { id: 27, name: "Tommy Hilfiger Mavi Sweatshirt", price: 859.90, image: "https://cdn.dsmcdn.com/ty526/product/media/images/20220910/10/171496704/562064218/1/1_org_zoom.jpg"},
  { id: 28, name: "Tommy Hilfiger Bebek Zıbın", price: 619.95, image: "https://cdn.dsmcdn.com/ty1031/product/media/images/prod/SPM/PIM/20231103/10/7912df64-ec3a-3bb5-8b1e-701c5b8334d4/1_org_zoom.jpg"},
  { id: 29, name: "Tommy Hilfiger Lacivert Logolu Bere", price: 968.50, image: "https://cdn.dsmcdn.com/ty1098/product/media/images/prod/SPM/PIM/20231215/01/5ffe2665-4b28-38b9-b389-8e0315dc86f7/1_org_zoom.jpg"},
  { id: 30, name: "Tommy Hilfiger Siyah Sırt Çantası", price: 2129.55, image: "https://cdn.dsmcdn.com/ty1017/product/media/images/prod/SPM/PIM/20231019/11/253d8e41-95c5-3e34-93bf-f820b9fec8fd/1_org_zoom.jpg"},
  { id: 31, name: "Roborock S7 Pro Robot Süpürge", price: 42880.90, image: "https://cdn.dsmcdn.com/ty1000/product/media/images/prod/SPM/PIM/20230915/08/965211e9-cd4c-3e4f-9f5d-c3c36e8c3baf/1_org_zoom.jpg"},
  { id: 32, name: "Xiaomi Beyaz 3.5 Litre Airfryer", price: 2169.95, image: "https://cdn.dsmcdn.com/ty1027/product/media/images/prod/PIM/20231101/10/5aeae701-a765-43b4-b0f6-ced6867aeb5e/1_org_zoom.jpg"},
  { id: 33, name: "Apple Watch Ultra 2 Akıllı Saat", price: 43000, image: "https://cdn.dsmcdn.com/ty1030/product/media/images/prod/SPM/PIM/20231103/16/3f2a2cba-5827-31cb-b106-c24e3220c04a/1_org_zoom.jpg"},
  { id: 34, name: "Apple Iphone 15 Pro Max 1 TB", price: 97890, image: "https://cdn.dsmcdn.com/ty1031/product/media/images/prod/PIM/20231105/16/f0cb20fe-961f-4f28-bdd0-b02d6b089fcc/1_org_zoom.jpg"},
  { id: 35, name: "Apple Iphone 15 ProMax 512 GB", price: 89999, image: "https://cdn.dsmcdn.com/ty1002/product/media/images/prod/PIM/20230921/07/9ad54364-69dd-45fc-9a54-562901b37704/1_org_zoom.jpg"},
  { id: 36, name: "Samsung Galaxy Z Fold5 512 GB", price: 72900, image: "https://cdn.dsmcdn.com/ty1018/product/media/images/prod/SPM/PIM/20231018/12/8fbbb0c9-9289-39be-9b12-80bea4a98f0c/1_org_zoom.jpg"},
  { id: 37, name: "Playstation 5 Slim 1 TB", price: 20230, image: "https://cdn.dsmcdn.com/ty1056/product/media/images/prod/SPM/PIM/20231121/14/f554b381-41d3-37b0-ae45-34b45038ae52/1_org_zoom.jpg"},
  { id: 38, name: "Microsoft Xbox Series X 1 TB", price: 21600, image: "https://cdn.dsmcdn.com/ty31/product/media/images/20201208/22/36627112/117585487/1/1_org_zoom.jpg"},
  { id: 39, name: "Apple Macbook Air M1 256GB SSD", price: 26990, image: "https://cdn.dsmcdn.com/ty1018/product/media/images/prod/SPM/PIM/20231019/13/899e8cb7-16a0-3617-bae0-555eacd2e713/1_org_zoom.jpg"},
  { id: 40, name: "Apple Airpods Pro Kulaklık", price: 12500, image: "https://cdn.dsmcdn.com/ty1036/product/media/images/prod/SPM/PIM/20231107/17/bd3b4e76-d4db-3651-8628-d629fd9e7e2d/1_org_zoom.jpg"},
  { id: 41, name: "Sherpa Trucker Ceket", price:4099.90, image: "https://st-levis.mncdn.com/mnresize/3000/1075/Content/media/ProductImg/original/638223179874313995.jpg"},
  { id: 42, name: "Chukka Sneaker", price:2299.95, image: "https://st-levis.mncdn.com/mnresize/3000/1075/Content/media/ProductImg/original/638310279526380622.jpg"},
  { id: 43, name: "Western Gömlek", price:1924.95, image: "https://st-levis.mncdn.com/mnresize/3000/1075/Content/media/ProductImg/original/638247375411259545.jpg"},
  { id: 44, name: "Wing Sneaker", price:1999.90, image: "https://st-levis.mncdn.com/mnresize/3000/1075/Content/media/ProductImg/original/638309413989615435.jpg"},
  
];

let cartItems = [];

function renderProductCards() {
  let productListElement = document.getElementById('productList');

  productList.forEach(product => {
    let productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.setAttribute('data-id', product.id);
    productCard.setAttribute('data-name', product.name);
    productCard.setAttribute('data-price', product.price.toFixed(2));

    productCard.innerHTML = `
        <h4>${product.name}</h4>
        <img src="${product.image}" alt="${product.name} Resmi" width="150">
        <p>Fiyat: TL${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Sepete Ekle</button>
    `;

    productListElement.appendChild(productCard);
});
}

function addToCart(productId) {
  let product = productList.find(item => item.id === productId);
  let existingItem = cartItems.find(item => item.id === productId);

  if (existingItem) {
      existingItem.quantity++;
  } else {
      cartItems.push({
          id: productId,
          name: product.name,
          price: product.price,
          quantity: 1
      });
  }

  updateCart();
}

function increaseQuantity(productId) {
  let existingItem = cartItems.find(item => item.id === productId);

  if (existingItem) {
      existingItem.quantity++;
      updateCart();
  }
}

function decreaseQuantity(productId) {
  let existingItem = cartItems.find(item => item.id === productId);

  if (existingItem) {
      if (existingItem.quantity > 1) {
          existingItem.quantity--;
      } else {
          cartItems = cartItems.filter(item => item.id !== productId);
      }
      
      updateCart();
  }
}

function updateCart() {
  let cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';

  if (cartItems.length === 0) {
      cartElement.innerHTML = 'Sepetiniz boş.';
  } else {
      let total = 0;

      cartItems.forEach(item => {
          let itemTotal = item.price * item.quantity;
          total += itemTotal;

          cartElement.innerHTML += `
              <div class="cart-item">
                  <img src="${productList.find(product => product.id === item.id).image}" alt="${item.name} Resmi" width="50">
                  <span>${item.name} x ${item.quantity} - ${itemTotal.toFixed(2)}</span>
                  <div class="quantity-buttons">
                      <button onclick="decreaseQuantity(${item.id})">Kaldır</button>
                      <button onclick="increaseQuantity(${item.id})">Ekle</button>
                  </div>
              </div>`;
      });

      cartElement.innerHTML += `<strong>Toplam: ${total.toFixed(2)}TL</strong>`;
  }
}

renderProductCards();



