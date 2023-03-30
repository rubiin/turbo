import React from 'react'
import styles from './Expense.module.scss'
import person1 from '../assets/png/person1.png'
import person2 from '../assets/png/person2.png'
import person3 from '../assets/png/person3.png'
import addIcon from '../assets/png/addIcon.png'


const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]


function Expense() {
  return (
    <>
    <main className={
      styles.expense
    }>

      <div className={styles.expensecard}>
        <section className={styles.expenseOverView}>
          <div className={styles.expenseHeader}>
            <p className={styles.expenseTitle}>Expense</p>
            <div className={styles.expenseActions}>
            <div className={styles.expenseImages}>
              <img src={person1} alt='1'/>
              <img src={person2} alt='2'/>
              <img src={person3} alt='3'/>
            </div>

            <button>
              <img src={addIcon} alt='button+'/>
            </button>
            </div>
          </div>
          <p className={styles.expenseDaterange}>

          </p>
        </section>
        <section className={styles.dateRange}>01 - 25 March,2020</section>
      </div>

    </main>
    </>
  )
}

export default Expense
