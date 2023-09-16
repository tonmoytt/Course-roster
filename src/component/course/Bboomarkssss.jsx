 
import PropType from 'prop-types'
const Bboomarkssss = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div>
            <ol>
            <li>{title}</li>
            </ol>
            
        </div>
    );
};
Bboomarkssss.prototype={
    bookmark:PropType.func
}
export default Bboomarkssss;