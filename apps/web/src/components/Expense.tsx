import React, { useState } from 'react'
import styles from './Expense.module.scss'
import person1 from '../assets/png/person1.png'
import person2 from '../assets/png/person2.png'
import person3 from '../assets/png/person3.png'
import addIcon from '../assets/png/addIcon.png'
import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts'




function Expense() {
  const [activeIndex, setActiveIndex] = useState(0)

  const onMouseHover = (data: any, index: number) => setActiveIndex(data)


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
  ];

  return (
    <>
      <main className={
        styles.expense
      }>
        {activeIndex}
        <div className={styles.expensecard}>
          <section className={styles.expenseOverView}>
            <div className={styles.expenseHeader}>
              <p className={styles.expenseTitle}>Expense</p>
              <div className={styles.expenseActions}>
                <div className={styles.expenseImages}>
                  <img src={person1} alt='1' />
                  <img src={person2} alt='2' />
                  <img src={person3} alt='3' />
                </div>

                <button>
                  <img src={addIcon} alt='button+' />
                </button>
              </div>
            </div>
            <p className={styles.expenseDaterange}>

            </p>
          </section>
          <section className={styles.dateRange}>01 - 25 March,2020</section>
          <ResponsiveContainer width="100%" minHeight="9vh">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="rgba(21,122,255,0.2)"
                onMouseOver={onMouseHover}
              >
                {data.map((item, index) =>
                (<Cell cursor="pointer"
                  fill={
                    index === activeIndex ?
                      "rgb(21,122,255)":
                      "rgba(21,122,255,0.2)"
                  }
                  key={index}
                />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

      </main>
    </>
  )
}

export default Expense
