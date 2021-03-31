import { Route, Switch } from 'react-router-dom'

import { Footer, Header } from './components'
import { Home } from './home'
import { Comments } from './comments'

function App() {
    return (
        <div>
            <Header />

            <Switch>
                <Route path="/comments">
                    <Comments />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

            <Footer />
        </div>
    )
}

export default App
