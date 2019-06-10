import React from 'react';
import {Slot} from 'react-page-layout';
import {Layout} from 'antd';
const {Header,Left,Right,Footer,Content}=Layout;

class Defaults extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{width:'100%',height:'100px',backgroundColor:'#000'}}></Header>
            </Layout>
        );
    }
}
export default Defaults;