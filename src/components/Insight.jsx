import React from 'react'

function Insight({title,amount,cx,cy,r,per,time,icon, clsnm}) {
    return (
        <div className={clsnm}>
            <span class="material-symbols-sharp">
                {icon}
            </span>
            <div className="middle">
              <div className="left">
                  <h3>{title}</h3>
                  <h1>{amount}</h1>
            </div>  
            <div className="progress">
                <svg>
                    <circle cx={cx} cy={cy} r={r}>

                    </circle>
                </svg>
                <div className="number">
                    <p>{per}</p>
                </div>
            </div>
            </div>
            <small className="text-muted">
                {time}
            </small>

        </div>
    )
}

export default Insight;