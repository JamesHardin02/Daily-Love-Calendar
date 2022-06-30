const { Schema, model } = require('mongoose');

const CalendarSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        pictures: {

        },
        quotes: {
            type: String
        }
    }
)

const Calendar = model('Calendar', CalendarSchema);

module.exports = Calendar;