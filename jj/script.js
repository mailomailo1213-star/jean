
const products = [
    // LE MALE COLLECTION
    {id:1,name:"Le Male",collection:"Le Male",category:"men",type:"Eau de Toilette",size:"125 ml",family:"Aromatic, vanilla and fresh",price:null,tag:"ICONIC"},
    {id:2,name:"Le Male Le Parfum",collection:"Le Male",category:"men",type:"Eau de Parfum Intense",size:"125 ml",family:"Cardamom, lavender and vanilla",price:null,tag:"POPULAR"},
    {id:3,name:"Le Male Elixir",collection:"Le Male",category:"men",type:"Parfum",size:"125 ml",family:"Honey, tobacco and vanilla",price:null,tag:"BESTSELLER"},
    {id:4,name:"Le Male Elixir Absolu",collection:"Le Male",category:"men",type:"Parfum",size:"125 ml",family:"Sweet and warm",price:null,tag:"INTENSE"},
    {id:5,name:"Le Male Essence de Parfum",collection:"Le Male",category:"men",type:"Essence de Parfum",size:"125 ml",family:"Woody and aromatic",price:null,tag:"COLLECTION"},
    {id:6,name:"Le Male Aviator",collection:"Le Male",category:"men",type:"Eau de Toilette",size:"125 ml",family:"Fresh and aromatic",price:null,tag:"COLLECTOR"},
    {id:7,name:"Ultra Male",collection:"Le Male",category:"men",type:"Eau de Toilette Intense",size:"125 ml",family:"Pear, cinnamon and vanilla",price:null,tag:"ICONIC"},
    {id:8,name:"Le Male In The Navy",collection:"Le Male",category:"men",type:"Eau de Toilette",size:"125 ml",family:"Aquatic and aromatic",price:null,tag:"LIMITED"},
    {id:9,name:"Le Male On Board",collection:"Le Male",category:"men",type:"Eau de Toilette",size:"125 ml",family:"Fresh and aquatic",price:null,tag:"COLLECTION"},
    {id:10,name:"Le Male Pride",collection:"Le Male",category:"men",type:"Collector Edition",size:"125 ml",family:"Aromatic",price:null,tag:"COLLECTOR"},

    // LE BEAU COLLECTION
    {id:11,name:"Le Beau",collection:"Le Beau",category:"men",type:"Eau de Toilette",size:"125 ml",family:"Coconut, bergamot and tonka bean",price:null,tag:"POPULAR"},
    {id:12,name:"Le Beau Le Parfum",collection:"Le Beau",category:"men",type:"Eau de Parfum",size:"125 ml",family:"Coconut, pineapple and tonka bean",price:null,tag:"BESTSELLER"},
    {id:13,name:"Le Beau Paradise Garden",collection:"Le Beau",category:"men",type:"Eau de Parfum",size:"125 ml",family:"Green, woody and tropical",price:null,tag:"NEW"},
    {id:14,name:"Le Beau Paradise Garden Collector",collection:"Le Beau",category:"men",type:"Collector Edition",size:"125 ml",family:"Tropical and woody",price:null,tag:"COLLECTOR"},

    // CLASSIQUE COLLECTION
    {id:15,name:"Classique",collection:"Classique",category:"women",type:"Eau de Toilette",size:"100 ml",family:"Rose, vanilla and amber",price:null,tag:"ICONIC"},
    {id:16,name:"Classique Essence de Parfum",collection:"Classique",category:"women",type:"Essence de Parfum",size:"100 ml",family:"Oriental and floral",price:null,tag:"COLLECTION"},
    {id:17,name:"Classique Intense",collection:"Classique",category:"women",type:"Eau de Parfum",size:"100 ml",family:"Vanilla and floral",price:null,tag:"INTENSE"},
    {id:18,name:"Classique Cabaret",collection:"Classique",category:"women",type:"Collector Edition",size:"100 ml",family:"Floral and oriental",price:null,tag:"COLLECTOR"},
    {id:19,name:"Classique Pride",collection:"Classique",category:"women",type:"Collector Edition",size:"100 ml",family:"Floral",price:null,tag:"COLLECTOR"},

    // SCANDAL COLLECTION
    {id:20,name:"Scandal Pour Homme",collection:"Scandal",category:"men",type:"Eau de Toilette",size:"100 ml",family:"Caramel, clary sage and vetiver",price:null,tag:"POPULAR"},
    {id:21,name:"Scandal Pour Homme Le Parfum",collection:"Scandal",category:"men",type:"Parfum",size:"100 ml",family:"Woody and sweet",price:null,tag:"INTENSE"},
    {id:22,name:"Scandal Pour Homme Absolu",collection:"Scandal",category:"men",type:"Parfum",size:"100 ml",family:"Amber and woody",price:null,tag:"NEW"},
    {id:23,name:"Scandal Pour Homme Intense",collection:"Scandal",category:"men",type:"Eau de Parfum",size:"100 ml",family:"Warm and aromatic",price:null,tag:"INTENSE"},
    {id:24,name:"Scandal Pour Homme Gold",collection:"Scandal",category:"men",type:"Collector Edition",size:"100 ml",family:"Sweet and woody",price:null,tag:"COLLECTOR"},
    {id:25,name:"Scandal",collection:"Scandal",category:"women",type:"Eau de Parfum",size:"80 ml",family:"Honey, gardenia and patchouli",price:null,tag:"ICONIC"},
    {id:26,name:"Scandal Le Parfum",collection:"Scandal",category:"women",type:"Eau de Parfum",size:"80 ml",family:"Jasmine, caramel and vanilla",price:null,tag:"BESTSELLER"},
    {id:27,name:"Scandal Intense",collection:"Scandal",category:"women",type:"Eau de Parfum",size:"80 ml",family:"Sweet and amber",price:null,tag:"INTENSE"},
    {id:28,name:"Scandal Absolu",collection:"Scandal",category:"women",type:"Parfum",size:"80 ml",family:"Fig, tuberose and sandalwood",price:null,tag:"LUXURY"},

    // GAULTIER DIVINE COLLECTION
    {id:29,name:"Divine",collection:"Gaultier Divine",category:"women",type:"Eau de Parfum",size:"100 ml",family:"Floral, marine and gourmand",price:null,tag:"POPULAR"},
    {id:30,name:"Divine Le Parfum",collection:"Gaultier Divine",category:"women",type:"Parfum",size:"100 ml",family:"Floral and amber",price:null,tag:"INTENSE"},
    {id:31,name:"Divine Couture",collection:"Gaultier Divine",category:"women",type:"Collector Edition",size:"100 ml",family:"Floral and gourmand",price:null,tag:"COLLECTOR"},

    // GAULTIER COLLECTION
    {id:32,name:"Gaultier 2",collection:"Gaultier",category:"all",type:"Eau de Parfum",size:"90 ml",family:"Amber, vanilla and musk",price:null,tag:"ICONIC"},
    {id:33,name:"Gaultier² Eau d'Amour",collection:"Gaultier",category:"all",type:"Eau de Parfum",size:"90 ml",family:"Amber and musk",price:null,tag:"COLLECTION"},
    {id:34,name:"Fleur du Mâle",collection:"Gaultier",category:"men",type:"Eau de Toilette",size:"125 ml",family:"Orange blossom and aromatic notes",price:null,tag:"CLASSIC"},
    {id:35,name:"Kokorico",collection:"Gaultier",category:"men",type:"Eau de Toilette",size:"100 ml",family:"Cacao, fig and woody notes",price:null,tag:"CLASSIC"},
    {id:36,name:"Kokorico By Night",collection:"Gaultier",category:"men",type:"Eau de Toilette",size:"100 ml",family:"Woody and aromatic",price:null,tag:"COLLECTION"},
    {id:37,name:"Ma Dame",collection:"Gaultier",category:"women",type:"Eau de Toilette",size:"100 ml",family:"Rose and musk",price:null,tag:"CLASSIC"},
    {id:38,name:"Madame",collection:"Gaultier",category:"women",type:"Fragrance",size:"100 ml",family:"Floral",price:null,tag:"CLASSIC"},
    {id:39,name:"Fragile",collection:"Gaultier",category:"women",type:"Eau de Parfum",size:"100 ml",family:"Floral and oriental",price:null,tag:"CLASSIC"},
    {id:40,name:"Classique X",collection:"Gaultier",category:"women",type:"Eau de Parfum",size:"100 ml",family:"Floral and woody",price:null,tag:"CLASSIC"}
];

