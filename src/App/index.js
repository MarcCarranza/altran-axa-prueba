// Dependencies
import { connect } from 'react-redux'

// Pages
import { Home } from './pages/Home'

// Style
import './app.css'

function AppComponent() {
    return (
        <div className='app'>
            <Home/>
        </div>
    )
}

const mapStateToProps = ({ count }) => ({
    count
})

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch({ type: 'FETCH' })
})

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)