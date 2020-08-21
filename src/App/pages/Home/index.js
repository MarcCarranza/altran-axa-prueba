// Components 
import { Header } from '../../components/Header'
import { Directory } from '../../components/Directory'
 
function HomeComponent() {
    return (
        <div>
            <Header />
            <Directory />
        </div>
    )
}

export const Home = HomeComponent