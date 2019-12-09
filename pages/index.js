import Layout from "../components/Layout";
import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices';
const Index = (props) => (
    <Layout>
        <>
            <h1>Welcome to BitPrice</h1>
            <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi}></Prices>
        </>
    </Layout>

);
Index.getInitialProps = async function () {
    const rest = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await rest.json()
    return {
        bpi: data.bpi
    }
}

export default Index