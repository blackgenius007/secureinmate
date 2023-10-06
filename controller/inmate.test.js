const { getOneInmate } = require('../controller/inmate');
const { Inmate } = require('../models');  // Replace with the correct import path for the Inmate model

jest.mock('../models/inmates', () => ({
  Inmate: {
    findOne: jest.fn(),
  },
}));

describe('getOneInmate', () => {
  it('should retrieve details of a specific inmate', async () => {
    const mockInmateId = 'mockInmateId';

    // Mock request and response objects
    const req = {
      params: {
        id: mockInmateId,
      },
    };

    const jsonMock = jest.fn();
    const res = {
      json: jsonMock,
    };

    // Mock Inmate.findOne to return a mock inmate
    const mockInmate = {
      _id: mockInmateId,
      name: 'Mock Inmate',
      // Add other fields as needed
    };
    Inmate.findOne.mockResolvedValue(mockInmate);

    // Call the getOneInmate function with the mock request and response
    await getOneInmate(req, res);

    // Check if the response JSON contains the correct inmate details
    expect(res.json).toHaveBeenCalledWith(mockInmate);
  });

  it('should handle when inmate is not found', async () => {
    // Mock request and response objects
    const req = {
      params: {
        id: 'nonExistentId',
      },
    };

    const jsonMock = jest.fn();
    const statusMock = jest.fn(() => ({ json: jsonMock }));

    const res = {
      json: jsonMock,
      status: statusMock,
    };

    // Mock Inmate.findOne to return null (inmate not found)
    Inmate.findOne.mockResolvedValue(null);

    // Call the getOneInmate function with the mock request and response
    await getOneInmate(req, res);

    // Check if the response status is 404 and the correct error message is sent
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ success: false, error: 'Inmate not found' });
  });
});






// const { getAllInmate } = require('./inmate');

// // Mock the Inmate model
// jest.mock('../models/Inmates', () => ({
//   find: jest.fn(),
// }));

// const Inmate = require('../models/Inmates');

// describe('getAllInmate', () => {
//   it('should retrieve all inmates for a given ownerEmail', async () => {
//     const req = {
//       params: {
//         ownerEmail: 'test@example.com',
//       },
//     };

//     const res = {
//       json: jest.fn(), 
//     };

//     const mockInmates = [{ name: 'Inmate1' }, { name: 'Inmate2' }];
//     Inmate.find.mockResolvedValue(mockInmates);

//     // Call the getAllInmate function with the mock request and response
//     await getAllInmate(req, res);

//     // Assert that the response contains the correct inmates
//     expect(res.json).toHaveBeenCalledWith(mockInmates);
//   });

//   it('should handle errors', async () => {
//     const req = {
//       params: {
//         ownerEmail: 'invalid-email',
//       },
//     };

//     const res = {
//       json: jest.fn(),
//     };

//     const next = jest.fn();

//     const errorMessage = 'Database error';
//     Inmate.find.mockRejectedValue(new Error(errorMessage));

//     // Call the getAllInmate function with the mock request and response
//     await getAllInmate(req, res, next);

//     // Assert that next is called with an error
//     expect(next).toHaveBeenCalledWith(new Error('Database error'));
//   });
// });







 