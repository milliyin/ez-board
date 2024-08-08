'use client'
import { useState } from "react"
import { DataTable } from "../Datatable"


export default function Team(){
    const [members,setMembers] = useState<any>([
        {
            name:"illiyin",
            email: "illiyindesign@gmail.com",
            role: "admin",
            status:"active"
        },
        {
            name:"milliyin",
            email: "illiyindesign@gmail.com",
            role: "admin",
            status:"active"
        }
    ])
    return(
        <div className="container mx-auto py-10">
        {/* <DataTable columns={columns} data={data} /> */}
      </div>
    )
}