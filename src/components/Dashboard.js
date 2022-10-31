import Footer from "./Footer"
import {Navigate} from 'react-router-dom'


function Dashboard(){
    const auth = true
    if (!auth){
        return(
        <Navigate to='/'/>
        )
    }
    return(
        <>
        <div className="dashboard">
            <h1>Dashboard</h1>
        </div>
        <Footer/>
        </>
    )
}

export default Dashboard