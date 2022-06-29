import React from 'react'
import Insight from './Insight'
import RecentOrders from './RecentOrders'

function Main() {
    return (
        <main>
            <h1>Dashboard</h1>
            <div className="date">
                <input type="date" />
            </div>
            <div className="insights">
                <Insight title={"Total Sales"}
                 icon={"monitoring"}
                 amount={"$25000"}
                 cx={38}
                 cy={38}
                 r={36}
                 per={"75%"}
                 time={"last 24 hours"}
                 clsnm={"sales"}
                  />
                  <Insight title={"Expenses"}
                 icon={"bar_chart"}
                 amount={"$1400"}
                 cx={38}
                 cy={38}
                 r={36}
                 per={"62%"}
                 time={"last 24 hours"}
                 clsnm={"expenditure"}
                 
                  />
                  <Insight title={"Total Income"}
                 icon={"stacked_line_chart"}
                 amount={"$3200"}
                 cx={38}
                 cy={38}
                 r={36}
                 per={"40%"}
                 time={"last 24 hours"}
                 clsnm={"income"}
                 />
            </div>
            <RecentOrders />
        </main>
    )
}

export default Main