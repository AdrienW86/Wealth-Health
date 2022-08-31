import React, {useState} from 'react';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import './picker.css';


function Picker() {

  const days = ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di']
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

const locale = {
  localize: {
    day: n => days[n],
    month: n => months[n]
  },
  formatLong: {
    date: () => 'dd/MM/yyyy'
  }
}

  const [startDate, setStartDate] = useState(new Date())


  return (
    <DatePicker
      locale={locale}
      selected = {new Date(startDate)}
       dateFormat = 'dd/MM/yyyy'
       onChange={date => setStartDate(date)}
    />
  )
}

export default Picker
