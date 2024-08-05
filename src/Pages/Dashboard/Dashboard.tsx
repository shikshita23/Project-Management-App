import Cards from "../../Components/Atoms/card/Cards"
import {Row, Col} from 'antd'
import CardsTabs from "../../Components/Atoms/card/CardsTabs"
const Dashboard = () => {
    return (
    <>
      <Row className="flex justify-between">
        <Col>
        <Cards
            title="try out"
            content="try out content"
            className="mt-4"
            width={600}
        /> 
        </Col>
        <Col>
        <Cards
              title="try out 2"
              content="try out contentfjslkf fnslng ldnfls dslnfls"
              className="mt-4"
              width={600}
        /> 
        </Col>
      </Row>
      <CardsTabs
      />
    </>

  )
}

export default Dashboard
