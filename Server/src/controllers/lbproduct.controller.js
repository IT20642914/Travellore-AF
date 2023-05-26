import Lbproduct from '../model/lbproduct.model.js';
import createError from '../utils/createError.js';

//http://localhost:9090/api/lbproduct
//create a new local business products for admin
export const createLbproduct = async(req, res, next) => {
    if(!req.isAdmin)
    return next(createError(403, 'Only admin can add a local business products '));

    const newLbproduct = new Lbproduct({
        userId: req.userId,
        ...req.body,
    })
    console.log("userid controller", req.userId)

    try{
        const saveLbproduct = await newLbproduct.save();
        res.status(201).json(savedLbproduct);
    }catch(err){
        next(err);
    }
};

//delete local business products Admin
export const deleteLbproduct = async(req, res, next) =>{
    try{
        const lbproduct = await Lbproduct.findById(req.params.id);

    console.log(req.params.id)
     if(lbproduct.userId !== req.userId)
       return next(createError(403, 'You can delete only you added products'));
       await Lbproduct.findByIdAndDelete(req.params.id);
       res.status(200).send('Product has been deleted!');
    }catch (err){
        next(err);
    }
};

//get selected add from add model
export const getLbproduct = async (req, res, next) => {
    try {
      const lbproduct = await Event.findById(req.params.id);
      if (!lbproduct) return next(createError(404, 'lbproduct Not Found!'));
      res.status(200).send(lbproduct);
    } catch (err) {
      next(err);
    }
  };

//get ads acoording to filtering
export const getLbproducts = async (req, res, next) => {
    const q = req.query;
    const filters = {
      ...(q.userId && { userId: q.userId }),
      ...(q.cat && { cat: q.cat }),
      ...((q.min || q.max) && {
        price: {
          ...(q.min && { $gt: q.min }),
          ...(q.max && { $lt: q.max }),
        },
      }),
      ...(q.search && { title: { $regex: q.search, $options: 'i' } }),
    };
    try {
      const lbproduct = await Lbproduct.find(filters).sort({ [q.sort]: -1 });
      res.status(200).send(lbproduct);
    } catch (err) {
      next(err);
    }
  };

//create update selected LBproduct
export const updateLbproduct = async (req, res) => {
    try {
      const lbproductId = req.params.id;
      
      // Find product by ID and update product details
      const updatedLbproduct = await Lbproduct.findByIdAndUpdate(
        lbproductId,
        {
          $set: req.body,
        },
        { new: true }
      );
  
      if (!updatedLbproduct) {
        return res.status(404).json({ error: 'Product is not found' });
      }
  
      return res.json({ message: 'Product details updated successfully', lbproduct: updatedLbproduct });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };