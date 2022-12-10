import styles from "./Progress.module.scss";

const Progress = () => {
  return (
    <div className="w-5/12 bg-gradient-to-r from-[#0D3251] to-[#19476C] min-h-screen">
      <div className="mx-auto w-96 mt-52">
        <div className="relative mb-14">
          <h3
            className={`${styles.circle} ${styles.stick} ${styles.text} ${styles.selected}`}
          >
            Welcome
          </h3>
        </div>
        <div className="relative mb-14">
          <h3 className={`${styles.circle} ${styles.stick} ${styles.text}`}>
            Connect your Shopify store
          </h3>
        </div>

        <div className="relative mb-14">
          <h3 className={`${styles.circle} ${styles.stick} ${styles.text}`}>
            Connect your customer support email
          </h3>
        </div>
        <div className="relative mb-14">
          <h3 className={`${styles.circle} ${styles.text}`}>Done</h3>
        </div>
      </div>
    </div>
  );
};

export default Progress;
