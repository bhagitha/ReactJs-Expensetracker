import React from 'react';

import ChartBar  from "./ChartBar";
import './Char.css'
const Chart=(props)=> {
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);
const totalMaximun=Math.max(...dataPointValues) //pull all the values for max function

  return( <div className='chart'>
      {
          props.dataPoints.map((dataPoint)=>(
          <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMaximun} 
          label={dataPoint.label}/>))
}
  </div>
  );
}

export default Chart;
