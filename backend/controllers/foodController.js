import foodModel from '../models/foodModel.js';

// add food item
const addFood = async (req, res) => {
  let image_url = req.file.path; // ← Cloudinary puri URL deta hai

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_url, // ← ab puri URL save hogi
  });
  try {
    await food.save();
    res.json({ success: true, message: 'Food Added' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error' });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error' });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    // fs.unlink wali line REMOVE ki — ab local file nahi hai
    await foodModel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: 'Food Removed' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error' });
  }
};

export { addFood, listFood, removeFood };
