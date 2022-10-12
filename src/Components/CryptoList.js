import classNames from "classnames/bind";
import useCryptoData from "../hooks/useCryptoData";
import styles from "../App.module.css";
import CryptoItem from "./CryptoItem";
const cx = classNames.bind(styles);
function CryptoList({ show }) {
  const { cryptoData, isLoading } = useCryptoData();
  return (
    show && (
      <div>
        <div className={cx("container")}>
          {!isLoading ? (
            cryptoData.map((itemData) => (
              <CryptoItem key={itemData.Id} {...itemData} />
            ))
          ) : (
            <p className={cx("loading-text")}>Loading Data...</p>
          )}
        </div>
      </div>
    )
  );
}

export default CryptoList;
