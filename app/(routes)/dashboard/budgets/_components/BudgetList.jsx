import React from 'react'

function BudgetList() {
  return (
    <div className='mt-7'>
        <div className='grid grid-cols-1
        md:grid-col-2 lg:grid-cols-3'>
        <CreateBudget/>
        </div>
        
    </div>
  )
}

export default BudgetList