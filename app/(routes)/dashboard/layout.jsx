"use client"
import React from 'react'
import SideNav from './_components/SideNav'
import DashboardHeader from './_components/DashboardHeader'
import { db } from '@/utils/dbConfig' 
import { Budgets } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'

function DashboardLayout({children}) {

  const {user}=useUser();
  const checkUserBudgets=async()=>{
    const result=await db.select()
    .from(Budgets)
    .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
  }
  return (
    <div>
        <div className='fixed md:w-64 hidden md:block'>
            <SideNav/>
        </div>
        <div className='md:ml-64'>
            <DashboardHeader/>
            {children}
        </div>
        </div>
  )
}

export default DashboardLayout