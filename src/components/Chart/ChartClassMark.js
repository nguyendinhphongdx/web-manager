import { Column } from '@ant-design/charts';
import { Button } from 'antd';
export default function ChartClassMark(){
    var data = [
        {
          name: 'London',
          月份: 'Jan.',
          月均降雨量: 18.9,
        },
        {
          name: 'London',
          月份: 'Feb.',
          月均降雨量: 28.8,
        },
        {
          name: 'London',
          月份: 'Mar.',
          月均降雨量: 39.3,
        },
        {
          name: 'London',
          月份: 'Apr.',
          月均降雨量: 50,
        },
        {
          name: 'London',
          月份: 'May',
          月均降雨量: 47,
        },
        {
          name: 'London',
          月份: 'Jun.',
          月均降雨量: 20.3,
        },
        {
          name: 'London',
          月份: 'Jul.',
          月均降雨量: 24,
        },
        {
          name: 'London',
          月份: 'Aug.',
          月均降雨量: 35.6,
        },
        {
          name: 'Berlin',
          月份: 'Jan.',
          月均降雨量: 12.4,
        },
        {
          name: 'Berlin',
          月份: 'Feb.',
          月均降雨量: 23.2,
        },
        {
          name: 'Berlin',
          月份: 'Mar.',
          月均降雨量: 34.5,
        },
        {
          name: 'Berlin',
          月份: 'Apr.',
          月均降雨量: 60,
        },
        {
          name: 'Berlin',
          月份: 'May',
          月均降雨量: 52.6,
        },
        {
          name: 'Berlin',
          月份: 'Jun.',
          月均降雨量: 35.5,
        },
        {
          name: 'Berlin',
          月份: 'Jul.',
          月均降雨量: 37.4,
        },
        {
          name: 'Berlin',
          月份: 'Aug.',
          月均降雨量: 42.4,
        },
      ];
      var config = {
        height:450,
        data: data,
        isGroup: true,
        xField: '月份',
        yField: '月均降雨量',
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
      return(
          <div className="">
            <Button type="primary"  onClick={downloadImage}>Download</Button>
            <Column {...config} onReady={(chartInstance) => (chart = chartInstance)} />
          </div>
        
      );
}