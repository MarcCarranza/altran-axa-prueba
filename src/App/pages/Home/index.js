// Dependencies
import { Suspense } from 'react'

// Components 
import { Header } from '../../components/Header'
import { Directory } from '../../components/Directory'
import { Loading } from '../../components/common/Loading'
 
function HomeComponent() {
    return (
        <div>
            <Header />
            {/* <Suspense fallback={<Loading />}> */}
            <Directory />
            {/* </Suspense> */}
        </div>
    )
}

export const Home = HomeComponent