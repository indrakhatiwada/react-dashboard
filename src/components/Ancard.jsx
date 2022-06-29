import React from 'react'

function Ancard({title,clsnam,icon,per,amt,indicator}) {
  return (

        <div className={"item "+ clsnam}>
          
                <div className="icon">
                <span class="material-symbols-sharp">
                    {icon}
            </span>
            </div>
                <div className="right">
                    <div className="info">
                        <h3>{title}</h3>
                        <small className="text-muted">Last 24 hours</small>
                    </div>
                    <h5 className={indicator}>{per}</h5>
                    <h3>{amt}</h3>
                </div>
                </div>
            
       
  )
}

export default Ancard