import { CCard, CCardBody, CCardHeader } from "@coreui/react"
import { CChartBar } from "@coreui/react-chartjs"

const ChartDataAttack = ({data}) =>{
  console.log('attack',data);
  var dataSet = data.map(item =>{
    return{
      label: item.key,
      backgroundColor: item.color,
      data:  [item.value]
    }
  });

    return(
        <CCard>
        <CCardHeader>
          <h4 className="card-title mb-0">
                Bar Chart
            </h4>
        </CCardHeader>
        <CCardBody className="card-body-barchart">
          <CChartBar
            datasets={dataSet}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
    )
}
export default ChartDataAttack;