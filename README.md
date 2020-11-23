# Shop Products (v1)


### An open source e-commerce API that provides products for Frontend Developers, for building portfolio projects. 
This API contains 100 products under (5) categories namely: **footwears, accessories, home appliances, furnitures and clothings**


![Shop Ecommerce Logo](https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg)


## Available Endpoints


### For All Available Products
```
const apiUrl = "https://shop-products.herokuapp.com/api/v1/products"

fetch(apiUrl)
.then(response => response.json())
.then(data => console.log(data))
```

### For Products under Available categories

```
// CATEGORY SEARCH

 Category = furnitures or accessories or home appliances or furnitures or clothings
const CategoryUrl =  `https://shop-products.herokuapp.com/api/v1/products/search/{Category}`

fetch(CategoryUrl)
.then(response => response.json())
.then(data => console.log(data))

```
### For Product(s) Search

```
productName = shoes or any available product name

const apiUrl = `https://shop-products.herokuapp.com/api/v1/products/search/{shoes}`

fetch(apiUrl)
.then(response => response.json())
.then(data => console.log(data))

```

### Thanks
