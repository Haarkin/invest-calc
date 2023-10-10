import classes from './InputGroup.module.css'

const InputGroup = (props) => {
    const classConstant = classes['input-group'] + ' ' + props.className;
    return (
        <div className={classConstant}>{props.children}</div>
    )
}

export default InputGroup;