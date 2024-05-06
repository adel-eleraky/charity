import styles from "./ShowDate.module.css";
function ShowDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${day}/${month}/${year}`;
  console.log(formattedDate);

  return (
    <div className={styles.container}>
      <div className={styles.date}>{formattedDate}</div>
      <svg
        className={styles["date-icon"]}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M4 11h16M4 7v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2ZM15 3v4M9 3v4"
        />
      </svg>
    </div>
  );
}

export default ShowDate;
