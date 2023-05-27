// Import necessary dependencies and modules

import createError from '../src/utils/createError.js';

const { createEvent, deleteEvent } = require('../src/controllers/event.controller.js'); // Replace with your actual controller file
const Event = require('../src/model/event.model.js'); // Replace with your actual event model

describe('createEvent', () => {
  beforeEach(() => {
    // Mock req and res objects
    // req = {
    //   isAdmin: true,
    //   userId: 'adminUserId',
    //   body: {
    //     // Provide necessary properties for the new event
    //   },
    // };
    // res = {
    //   status: jest.fn(() => res),
    //   json: jest.fn(),
    // };
    // next = jest.fn();
    // Event.prototype.save = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new event when called by an admin', async () => {
    await createEvent(res, next);

    expect(Event.prototype.save).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledTimes(1);
    // You can add more assertions based on the expected behavior
  });

  it('should return a 403 error when called by a non-admin user', async () => {
    req.isAdmin = false;

    await createEvent(res, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(createError(403, 'Only admin can create an Event!'));
    expect(Event.prototype.save).not.toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it('should return a 409 error when a duplicate userId is detected', async () => {
    const mockError = new Error();
    mockError.code = 11000;
    mockError.keyPattern = { userId: 1 };
    mockError.keyValue = { userId: 'duplicateUserId' };

    Event.prototype.save.mockRejectedValueOnce(mockError);

    await createEvent(res, next);

    expect(Event.prototype.save).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({
      error: `User with userId ${mockError.keyValue.userId} already has an event.`,
    });
    expect(next).not.toHaveBeenCalled();
  });

  it('should handle other errors and pass them to the error handling middleware', async () => {
    const mockError = new Error();

    Event.prototype.save.mockRejectedValueOnce(mockError);

    await createEvent(res, next);

    expect(Event.prototype.save).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(mockError);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});

describe('deleteEvent', () => {
  beforeEach(() => {
    // Mock req and res objects
    req = {
      params: {
        id: 'eventId',
      },
      userId: 'userId',
    };
    res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    next = jest.fn();
    Event.findByIdAndDelete = jest.fn();
    Event.findById = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should delete the event when called by the owner', async () => {
    const mockEvent = {
      userId: 'userId',
    };

    Event.findById.mockResolvedValueOnce(mockEvent);

    await deleteEvent(req, res, next);

    expect(Event.findById).toHaveBeenCalledTimes(1);
    expect(Event.findById).toHaveBeenCalledWith(req.params.id);
    expect(Event.findByIdAndDelete).toHaveBeenCalledTimes(1);
    expect(Event.findByIdAndDelete).toHaveBeenCalledWith(req.params.id);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('event has been deleted!');
    expect(next).not.toHaveBeenCalled();
  });

  it('should return a 403 error when called by a non-owner', async () => {
    const mockEvent = {
      userId: 'anotherUserId',
    };

    Event.findById.mockResolvedValueOnce(mockEvent);

    await deleteEvent(req, res, next);

    expect(Event.findById).toHaveBeenCalledTimes(1);
    expect(Event.findById).toHaveBeenCalledWith(req.params.id);
    expect(Event.findByIdAndDelete).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(createError(403, 'You can Delete your Event only!'));
    expect(res.status).not.toHaveBeenCalled();
    expect(res.send).not.toHaveBeenCalled();
  });

  it('should handle errors and pass them to the error handling middleware', async () => {
    const mockError = new Error();

    Event.findById.mockRejectedValueOnce(mockError);

    await deleteEvent(req, res, next);

    expect(Event.findById).toHaveBeenCalledTimes(1);
    expect(Event.findById).toHaveBeenCalledWith(req.params.id);
    expect(Event.findByIdAndDelete).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(mockError);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.send).not.toHaveBeenCalled();
  });
});
