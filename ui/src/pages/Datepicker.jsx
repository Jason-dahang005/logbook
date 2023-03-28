import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Datepicker = () => {   
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="  m-3" >
            <DatePicker className="bg-blue-200 "
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
    
</div>
            
       
    );
};

export default Datepicker;