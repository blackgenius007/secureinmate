const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const InmateSchema = new mongoose.Schema(
  {
    inmate_name: {
      type: String,
      required: true,
    },
    inmate_number: {
      type: String,
      required: false,
    },
    facility_name: {
      type: String,
      required: true,
    },
    offence_category: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
     reg_officer: {
      type: String,
      required: false,
    },
    date_of_birth: {
      type: String,
      required: true,
    },
    ethnicity: {
      type: String,
      required: true,
    },
    social_security: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    eye_color: {
      type: String,
      required: true,
    },
    hair_color: {
      type: String,
      required: true,
    },
    scar_: {
      type: String,
      required: true,
    },
    med_condition: {
      type: String,
      required: true,
    },
    disability: {
      type: String,
      required: true,
    },
    id_number: {
      type: String,
      required: true,
    },
    nok_name: {
      type: String,
      required: true,
    },
    nok_addy: {
      type: String,
      required: true,
    },
    nok_contact: {
      type: String,
      required: true,
    },
    bookDate: {
      type: Date,
      required: true,
    },
    book_officer: {
      type: String,
      required: true,
    },
    arrest_oficer: {
      type: String,
      required: true,
    },
    book_time: {
      type: String,
      required: true,
    },
    arrest_agency: {
      type: String,
      required: true,
    },
    arrest_location: {
      type: String,
      required: true,
    },
    arrest_time: {
      type: String,
      required: true,
    },
    arrestDate: {
      type: Date,
      required: true,
    },
    verdict: {
      type: String,
      required: true,
    },
    sentencing_court: {
      type: String,
      required: true,
    },
    belongings: {
      type: String,
      required: true,
    },
    ImagePath: {
      type: String,
      required: true,
    },
    fingerPrint: {
      type: String,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    isActive: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Inmate = mongoose.model('inmates', InmateSchema, 'inmates');

module.exports = Inmate;
