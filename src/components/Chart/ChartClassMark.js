import { Column } from '@ant-design/charts';
import { Button } from 'antd';
import { useState,useEffect } from 'react';
import { styleButtonTopTable } from '../../Common/variable/var';
import { dataChart } from '../../contructData/Class';
import { GetDataChartClass } from '../../services/ClassService';
import { useDispatch,useSelector } from "react-redux";

export default function ChartClassMark() {
    const dispatch = useDispatch();
   const data = useSelector(state=>state.Class.chart);
   const dataConverted = data.map(item=>{
    return {
      ...item,
      value: Number(item.value)
    }
   })
    console.log(dataConverted);
   useEffect(()=>{
    GetDataChartClass(dispatch)
    .then(data =>{
      console.log(typeof data[0].value);
    })
   },[])
    var config = { 
        height: 450,
        data: dataConverted,
        isGroup: true,
        xField: 'class',
        yField: 'value',
        seriesField: 'name',
        label: {
            position: 'middle',
            layout: [
                { type: 'interval-adjust-position' },
                { type: 'interval-hide-overlap' },
                { type: 'adjust-color' },
            ],
        },
    };
    let chart;
    const downloadImage = () => {
        chart?.downloadImage();
    };
    return ( <div className = "" >
        <Button type = "primary"
        style = { styleButtonTopTable }
        onClick = { downloadImage }> Download </Button> 
        <Column {...config }
        onReady = {
            (chartInstance) => (chart = chartInstance)
        }
        /> </div>

    );
}
