const express = require('express');
const router = express.Router();

// const db = require('../models');
// const Cart = db.cart;

// const Cart = require('../models/cart.model');
// const CartItem = require('../models/cartItem.model');
// const Order = require('../models/order.model');
// const OrderItem = require('../models/orderItem.model');
// const Product = require('../models/product.model');

router.get('/cart', async (req, res) => {
  res.json({ message : "Done "});
  // try {
  //   // const cartId = req.query.cartId; // Mengambil cartId dari query parameter

  //   const cart = await CartItem.findAll({
  //     // where: { id: cartId },
  //     // include: {
  //     //   model: CartItem,
  //     //   include: Product, // Mengikutsertakan model Product dalam join
  //     // },
  //   });

  //   if (!cart) {
  //     return res.status(404).json({ message: 'Cart not found' });
  //   }

  //   res.json(cart);
  // } catch (error) {
  //   res.status(500).json({ message: 'Internal server error' });
  // }
});


// router.post('/cart', async (req, res) => {
//     const { productId, quantity } = req.body;

//     quantity = 1
//     try {
//         const existingCartItem = await CartItem.findOne({
//             where: { productId }
//         });

//         if (existingCartItem) {
//             // Jika produk sudah ada, update jumlahnya
//             existingCartItem.quantity += quantity;
//             await existingCartItem.save();
//           } else {
//             // Jika produk belum ada, tambahkan sebagai item baru di keranjang
//             const product = await Product.findByPk(productId);
//             await CartItem.create({ productId, quantity });
//           }
      
//           // ...
      
//           res.status(201).json({ message: 'Product added to cart' });
//     } catch (error) {
//         res.status(500).json({ message: 'internal server error' });
//     }
// });

// router.post('/cart2', async (req, res) => {
//   const { cartId, productId, quantity } = req.body;

//   try {
//       const existingCartItem = await CartItem.findOne({
//           where: { cardId, productId },
//           include: Product,
//       });

//       if (existingCartItem) {
//           // Jika produk sudah ada, update jumlahnya
//           existingCartItem.quantity += quantity;
//           await existingCartItem.save();
//         } else {
//           // Jika produk belum ada, tambahkan sebagai item baru di keranjang
//           const product = await Product.findByPk(productId);
//           await CartItem.create({ cartId, productId, quantity, Product: product });
//         }
    
//         // ...
    
//         res.status(201).json({ message: 'Product added to cart' });
//   } catch (error) {
//       res.status(500).json({ message: 'internal server error' });
//   }
// });

// router.post('/checkout', async (req, res) => {
//   const { cartId, userId } = req.body;

//   try {
//     // Cari keranjang berdasarkan ID
//     const cart = await Cart.findByPk(cartId, {
//       include: {
//         model: CartItem,
//         include: Product, // Mengikutsertakan model Product dalam join
//       },
//     });

//     if (!cart) {
//       return res.status(404).json({ message: 'Cart not found' });
//     }

//     // Buat pesanan baru
//     const order = await Order.create({ userId });

//     // Tambahkan item pesanan berdasarkan item di keranjang
//     for (const cartItem of cart.CartItems) {
//       await OrderItem.create({
//         orderId: order.id,
//         productId: cartItem.productId,
//         quantity: cartItem.quantity,
//         price: cartItem.Product.price,
//       });
//     }

//     // Hapus keranjang dan item-itemnya
//     await cart.destroy();

//     res.status(201).json({ message: 'Checkout successful' });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


module.exports = router;