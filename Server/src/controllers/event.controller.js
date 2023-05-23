import Event from '../model/event.model.js';
import createError from '../utils/createError.js';

// http://localhost:9090/api/event
//create a new Event for admin
export const createEvent = async (req, res, next) => {
  if (!req.isAdmin)
    return next(createError(403, 'Only admin can create a Event!'));

  const newEvent = new Event({
    userId: req.userId,
    ...req.body,
  });
  console.log("userid controller",req.userId)

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    next(err);
  }
};

//create delete function for admin' Event
export const deleteEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);

console.log(req.params.id)
    if (event.userId !== req.userId)
      return next(createError(403, 'You can Delete your Event only!'));
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).send('event has been deleted!');
  } catch (err) {
    next(err); 
  }
};

//get seleted add from Add model
export const getEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return next(createError(404, 'event Not Found!'));
    res.status(200).send(event);
  } catch (err) {
    next(err);
  }
};


//get ads acoording to filtering
export const getEvents = async (req, res, next) => {
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
    const event = await Event.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(event);
  } catch (err) {
    next(err);
  }
};


//create update selected Event
export const updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    
    // Find Event by ID and update Event details
    const updatedEvent = await Event.findByIdAndUpdate(
        eventId,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: 'Evebnt is not found' });
    }

    return res.json({ message: 'Event details updated successfully', event: updatedEvent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};
