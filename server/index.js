import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config'
import mongoose from 'mongoose';
import cone from './models/conePrice.js';
import topping from './models/toppingPrice.js';
import flavor from './models/flavorPrice.js';

const app = express();
const PORT = 5000
app.use(cors())

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(201).send("this is working")
})

app.post('/', (req, res) => {
  const { orderCone, orderFlavor, orderToppings } = req.body;
  const cones = new cone(orderCone);
  const toppings = new topping(orderToppings);
  const flavors = new flavor(orderFlavor);

  let ErrorMsg = "";
  let totalPrice = 0;

  try {
    switch (toppings.toppingName) {
      case "Sprinkles":
        if (orderFlavor.flavorName == "Nutty Fruit" || orderFlavor.flavorName == "Raspberry Slushy") {
          totalPrice = cones.conePrice + toppings.toppingPrice + flavors.flavorPrice;
          res.status(201).json({totalPrice})
        } else {
          ErrorMsg = "Available for Raspberry Slushy and Nutty Fruit only";
          res.status(406).json({ message: ErrorMsg })
        }
        break;

      case "Toasted Marshmallow":
        if (orderFlavor.flavorName == "Coco Coffee") {
          ErrorMsg = "Available for Raspberry Slushy, Nutty Fruit and Pistachio Delight only";
          res.status(406).json({ message: ErrorMsg })
        } else {
          totalPrice = cones.conePrice + toppings.toppingPrice + flavors.flavorPrice;
          res.status(201).json({totalPrice})
        }
        break;

      case "Toasted Almond Flakes":
        if (orderFlavor.flavorName == "Raspberry Slushy") {
          ErrorMsg = "Available for Nutty Fruit, Coco Coffee and Pistachio Delight only";
          res.status(406).json({ message: ErrorMsg })
        } else {
          totalPrice = cones.conePrice + toppings.toppingPrice + flavors.flavorPrice;
          res.status(201).json({totalPrice})
        }
        break;

      case "Dash of Peanut butter":
        totalPrice = cones.conePrice + toppings.toppingPrice + flavors.flavorPrice;
        res.status(201).json({totalPrice})
        break;
        
      case "Oreo Crumbles":
        totalPrice = cones.conePrice + toppings.toppingPrice + flavors.flavorPrice;
        res.status(201).json({totalPrice})
        break;
        
      default:
        if (toppings.type = "Dried Fruit") {
          if (orderFlavor.flavorName == "Nutty Fruit" || orderFlavor.flavorName == "Raspberry Slushy") {
            totalPrice = cones.conePrice + toppings.toppingPrice + flavors.flavorPrice;
            res.status(201).json({totalPrice})
          } else {
            ErrorMsg = "Available for Raspberry Slushy and Nutty Fruit only";
            res.status(406).json({ message: ErrorMsg })
          }
        } else {
          ErrorMsg = "Please check Toppings name";
          res.status(406).json({ message: ErrorMsg })
        }
        break;
    }
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
  // const finalPrice = total.totalPrice(conePrice + flavorPrice + toppingsPrice)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

