const { register } = require('./authV3');
const { User } = require('../models/User'); // Replace with the correct import path for the User model
const shortid = require('shortid');
const cron = require('cron');

jest.mock('shortid', () => ({
  generate: jest.fn(),
}));

jest.mock('cron', () => ({
  schedule: jest.fn(),
}));

jest.mock('../models', () => ({
  User: {
    create: jest.fn(),
    find: jest.fn(),
    updateMany: jest.fn(),
  },
}));

jest.mock('../utils/mongoose', () => ({
  Types: {
    ObjectId: {
      isValid: jest.fn(),
    },
  },
}));

describe('register', () => {
  it('should create a user and send a success response', async () => {
    // Mock request and response objects
    const req = {
      body: {
        organizationName: 'TestOrg',
        address: 'TestAddress',
        contactPerson: 'TestPerson',
        email: 'test@example.com',
        contactNumber: '1234567890',
        password: 'testpassword',
        ownerId: null,
        ownerEmail: 'owner@example.com',
        country: 'TestCountry',
      },
    };

    const jsonMock = jest.fn();
    const statusMock = jest.fn(() => ({ json: jsonMock }));

    const res = {
      json: jsonMock,
      status: statusMock,
    };

    // Mock shortid and cron behavior
    shortid.generate.mockReturnValue('mockedActivationCode');
    cron.schedule.mockImplementation((cronTime, callback) => {
      // Simulate calling the callback immediately
      callback();
    });

    // Mock User.create to return a user object
    const mockUser = {
      email: 'test@example.com',
      ownerEmail: 'owner@example.com',
      organizationName: 'TestOrg',
      address: 'TestAddress',
      contactPerson: 'TestPerson',
      contactNumber: '1234567890',
      password: 'testpassword',
      country: 'TestCountry',
      activationCode: 'mockedActivationCode',
      activationCodeExpiration: expect.any(Date),
      getSignedJwtToken: jest.fn().mockReturnValue('mockedToken'),
    };
    User.create.mockResolvedValue(mockUser);

    // Call the register function with the mock request and response
    await register(req, res);

    // Check if the response status is set to 200
    expect(res.status).toHaveBeenCalledWith(200);

    // Check if the response JSON is sent with the expected data
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      token: 'mockedToken',
      data: mockUser,
    });
  });

  it('should handle registration for an owner', async () => {
    // Mock request and response objects for owner registration
    const req = {
      body: {
        organizationName: 'OwnerOrg',
        address: 'OwnerAddress',
        contactPerson: 'OwnerPerson',
        email: 'owner@example.com',
        contactNumber: '9876543210',
        password: 'ownerpassword',
        ownerId: null,
        ownerEmail: null,
        country: 'OwnerCountry',
      },
    };

    const jsonMock = jest.fn();
    const statusMock = jest.fn(() => ({ json: jsonMock }));

    const res = {
      json: jsonMock,
      status: statusMock,
    };

    // Mock shortid and cron behavior
    shortid.generate.mockReturnValue('mockedActivationCode');
    cron.schedule.mockImplementation((cronTime, callback) => {
      // Simulate calling the callback immediately
      callback();
    });

    // Mock User.create to return a user object for owner
    const mockOwnerUser = {
      email: 'owner@example.com',
      organizationName: 'OwnerOrg',
      address: 'OwnerAddress',
      contactPerson: 'OwnerPerson',
      contactNumber: '9876543210',
      password: 'ownerpassword',
      country: 'OwnerCountry',
      activationCode: 'mockedActivationCode',
      activationCodeExpiration: expect.any(Date),
      getSignedJwtToken: jest.fn().mockReturnValue('mockedOwnerToken'),
    };
    User.create.mockResolvedValue(mockOwnerUser);

    // Call the register function with the mock request and response for owner registration
    await register(req, res);

    // Check if the response status is set to 200
    expect(res.status).toHaveBeenCalledWith(200);

    // Check if the response JSON is sent with the expected data for owner registration
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      token: 'mockedOwnerToken',
      data: mockOwnerUser,
    });
  });
});
