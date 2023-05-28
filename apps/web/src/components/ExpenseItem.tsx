import styles from "./Expense.module.scss";
import menuIcon from "../assets/png/menuIcon.png";

interface Expense {
  id: number;
  expense: string;
  time: string;
  location: string;
  price: number;
  icon: string;
  iconBackgroundColor: string;
}

function ExpenseItem({
  expenses,
  title,
}: {
  expenses: Expense[];
  title: string;
}) {
  return (
    <>
      <div className={styles.expensesOverviewHeader}>
        <p className={styles.expenseOverViewTitle}>{title}</p>
        <button>
          <img src={menuIcon} alt="menuIcon" />
        </button>
      </div>
      <ul>
        {expenses.map((el) => (
          <li className={styles.expenseItem} key={el.id}>
            <div className={styles.expenseItemLeft}>
              <div
                className={styles.expenseItemImage}
                style={{ backgroundColor: el.iconBackgroundColor }}
              >
                <img src={el.icon} alt="cart icon" />
              </div>
              <div className={styles.expenseItemDetails}>
                <p className={styles.expenseItemTitle}>{el.expense}</p>
                <p className={styles.expenseItemTime}>
                  {el.time} • {el.location}
                </p>
              </div>
            </div>
            <p className={styles.expenseItemRight}> {el.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ExpenseItem;
