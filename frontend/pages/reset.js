import Reset from '../components/Reset';

const Reset = props => (
    <div>
       <Reset resetToken={props.query.resetToken}  />
    </div>
);

export default Reset;