let currentFilter = "all";

function renderProducts() {
    const grid = document.getElementById("productGrid");
    const search = document.getElementById("searchInput").value.toLowerCase();

    const filtered = products.filter(product => {
        const matchesCategory =
            currentFilter === "all" ||
            product.category === currentFilter ||
            product.category === "all";

        const matchesSearch =
            product.name.toLowerCase().includes(search) ||
            product.collection.toLowerCase().includes(search);

        return matchesCategory && matchesSearch;
    });

    document.getElementById("productCount").textContent =
        `${filtered.length} PRODUCTS`;

    grid.innerHTML = "";

    filtered.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                <img src="${getImage(product)}"
                     alt="${product.name}"
                     loading="lazy">
                <span class="product-tag">${product.tag}</span>
            </div>

            <div class="product-info">
                <p>${product.collection.toUpperCase()}</p>
                <h3>${product.name}</h3>
                <p>${product.type} · ${product.size}</p>

                <div class="product-bottom">
                    <span class="product-price">
                        ${product.price === null ? "PRICE ON REQUEST" : "₾" + product.price}
                    </span>
                    <span class="view-link">VIEW DETAILS →</span>
                </div>
            </div>
        `;

        card.addEventListener("click", () => openProduct(product.id));
        grid.appendChild(card);
    });

    if (filtered.length === 0) {
        grid.innerHTML = "<p>No fragrances found.</p>";
    }
}

// Temporary collection photography.
// Replace these with verified photographs of the exact bottles.
function getImage(product) {
    const images = {
        "Le Male": "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800",
        "Le Beau": "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800",
        "Classique": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800",
        "Scandal": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800",
        "Gaultier Divine": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800",
        "Gaultier": "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800"
    };

    return images[product.collection];
}

function setFilter(filter, button) {
    currentFilter = filter;

    document.querySelectorAll(".filter").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
    renderProducts();
}

function openProduct(id) {
    const product = products.find(item => item.id === id);
    if (!product) return;

    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("detailPage").classList.remove("hidden");

    document.getElementById("detailImg").src = getImage(product);
    document.getElementById("detailImg").alt = product.name;

    document.getElementById("detailCategory").textContent =
        product.collection.toUpperCase() + " COLLECTION";

    document.getElementById("detailName").textContent = product.name;
    document.getElementById("detailType").textContent = product.type;

    document.getElementById("detailPrice").textContent =
        product.price === null ? "PRICE ON REQUEST" : "₾" + product.price;

    document.getElementById("detailDescription").textContent =
        `${product.name} is part of the ${product.collection} collection by Jean Paul Gaultier. Fragrance character: ${product.family}.`;

    document.getElementById("detailSize").textContent = product.size;
    document.getElementById("detailFamily").textContent = product.family;

    window.scrollTo({top:0,behavior:"smooth"});
    history.pushState({productId:id},"");
}

function showHome() {
    document.getElementById("detailPage").classList.add("hidden");
    document.getElementById("homePage").classList.remove("hidden");
    window.scrollTo({top:0,behavior:"smooth"});
}

function contactSeller() {
    alert("Welcome to GAULTIER. This is a demonstration store. No orders are processed yet.");
}

window.addEventListener("popstate", showHome);

renderProducts();
