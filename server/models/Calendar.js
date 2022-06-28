const { Schema, model } = require('mongoose');

const CalendarSchema = new Schema(
    {

    }
)

const Calendar = model('Calendar', CalendarSchema);

module.exports = Calendar;