let products = [
    { name: "Shoes", headline: "Nice Shoes", price: "6,999", image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},

    { name: "Chair", headline: "Good looking Chair", price: "3,999", image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},

    { name: "Watch", headline: "Fossil", price: "9,999", image:"https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNofGVufDB8fDB8fHww"},

    { name: "Table lamp", headline: "Amazing lamp", price: "1,999", image:"https://images.unsplash.com/photo-1609847214283-8bad801da710?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRhYmxlJTIwbGFtcHxlbnwwfHwwfHx8MA%3D%3D"},

    { name: "Laptop", headline: "Nice", price: "68,999", image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"},

    { name: "Camera", headline: "DSLR", price: "54,699", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtZXJhfGVufDB8fDB8fHww"}
];

let popular = [
    {name: "Watch", headline: "Traditonal Watch", price: "2,999", image:"https://media.istockphoto.com/id/1041318246/photo/vintage-chimes-mantle-clock-shelf-clock-3d-rendering-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=A2MWzT6PRFLVzP5B0gIrMxsRvv6yXmGrZCahFb6XvU4="},

    {name: "Traditonal Statue", headline: "Lovely Statue", price: "11,999", image:"https://media.istockphoto.com/id/1817926571/photo/statue-of-lord-krishna-multiple-hands.webp?b=1&s=170667a&w=0&k=20&c=yv3k16UmueMcAH5NU8gJ8tgvufrli9KAGw2OjpUe9oQ="},

    {name: "Makeup Kit", headline: "Beauty products", price: "1,999", image:"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFrZXVwJTIwa2l0fGVufDB8fDB8fHww"}
];

var cart = [];

function addProduct() {

    let clutter = "";
    products.forEach(function(products, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
      <img class="w-full h-full object-cover" src= "${products.image}"/>
    </div>
    <div class="data w-full px-2 py-5">
       <h1 class="font-semibold text-xl leading-none tracking-tight">${products.name}</h1>
       <div class="flex justify-between w-full items-center mt-2">
           <div class="w-1/2">
               <h3 class="font-semibold opacity-50">${products.headline}</h3>
               <h4 class="font-semibold mt-2">&#8377;${products.price}</h4>
           </div>
           <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                   class="ri-add-line add"></i></button>
       </div>
   </div>
</div>`;
})

document.querySelector(".products").innerHTML = clutter;

}

function addpopular() {
    let clutter = "";
    popular.forEach(function(popular) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${popular.image}">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${popular.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popular.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${popular.price}</h4>
        </div>
    </div>`;
    })
    document.querySelector(".populars").innerHTML = clutter;

}

function addTocart() {
  document.querySelector(".products")
  .addEventListener("click", function(details) {
    if(details.target.classList.contains('add')){
        cart.push(products[details.target.dataset.index])
    }
  })
}

function showcart() {
    document.querySelector(".carticon")
    .addEventListener("click", function() {
       document.querySelector(".cartexpnd").style.display = "block";

       let clutter = "";
       cart.forEach(function(prod, index) {
          clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg duration-500">
          <div class="w-10 h-10 flex-shrink-0 rounded-lg  overflow-hidden">
          <img class="w-full h-full object-cover" src ="${prod.image}"/>
          </div>
          <div>
              <h3 class="font-semibold">${prod.name}</h3>
              <h5 class="text-sm font-semibold opacity-80">&#8377;${prod.price}</h5>
          </div>
        </div>`;
       })
       document.querySelector(".cartexpnd").innerHTML = clutter;
    })
}

showcart();
addTocart();
addProduct();
addpopular();

