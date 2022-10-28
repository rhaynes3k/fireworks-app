[
{
id: 1,
name: "Bottle Rocket",
qty: 10,
price: 12,
image: "BottleRockets.png",
inStock: 4
},
{
id: 2,
name: "Firecracker",
qty: 100,
price: 40,
image: "Firecrackers.png",
inStock: 5
},
{
id: 3,
name: "Roman Candle",
qty: 50,
price: 65,
image: "roman.png",
inStock: 8
},
{
id: 4,
name: "Neon Master Missles",
qty: 20,
price: 45,
image: "Neons.png",
inStock: 15
},
{
id: 5,
name: "Pride and Honor",
qty: 17,
price: 120,
image: "PrideHonor.png",
inStock: 12
},
{
id: 6,
name: "Party Pack 6",
qty: 38,
price: 140,
image: "PartyPack6.png",
inStock: 45
},
{
id: 7,
name: "Bucket-o-fun",
qty: 20,
price: 85,
image: "Bucket.png",
inStock: 52
},
{
id: 8,
name: "Tropical Thunder",
qty: 1,
price: 145,
image: "Tropical.png",
inStock: 65
},
{
id: 9,
name: "Nuclear Option",
qty: "1",
price: "1000",
img: "./images/Jumping Jacks.png",
inStock: 35
},
{
id: 10,
name: "Hellraiser",
qty: "2",
price: "200",
img: "./images/Jumping Jacks.png",
inStock: 3
}
]

const newF = updatedFWorks.map(f => {
  if(f.id != null){
    Object.assign({}, f, updatedFWorks.f.id)
  }
})
setFireworks(fWorks.map(obj => updatedFWorks.find(o => o.id === obj.id) || obj))
