import React from 'react'
import Ancard from './Ancard'

function Salesanalytics() {
  return (
    <div className="sales-analytics">
        <h2>Sales Analytics</h2>
        <Ancard title={"Online Orders"}
            icon={"shopping_cart"}
            clsnam={"online"}
            per={"+39%"}
            amt={3846}
            indicator={"success"}

            />
            <Ancard title={"Offline Orders"}
            icon={"local_mall"}
            clsnam={"offline"}
            per={"-17%"}
            amt={1100}
            indicator={"danger"}

            />
            <Ancard title={"New Customers"}
            icon={"person_outline"}
            clsnam={"customers"}
            per={"+25%"}
            amt={7589}
            indicator={"success"}

            />
            <div className="item add-product">
                <div>
                    <span className="material-symbols-sharp">add</span>
                    <h3>Add Products</h3>
                </div>
            </div>
    </div>
  )
}

export default Salesanalytics