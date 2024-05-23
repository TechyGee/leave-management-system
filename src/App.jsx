// import { Button } from "@/components/ui/button";
import { File01Icon, Search01Icon, Setting07Icon, DashboardSquare02Icon, Calendar03Icon, BubbleChatNotificationIcon } from "hugeicons-react";
import { useState } from "react";



const people = [
  {
    name: 'Calvin Hawkins',
    leavetype: [
      'compassion leave',
      'sick leave',
      'Annual leave',
      'others'
    ],
    status: [
      'Pending',
      'approved',
      'rejected'
    ],
    date: Date.now(),
    Reason: 'I have family programme that day',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    leavetype: [
      'compassion leave',
      'sick leave',
      'Annual leave',
      'others'
    ],
    status: [
      'Pending',
      'approved',
      'rejected'
    ],
    date: Date.now(),
    Reason: 'I have family programme that day',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
 
]

export default function Home() {

  const [input, setInput] = useState("")
  return (
    <div className="w-full bg-slate-300 text-black flex">
      <aside className="fixed p-4 bg-slate-900 left-0 top-0 w-64 h-full text-white bg-gray-900">
        <div className="text-2xl p-6 flex justify-center bg-slate-500 rounded-lg">NTL-LMS</div>
        <div className="mt-12">
          <nav className="flex flex-col space-y-2 text-white">
            <a href="/dashboard" className="font-medium px-3 py-3 text-slate-500 rounded-lg hover:bg-slate-300 hover:text-slate-900 flex items-center gap-3">
              <DashboardSquare02Icon size={22} />
              Dashboard
            </a>
            <a href="/team" className="font-medium px-3 py-3 text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-900 flex items-center gap-3">
            <Calendar03Icon size={22} />
              Calender
            </a>
            <a href="/projects" className="font-medium px-3 py-3 text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-900 flex items-center gap-3">
              <BubbleChatNotificationIcon size={22} />
              Notifications
              <span className="text-[12px] h-6 rounded-full bg-red-600 text-white w-6 flex justify-center items-center ml-8">10</span>
            </a>
            <a href="/reports" className="font-medium px-3 py-3 text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-900 flex items-center gap-3">
              <Setting07Icon size={22} />
              Settings
            </a>
          </nav>
        </div>
      </aside>
      <div className="min-h-screen w-full ml-64 bg-slate-50">
        <div className="flex justify-between shadow-md w-full px-12 py-6" >
          <div className="flex w-96 rounded-lg px-3 items-center gap-2 bg-slate-100  border">
            <Search01Icon size={22} color="gray"/>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}  className="w-full block px-4 py-2 outline-none rounded-md text-sm placeholder-slate-900 
              text-md text-slate-500 bg-slate-100
            "/>
          </div> 
          <div>
            <div className="group space-x-4 flex items-center px-4">
              <img className="shrink-0 h-10 w-10 rounded-full border shadow-sm" src="./vite.svg" alt="vite" />
              <div className="ltr:ml-7 rtl:mr-3">
                <p className="text-sm font-medium text-slate-900">Opeyemi</p>
                <p className="text-sm font-medium text-slate-500 ">Director of Admin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          {/* <Example /> */}
          <h2 className="text-2xl text-slate-700 border-b pb-2">Dashboard</h2>
          <div className="w-full bg-slate-100 mt-6 h-screen p-6 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-9">
                <p className="text-xl font-medium">Leave History</p>
                <div className="flex gap-6 py-2 px-4 rounded-lg">
                  <a href="" className="bg-green-100 px-4 text-green-800 rounded-sm shadow">All</a>
                  <a href="">Approved</a>
                  <a href="">Rejected</a>
                  <a href="">Pending</a>
                </div>
              </div>
              <button className="bg-green-600 p-2 px-4 flex gap-2 text-white 
                rounded-md items-center shadow-lg hover:bg-green-500 cursor-pointer
                ">
                <File01Icon size={22}/>
                Apply Leave
              </button>
            </div>
            <div>
                <Example />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  
  )
}

function Example() {
  return (
    <ul className="divide-y divide-gray-200 mt-12">
      {people.map((person) => (
        <li key={person.email} className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}







// {
//   name: 'Ted Fox',
//   email: 'ted.fox@example.com',
//   image:
//     'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// },
// {
//   name: 'Ted Fox',
//   email: 'ted.fox@example.com',
//   image:
//     'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// },
// {
//   name: 'Ted Fox',
//   email: 'ted.fox@example.com',
//   image:
//     'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// },
// {
//   name: 'Ted Fox',
//   email: 'ted.fox@example.com',
//   image:
//     'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }