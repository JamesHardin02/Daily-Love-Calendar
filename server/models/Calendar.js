const { Schema, model } = require('mongoose');

const CalendarSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        picturesUrl: {
            type: String,
            required: true
        },
        quotes: {
            type: String,
            unique: true
        }
    }
)

const Calendar = model('Calendar', CalendarSchema);

module.exports = Calendar;