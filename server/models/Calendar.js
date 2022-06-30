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
            
        }
    }
)

const Calendar = model('Calendar', CalendarSchema);

module.exports = Calendar;