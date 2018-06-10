import { Component } from 'refast';
import { Group } from 'saltui';
import logic from './logic';
// 图片调用
const starImage = require('../../images/test.png');
export default class News extends Component {

    constructor(props) {
        super(props, logic);
    }

    componentDidMount() {
        this.dispatch('fetch')
    }

    handleClick(workNo) {
        this.dispatch('fetch', { workNo });
    }

    render() {
        const t = this;
        const { list = [], error } = t.state;
        return (
            <div className="page-demo">
                fefewfwf
                {list.map((item) => {
                    return (
                        <div>{item.title}</div>
                    )
                })
                }
                <img src={starImage} style={{width:'60vw'}}/>
            </div>
        );
    }
}
