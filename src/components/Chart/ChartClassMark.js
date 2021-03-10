import { Column } from '@ant-design/charts';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { styleButtonTopTable } from '../../Common/variable/var';
export default function ChartClassMark() {
    // var data = [
    //     {
    //       name: 'London',
    //       class: 'Jan.',
    //       value: 18.9,
    //     },
    //     {
    //       name: 'Berlin',
    //       class: 'Jan.',
    //       value: 12.4,
    //     },
    //     {
    //       name: 'London',
    //       class: 'Feb.',
    //       value: 28.8,
    //     },
    //     {
    //       name: 'London',
    //       class: 'Mar.',
    //       value: 39.3,
    //     },
    //     {
    //       name: 'London',
    //       class: 'Apr.',
    //       value: 50,
    //     },
    //     {
    //       name: 'London',
    //       class: 'May',
    //       value: 47,
    //     },
    //     {
    //       name: 'London',
    //       class: 'Jun.',
    //       value: 20.3,
    //     },
    //     {
    //       name: 'London',
    //       class: 'Jul.',
    //       value: 24,
    //     },
    //     {
    //       name: 'London',
    //       class: 'Aug.',
    //       value: 35.6,
    //     },
    //     {
    //       name: 'Berlin',
    //       class: 'Feb.',
    //       value: 23.2,
    //     },
    //     {
    //       name: 'Berlin',
    //       class: 'Mar.',
    //       value: 34.5,
    //     },
    //     {
    //       name: 'Berlin',
    //       class: 'Apr.',
    //       value: 60,
    //     },
    //     {
    //       name: 'Berlin',
    //       class: 'May',
    //       value: 52.6,
    //     },
    //     {
    //       name: 'Berlin',
    //       class: 'Jun.',
    //       value: 35.5,
    //     },
    //     {
    //       name: 'Berlin',
    //       class: 'Jul.',
    //       value: 37.4,
    //     },
    //     {
    //       name: 'Berlin',
    //       class: 'Aug.',
    //       value: 42.4,
    //     },
    //   ];
    const dataSource = useSelector(state=>state);
    var config = {
        height: 450,
        data: dataSource,
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
        chart ?.downloadImage();
    };
    return ( <div className = "" >
        <Button type = "primary"
        style = { styleButtonTopTable }
        onClick = { downloadImage } 
        > Download </Button> 
        <
        Column {...config }
        onReady = {
            (chartInstance) => (chart = chartInstance) }
        /> </div>
    );
}