import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function App() {
    const [{}, dispatch] = useStateValue()

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
                console.log(authUser)
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
    }, [])

    return (
        <Router>
            <div className='app'>
                <Header />

                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/checkout'>
                        <Checkout />
                    </Route>
                    <Route path='/'>
                        {/* Home */}
                        <Home> </Home>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
