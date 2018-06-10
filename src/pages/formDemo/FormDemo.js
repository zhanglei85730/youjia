import { Component } from 'refast';
import { Group, TextField, Toast, PickerField, SelectField, Button } from 'saltui';
import logic from './logic';
const numberRegExp = /^(\d+\.\d*)|(\d+\.)|\d+/;

const monthArray = [
    { value: 0, text: '一月', phonetic: ['yi', 'yue'] },
    { value: 1, text: '二月', phonetic: ['er', 'yue'] },
    { value: 2, text: '三月', phonetic: ['san', 'yue'] },
    { value: 3, text: '四月', phonetic: ['si', 'yue'] },
    { value: 4, text: '五月', phonetic: ['wu', 'yue'] },
    { value: 5, text: '六月', phonetic: ['liu', 'yue'] },
    { value: 6, text: '七月', phonetic: ['qi', 'yue'] },
    { value: 7, text: '八月', phonetic: ['ba', 'yue'] },
    { value: 8, text: '九月', phonetic: ['jiu', 'yue'] },
    { value: 9, text: '十月', phonetic: ['shi', 'yue'] },
    { value: 10, text: '十一月', phonetic: ['shi', 'yi', 'yue'] },
    { value: 11, text: '十二月', phonetic: ['shi', 'er', 'yue'] },
];

class Demo extends Component {

    constructor(props) {
        super(props, logic);

        this.state = {
            // 年龄
            age: '',
            // 性别
            sexual: '7月',
            // 出生日期
            born: '',
            month: '',
        };
    }

    handleTextChange(name, newValue) {
        this.setState({
            [name]: newValue,
        });
        if (newValue.length > 5) {
            this.setState({
                errMsg: '最多输入5个字',
            });
        } else {
            this.setState({
                errMsg: null,
            });
        }
    }

    handleNumberChange(newValue) {
        this.setState({
            number: newValue,
        });
    }

    numberFilter(originValue) {
        const matches = originValue.match(numberRegExp);
        let number = '';
        if (matches) {
            number = matches[0];
        }
        return number;
    }

    handleNumberBlur(originValue) {
        this.setState({
            number: originValue.replace(/\.$/, '').replace(/^0*([0-9]+)/, '$1'),
        });
    }
    // 月份选择
    typeHandleChange(value) {
        this.setState({
            month: value,
        })
    }
    // 
    sexualHandle(value) {
        this.setState({ sexual: value })
    }
    // 提交
    submitHandle() {
        const { sexual: { value, text }, age } = this.state;
        debugger
        this.dispatch('fetch', { sexual: value })
        // this.dispatch('fetch');
    }

    render() {
        const t = this;

        return (
            <div>
                <Group>
                    <Group.Head
                        className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18"
                    >
                        表单测试
                    </Group.Head>
                    <Group.List>
                        <TextField
                            label="即时校验2" value={t.state.t1}
                            onChange={(value) => { t.handleTextChange('t1', value); }}
                            errMsg={t.state.errMsg}
                            toastComponent={Toast}
                        />
                        <SelectField
                            label="选择性别"
                            onSelect={t.sexualHandle.bind(t)}
                            options={[{ value: 'male', text: '男' }, { value: 'male', text: '女' }]}
                            value={t.state.sexual}
                            errMsg={t.state.errMsg}

                        />
                        <PickerField
                            label="请选择类型"
                            onSelect={t.typeHandleChange.bind(t)}
                            value={t.state.month}
                            options={monthArray}
                        />

                    </Group.List>
                </Group>
                <Button onClick={t.submitHandle.bind(t)}>提交</Button>
            </div>
        );
    }
}

export default Demo;