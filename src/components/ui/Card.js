import classes from "./Card.module.css";

function Card(props) {
  console.log("🚀 ~ file: Card.js ~ line 4 ~ Card ~ props", props);
  return <div className={classes.card}>{props.children}</div>;
}
export default Card;
