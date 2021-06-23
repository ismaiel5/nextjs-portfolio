import Styles from "../styles/Button.module.scss";

const Button = (props: any) => {
  return (
    <button className={Styles.btn} onClick={props.clickHandler}>
      {props.title}
    </button>
  );
};

export default Button;
