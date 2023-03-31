import { useState } from 'react'
import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts'
import addIcon from '../assets/png/addIcon.png'
import person1 from '../assets/png/person1.png'
import person2 from '../assets/png/person2.png'
import person3 from '../assets/png/person3.png'
import cartIcon from '../assets/svg/cartIcon.svg'
import houseIcon from '../assets/svg/houseIcon.svg'
import transportIcon from '../assets/svg/transportIcon.svg'
import styles from './Expense.module.scss'
import ExpenseItem from './ExpenseItem'




function Expense() {


  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const todayExpenses = [
    {
      id: 1,
      expense: "Grocery",
      time: "5:12 pm",
      location: "Belanja di pascar",
      price: 326.8,
      icon: cartIcon,
      iconBackgroundColor: "#32a7e2",
    },
    {
      id: 2,
      expense: "Transportation",
      time: "5:12 pm",
      location: "Naik bus umum",
      price: 15.0,
      icon: transportIcon,
      iconBackgroundColor: "#B548C6",
    },
    {
      id: 3,
      expense: "Housing",
      time: "5:12 pm",
      location: "Bayar Listrik",
      price: 185.75,
      icon: houseIcon,
      iconBackgroundColor: "#FF8700",
    },
  ];
  const previousExpenses = [
    {
      id: 1,
      expense: "Food and Drink",
      time: "5:12 pm",
      location: "Makan Steak",
      price: 156.0,
      icon: cartIcon,
      iconBackgroundColor: "#DC3434",
    },
    {
      id: 2,
      expense: "Entertainment",
      time: "5:12 pm",
      location: "Nonton Bioskop",
      price: 35.2,
      icon: transportIcon,
      iconBackgroundColor: "#4BA83D",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0)

  const onMouseHover = (data: any, index: number) => setActiveIndex(index)



  return (
    <>
      <main className={
        styles.expense
      }>
        <div className={styles.expensecard}>
          <section className={styles.expenseOverview}>
            <div className={styles.expenseHeader}>
              <p className={styles.expenseTitle}>Expense</p>
              <div className={styles.expenseActions}>
                <div className={styles.expenseImages}>
                  <img src={person1} className={styles.person1} alt='1' />
                  <img src={person2} className={styles.person2} alt='2' />
                  <img src={person3} className={styles.person3} alt='3' />
                </div>

                <button>
                  <img src={addIcon} className={styles.addIcon} alt='button+' />
                </button>
              </div>
            </div>
            <p className={styles.expenseDaterange}>
              01 - 25 March,2020
            </p>
            <ResponsiveContainer width="100%" minHeight="9vh">
              <BarChart data={data}>
                <Bar dataKey="uv" fill="rgba(21,122,255,0.2)"
                  onMouseOver={onMouseHover}
                >
                  {data.map((item, index) =>
                  (<Cell cursor="pointer"
                    fill={
                      index === activeIndex ?
                        "rgb(21,122,255)" :
                        "rgba(21,122,255,0.2)"
                    }
                    key={index}
                  />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <ExpenseItem expenses={todayExpenses} title="Today"/>
            <ExpenseItem expenses={previousExpenses} title='Monday, 23 March 2020' />
          </section>


          <section className={styles.moneyOverview}>
            p
          </section>
        </div>

      </main>
    </>
  )
}

export default Expense
