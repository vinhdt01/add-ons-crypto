import classNames from "classnames/bind";
import styles from "../App.module.css";
const cx = classNames.bind(styles);

function CryptoItem(props) {
  return (
    <div className={cx("item")}>
      <img src={props.ImageUrl} className={cx("icon")} alt={props.Name} />
      <div className={cx("display-container")}>
        <div className={cx("name")}>{props.Name}</div>
        <div className={cx("fullname")}>{props.FullName}</div>
      </div>
      <div className={cx("price-container")}>
        <div className={cx("price")}>{props.Price}</div>

        <div
          className={cx(
            `price-change ${
              parseInt(props.Change24hr) < 0 ? "danger" : "success"
            }`
          )}
        >
          {props.Change24hr}
        </div>
      </div>
    </div>
  );
}
export default CryptoItem;
